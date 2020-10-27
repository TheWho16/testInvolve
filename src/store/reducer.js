
const initalState = {
    data: {},
    withdraw: {},
    calculate: {},
    outPutData: {},
    success: true,
    respData: undefined
};

const reducerData = (state = initalState, action) => {

    switch (action.type) {
        case 'ADD_DATA':
            return {
                ...state,
                data: action.payload
            }

        case 'CONVERTED':
            return {
                ...state,
                calculate: action.payload,
                outPutData: action.payload
            }

        case 'SET_CONVERTED':
            return {
                ...state,
                calculate: action.payload
            }

        case 'CLEAR_CALCULATE':
            return {
                ...state,
                calculate: {}
            }

        case 'SET_SUCCESS':
            return {
                ...state,
                success: action.payload
            }
        case 'ADD_RESP_DATA':
            return {
                ...state,
                respData: action.payload
            }

        default:
            return state;
    }
};

export default reducerData;

