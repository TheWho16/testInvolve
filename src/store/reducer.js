
const initalState = {
    data: {},
    withdraw: {},
    calculate: {},
    outPutData: {},
    succses: true
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
        case 'SET_SUCCESS':
            return {
                ...state,
                succses: action.payload
            }

        default:
            return state;
    }
};

export default reducerData;

