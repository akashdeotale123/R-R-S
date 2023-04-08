import * as types from '../ActionTypes/DataActionTypes';
import {
    all,
    put,
    call,
    fork,
    takeEvery,
    takeLatest,
} from 'redux-saga/effects';
import Swal from 'sweetalert2';
import {
    DataApi,getDataApi,deleteDataApi,eEditDataApi
    
} from '../APIs/DataAPI';
import {
   createDataSuccess,createDataError,
   getSingleDataSuccess,getSingleDataError,
   deleteSingleDataSuccess,deleteSingleDataError,
   editDataSuccess,editDataError,
} from '../Actions/DataActions';

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 4000,
})

export function* onDataStartAsync({ payload }) {
    try {
    const response = yield call(DataApi, payload) 
    // console.log("response``````>",response);
    if (response.status === 201) {
        // localStorage.setItem("ADMIN", JSON.stringify(response.data.data.token))
        yield put(createDataSuccess(response.data));
        Toast.fire({
            icon: "success",
            title: response.statusText,
        });
    } else {
        Toast.fire({
            icon: 'error',
            title: response.data.message
        })
    
    }
} catch (error) {
    yield put(createDataError(error.response));
            Toast.fire({
                icon: 'error',
                title: 'Invalid Data'
            })
        
    }
}
// ---------------------------------------------------
export function* onGetDataAsync({ payload }) {
    try {
    const response = yield call(getDataApi, payload) 
    console.log("response``````>",response);
    if (response.status === 200) {
        // localStorage.setItem("ADMIN", JSON.stringify(response.data.data.token))
        yield put(getSingleDataSuccess(response.data));
        Toast.fire({
            icon: "success",
            title: response.statusText,
        });
    } else {
        Toast.fire({
            icon: 'error',
            title: response.data.message
        })
    
    }
} catch (error) {
    yield put(getSingleDataError(error.response));
            Toast.fire({
                icon: 'error',
                title: 'Invalid Data'
            })
        
    }
}
// ---------------------------------------------------
export function* onDeleteDataAsync({ payload }) {
    try {
    const response = yield call(deleteDataApi, payload) 
    console.log("response``````>",response);
    if (response.status === 200) {
        // localStorage.setItem("ADMIN", JSON.stringify(response.data.data.token))
        yield put(deleteSingleDataSuccess(response.data));
        Toast.fire({
            icon: "success",
            title: "User Deleted Successfully",
        });
    } else {
        Toast.fire({
            icon: 'error',
            title: response.data.message
        })
    }
} catch (error) {
    yield put(deleteSingleDataError(error.response));
            Toast.fire({
                icon: 'error',
                title: 'Invalid Data'
            })
        
    }
}
// -----------------------------------------------------------------------------
export function* onEditDataAsync({ payload }) {
    try {
        const response = yield call(editDataError, payload)
        if (response.data.status === 200) {
            yield put(editDataSuccess(response.data))
            Toast.fire({
                icon: "success",
                title: response.data.message
            })
        } else {
            Toast.fire({
                icon: "error",
                title: response.data.message
            })
        }
    } catch (error) {
        yield put(editDataError(error.response))
        if(error.response.data.errors.name) {
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.name,
            });
        } 
    }
}

// --------------------------------------------------------------------------

export function* onDataStart() {
    yield takeLatest(types.CREATE_DATA_START, onDataStartAsync)
}
export function* onGetDataStart() {
    yield takeLatest(types.GET_DATA_START, onGetDataAsync)
}
export function* onDeleteDataStart() {
    yield takeLatest(types.DELETE_DATA_START, onDeleteDataAsync)
}
export function* onEditDataStart() {
    yield takeLatest(types.EDIT_DATA_START, onEditDataAsync)
}
// --------------------------------------------------------------------------

const dataSagas = [
    fork(onDataStart),
    fork(onGetDataStart),
    fork(onDeleteDataStart),
    fork(onEditDataStart),
]

export default function* dataSaga() {
    yield all([...dataSagas])
}