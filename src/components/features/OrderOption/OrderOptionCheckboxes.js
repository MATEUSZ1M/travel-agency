import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../../../utils/formatPrice';
import styles from './OrderOption.scss';

const newValueSet = (currentValue, id, checked) => {
  if (checked) {
    return [...currentValue, id];
  } else {
    return currentValue.filter((value) => value != id);
  }
};

const OrderOptionCheckboxes = ({ values, setOptionValue, currentValue }) => (
  <div className={styles.checkboxes}>
    {values.map((value) => (
      <label key={value.id} name={value.id}>
        <input
          id={value.id}
          name={value.name}
          type='checkbox'
          value={value.id}
          onChange={(event) =>
            setOptionValue(
              newValueSet(currentValue, value.id, event.currentTarget.checked)
            )
          }
          //TODO
          checked
        />

        <span>
          {value.name} {formatPrice(value.price)}
        </span>
      </label>
    ))}
  </div>
);

OrderOptionCheckboxes.propTypes = {
  values: PropTypes.array,
  currentValue: PropTypes.array,
  setOptionValue: PropTypes.func,
};

export default OrderOptionCheckboxes;