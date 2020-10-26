
const ADD_DATA = 'ADD_DATA';
const CONVERTED = 'CONVERTED';
const SET_CONVERTED = 'SET_CONVERTED';
const SET_SUCCESS = 'SET_SUCCESS';
const LOAD_OUTPUT_DATA = 'LOAD_OUTPUT_DATA';
const LOAD_DATA = 'LOAD_DATA';



const addDataAction = (data) => ({ type: ADD_DATA, payload: data });

const getConvertedValue = (data) => ({ type: CONVERTED, payload: data });
const setConvertedValue = (data) => ({ type: SET_CONVERTED, payload: data });
const setSuccess = (success) => ({ type: SET_SUCCESS, payload: success });

const loadData = () => {
    return {
        type: LOAD_DATA
    }
}

const loadOutputData = () => {
    return {
        type: LOAD_OUTPUT_DATA
    }
}



export {
    ADD_DATA,
    LOAD_DATA,
    LOAD_OUTPUT_DATA,
    CONVERTED,
    setConvertedValue,
    addDataAction,
    loadData,
    loadOutputData,
    getConvertedValue,
    setSuccess
};