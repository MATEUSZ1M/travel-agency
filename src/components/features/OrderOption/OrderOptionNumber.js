import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionNumber = ({ currentValue, setOptionValue, limits }) => (
  <div className={styles.number}>
 

    <input
      className={styles.imputSmall}
      type='number'
      min={`${limits.min}`}
      max={`${limits.max}`}
      value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)}
    >
    </input>
    
  </div>
);

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.array,
  setOptionValue: PropTypes.func,
  limits: PropTypes.array,
};

export default OrderOptionNumber;
