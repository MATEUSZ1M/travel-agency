import React from 'react';
import PropTypes from 'prop-types';
import { Col, Grid } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import styles from './OrderForm.scss';

const OrderForm = ({tripCost, options}) => (
  <div className={styles.component}>
    <Grid>
      <Col xs={12}>
        <OrderSummary cost={tripCost} options={options}/>
      </Col>
    </Grid>
  </div>
);
OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderForm;
