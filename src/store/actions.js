
const ADD_DATA = 'ADD_DATA';
const ADD_INPUT_VALUE = 'ADD_INPUT_VALUE';
const ADD_OUTPUT_VALUE = 'ADD_OUTPUT_VALUE';
const CALCULATE = 'CALCULATE';
const ADD_OUTPUT_DATA = 'ADD_OUTPUT_DATA';
const ADD_INVOICE = 'ADD_INVOICE';
const ADD_WITHDRAW = 'ADD_WITHDRAW';
const CONVERTED = 'CONVERTED';

const LOAD_OUTPUT_VALUE = 'LOAD_OUTPUT_VALUE';
const LOAD_OUTPUT_DATA = 'LOAD_OUTPUT_DATA';
const LOAD_DATA = 'LOAD_DATA';


const addDataAction = (data) => ({ type: ADD_DATA, payload: data });
const addInputAction = (number) => ({ type: ADD_INPUT_VALUE, payload: number });
const addOutputAction = (number) => ({ type: ADD_OUTPUT_VALUE, payload: number });
const addOutputDataAction = (data) => ({ type: ADD_OUTPUT_DATA, payload: data });
const addInvoiceAction = (invoice) => ({ type: ADD_INVOICE, payload: invoice });
const addWithdrawAction = (withdraw) => ({ type: ADD_WITHDRAW, payload: withdraw });
const getConvertedValue =(data)=>({ type: CONVERTED, payload: data });

const loadData = () => {
    return {
        type: LOAD_DATA
    }
}
const loadOutPutValue = () => {
    return {
        type: LOAD_OUTPUT_VALUE
    }
}
const loadOutputData = () => {
    return {
        type: LOAD_OUTPUT_DATA
    }
}
const calculate = () => {
    return {
        type: CALCULATE
    }
}


export {
    ADD_DATA,
    LOAD_DATA,
    LOAD_OUTPUT_VALUE,
    LOAD_OUTPUT_DATA,
    CALCULATE,
    addDataAction,
    loadData,
    addInputAction,
    addOutputAction,
    calculate,
    addOutputDataAction,
    loadOutPutValue,
    loadOutputData,
    addInvoiceAction,
    addWithdrawAction,
    getConvertedValue
};