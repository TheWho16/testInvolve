import { call, put, takeEvery, select } from 'redux-saga/effects'
import InvolveServise from '../servise'
import { LOAD_DATA, setSuccess, addDataAction, setConvertedValue, CONVERTED, LOAD_OUTPUT_DATA, addRespDataAction } from './actions'

const service = new InvolveServise()

function* workerLoadData() {
    const state = yield select();
    console.log("STATE", state)
    const data = yield call(service.getMetod)
    yield put(addDataAction(data))
}

export function* watchLoadData() {
    yield takeEvery(LOAD_DATA, workerLoadData)
}


// function* workerLoadOutput() {
//     const state = yield select();
//     const amount = state.reducerData.calculate.amount;
//     console.log('amount', amount, "amount")
//     if (amount !== null) {
//         const data = yield call(service.getCanculate, state.reducerData.calculate)
//         yield put(addOutputAction(data))
//     }
// }

function* workerLoadOutput() {
    yield put(setSuccess(true));
    const state = yield select();
    const { types, currency, value } = state.reducerData.calculate;
    const resp = yield call(service.getCanculate, { base: types, amount: value, invoicePayMethod: currency.invoicePayMethod.value, withdrawPayMethod: currency.withdrawPayMethod.value });
    yield put(setConvertedValue({ [types]: value, [types === `withdraw` ? types : `invoice`]: resp.amount }));
    yield put(setSuccess(false));

}

export function* watchLoadOutput() {
    yield takeEvery(CONVERTED, workerLoadOutput)
}


function* workerLoadOutputData() {
    yield put(setSuccess(true));
    const state = yield select();
    const { types, currency, value } = state.reducerData.outPutData;
    const data = yield call(service.postMoney, { base: types, amount: value, invoicePayMethod: currency.invoicePayMethod.value, withdrawPayMethod: currency.withdrawPayMethod.value })
    yield put(addRespDataAction(data))
    yield put(setSuccess(false));
}

export function* watchLoadOutputData() {
    yield takeEvery(LOAD_OUTPUT_DATA, workerLoadOutputData)
}

