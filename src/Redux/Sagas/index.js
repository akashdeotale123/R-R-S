import { all } from 'redux-saga/effects';
import dataSaga from './DataSaga';


export default function* rootSaga() {
    yield all([
        dataSaga(),
    ])
}