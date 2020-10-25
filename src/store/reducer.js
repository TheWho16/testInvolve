
const initalState = {
    data: {},
    inputValue: '',
    outputValue: null,
    invoice: {},
    withdraw: {},
    calculate: {},
    outPutData: {},
};

const reducerData = (state = initalState, action) => {

    switch (action.type) {
        case 'ADD_DATA':
            return {
                ...state,
                data: action.payload
            }

        case 'ADD_INPUT_VALUE':
            return {
                ...state,
                inputValue: action.payload,
            }

        case 'ADD_OUTPUT_VALUE':
            return {
                ...state,
                outputValue: action.payload.amount
            }
        case 'CONVERTED':
  
            return {
                ...state,
                calculate: action.payload
            }
        case 'LOAD_OUTPUT_DATA':
            return {
                ...state,
                outPutData: action.payload
            }
        case 'ADD_INVOICE':
            return {
                ...state,
                invoice: action.payload,
            }
        case 'ADD_WITHDRAW':
            return {
                ...state,
                withdraw: action.payload,
            }

        default:
            return state;
    }
};

export default reducerData;

