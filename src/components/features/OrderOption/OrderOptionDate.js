import React from 'react';
import DatePicker from 'react-datepicker';
// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { PropTypes } from 'prop-types';

class OrderOptionDate extends React.Component {
  state = {
    startDate: new Date(),
  };

  static propTypes = {
    setOptionValue: PropTypes.func,
  };

  handleChange = (date) => {
    this.props.setOptionValue(date);
    this.setState({
      startDate: date,
    });
  };

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        dateFormat="dd/MM/yyyy"
      />
    );
  }
}

export default OrderOptionDate;
