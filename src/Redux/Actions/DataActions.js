import * as types from '../ActionTypes/DataActionTypes'



export const createDataStart = (user) => ({
    type: types.CREATE_DATA_START,
    payload: user
})

export const createDataSuccess = (user) => ({
    type: types.CREATE_DATA_SUCCESS,
    payload: user
})

export const createDataError = (error) => ({
    type: types.CREATE_DATA_ERROR,
    payload: error
})
// ------------------------------------------------------------
export const getSingleDataStart = (user) => ({
    type: types.GET_DATA_START,
    payload: user
})

export const getSingleDataSuccess = (user) => ({
    type: types.GET_DATA_SUCCESS,
    payload: user
})

export const getSingleDataError = (error) => ({
    type: types.GET_DATA_ERROR,
    payload: error
})

// ------------------------------------------------------------
export const deleteSingleDataStart = (user) => ({
    type: types.DELETE_DATA_START,
    payload: user
})

export const deleteSingleDataSuccess = (user) => ({
    type: types.DELETE_DATA_SUCCESS,
    payload: user
})

export const deleteSingleDataError = (error) => ({
    type: types.DELETE_DATA_ERROR,
    payload: error
})

// ------------------------------------------------------------

export const editDataStart = (edit) => ({
    type: types.EDIT_DATA_START,
    payload: edit
})

export const editDataSuccess = (edit) => ({
    type: types.EDIT_DATA_SUCCESS,
    payload: edit
})

export const editDataError = (error) => ({
    type: types.EDIT_DATA_ERROR,
    payload: error
})