import React from 'react';
import PropTypes from 'prop-types';
import { Col, Grid } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import styles from './OrderForm.scss';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';

const OrderForm = ({ tripCost, options }) => (
  <div className={styles.component}>
    <Grid>
      <Col xs={12}>
        {pricing.map((data) => (
          <Col md={4} key={data.id}>
            <OrderOption {...data} />
          </Col>
        ))}
        <OrderSummary cost={tripCost} options={options} />
      </Col>
    </Grid>
  </div>
);
OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderForm;
