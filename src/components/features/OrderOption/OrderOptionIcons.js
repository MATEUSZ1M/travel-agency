import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import Icon from '../../common/Icon/Icon';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionIcons = ({ values, required, setOptionValue }) => (
  <div>
    {(!required || '') && (
      <div>
        {values.map((value) => (
          <div
            className={styles.icon}
            key={value.id}
            onClick={() => {
              setOptionValue('');
            }}
          >
            <Icon name={'times-circle'} />
            <h2>{formatPrice(0)}</h2>
          </div>
        ))}
      </div>
    )}
    {values.map((value) => (
      <div
        
        className={styles.icon}
        activeClassName={styles.iconActive}

        key={value.id}
        onClick={() => {
          setOptionValue(value.id);
        }}
      >
        <Icon key={value.id} name={value.icon} />
        <span>{value.name} {formatPrice(value.price)}</span>
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  icon: PropTypes.string,
  setOptionValue: PropTypes.func,
  required: PropTypes.bool,
};

export default OrderOptionIcons;
