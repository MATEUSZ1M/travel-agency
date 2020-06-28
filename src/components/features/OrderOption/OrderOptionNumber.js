import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionNumber = ({ currentValue, setOptionValue, limits, defaultValue }) => (
  <div className={styles.number}>
 

    <input
      className={styles.imputSmall}
      type='number'
      min={`${limits.min}`}
      max={`${limits.max}`}
      placeholder={defaultValue}
      value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)}
    >
    </input>
    
  </div>
);

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.node,
  setOptionValue: PropTypes.func,
  limits: PropTypes.object,
  defaultValue: PropTypes.number,
};

export default OrderOptionNumber;
