import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';
import Button from '../../common/Button/Button';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';
import settings from '../../../data/settings';

const sendOrder = (options, tripCost) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};
const OrderForm = ({ tripCost, options, currentValue, setOrderOption }) => (
  <form>
    <Row>
      {pricing.map((data) => (
        <Col md={4} key={data.id}>
          <OrderOption
            currentValue={options[data.id]}
            options={currentValue}
            setOrderOption={setOrderOption}
            {...data}
          />
        </Col>
      ))}
      <OrderSummary cost={tripCost} options={options} />
    </Row>
    <Button onClick={() => sendOrder(options, tripCost)}>Order now!</Button>
  </form>
);
OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  currentValue: PropTypes.number,
  setOrderOption: PropTypes.func,
};

export default OrderForm;
