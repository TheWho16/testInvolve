import { call, put, takeEvery, select } from 'redux-saga/effects'
import InvolveServise from '../servise'
import { LOAD_DATA, LOAD_OUTPUT_DATA, LOAD_OUTPUT_VALUE, addDataAction, addOutputDataAction, addOutputAction } from './actions'

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


function* workerLoadOutput() {
    const state = yield select();
    const amount = state.reducerData.calculate.amount;
    console.log('amount',amount,"amount")
    if (amount !== null) {
        const data = yield call(service.getCanculate, state.reducerData.calculate)
        yield put(addOutputAction(data))
    }
}

export function* watchLoadOutput() {
    yield takeEvery(LOAD_OUTPUT_VALUE, workerLoadOutput)
}


function* workerLoadOutputData() {
    const data = yield call(service.postMoney)
    yield put(addOutputDataAction(data))
}

export function* watchLoadOutputData() {
    yield takeEvery(LOAD_OUTPUT_DATA, workerLoadOutputData)
}