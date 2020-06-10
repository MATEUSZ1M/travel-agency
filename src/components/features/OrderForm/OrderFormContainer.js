import {connect} from 'react-redux';
import {getOrderOptions} from '../../../redux/orderRedux';
import OrderForm from './OrderForm';

import {setOrderOption} from '../../../redux/orderRedux';

const mapStateToProps = state => ({
  options: getOrderOptions(state),
});

const mapDispatchToProps = (dispatch) => ({
  setStates: (newState) => dispatch(setOrderOption(newState)),
});


export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);