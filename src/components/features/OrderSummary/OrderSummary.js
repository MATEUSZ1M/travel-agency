import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';

const OrderSummary = ({cost}) => (
  <div>
    <h2 className={styles.component}>
Total:<strong>{cost}</strong>
    </h2>
  </div>
);

OrderSummary.propTypes = {
  cost: PropTypes.string,
};

export default OrderSummary;
