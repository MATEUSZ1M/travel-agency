import React from 'react';
import PropTypes from 'prop-types';
import { Col, Grid, Row } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import styles from './OrderForm.scss';
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
  <div className={styles.component}>
    <Grid>
      <Row>
        <Col xs={12}>
          {pricing.map((data) => (
            <Col md={4} key={data.id}>
              <OrderOption
                {...data}
                options={currentValue}
                setOrderOption={setOrderOption}
              />
            </Col>
          ))}
          <OrderSummary cost={tripCost} options={options} />
          <Button onClick={() => sendOrder(options, tripCost)}>Order now!</Button>

        </Col>
      </Row>
    </Grid>
  </div>
);
OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  currentValue: PropTypes.func,
  setOrderOption: PropTypes.func,
};

export default OrderForm;
