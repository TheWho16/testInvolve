import { compose } from 'redux';
import { connect } from 'react-redux';
import App from './app';
import { loadData, addInputAction, getConvertedValue, loadOutPutValue, addOutputAction, addWithdrawAction, addInvoiceAction, calculate } from '../../store/actions'

const mapStateToProps = (state) => {
    return {
        data: state.reducerData.data,
        inputValue: state.reducerData.inputValue,
        outputValue: state.reducerData.outputValue,
        calculate: state.reducerData.calculate,
    }
};

const mapDispatchToProps = { loadData, getConvertedValue, addInputAction, loadOutPutValue, addOutputAction, addWithdrawAction, addInvoiceAction, calculate }

const AppConteiner = compose(
    connect(mapStateToProps, mapDispatchToProps),
)(App);

export default AppConteiner;