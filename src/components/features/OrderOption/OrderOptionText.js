import React from 'react';
// import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionText = ({defaultValue, setOptionValue, placeholder}) => (
  <div >
    <input
      placeholder={placeholder}
      type='text'
      value={defaultValue}
      onChange={event => setOptionValue(event.currentTarget.value)}
    ></input>
    
  </div>
);

OrderOptionText.propTypes = {
  currentValue: PropTypes.array,
  setOptionValue: PropTypes.func,
  options: PropTypes.object,
  defaultValue: PropTypes.number,
  placeholder: PropTypes.string,
};


export default OrderOptionText;
