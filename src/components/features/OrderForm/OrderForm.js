import React from 'react';
import PropTypes from 'prop-types';
import { Col, Grid } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import styles from './OrderForm.scss';

const OrderForm = ({tripCost}) => (
  <div className={styles.component}>
    <Grid>
      <Col xs={12}>
        <OrderSummary cost={tripCost}/>
      </Col>
    </Grid>
  </div>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
};

export default OrderForm;
