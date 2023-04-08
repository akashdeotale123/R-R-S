import * as types from '../ActionTypes/DataActionTypes';

const initialState = {
    saveData:[],
    getData:[],
    delete:[],
    editData:[],
    loading: false,
    error: null
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case types.CREATE_DATA_START:
            return {
                ...state,
                loading: true
            }
      
        case types.CREATE_DATA_SUCCESS: 
            return {
                ...state,
                loading: false,
                saveData : action.payload
            }
      
        case types.CREATE_DATA_ERROR:       
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        // --------------------------------------------------------------

        case types.GET_DATA_START:
            return {
                ...state,
                loading: true
            }
      
        case types.GET_DATA_SUCCESS: 
            return {
                ...state,
                loading: false,   
                getData : action.payload         
            }
      
        case types.GET_DATA_ERROR:       
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        // --------------------------------------------------------------

        case types.DELETE_DATA_START:
            return {
                ...state,
                loading: true
            }     
        case types.DELETE_DATA_SUCCESS: 
            return {
                ...state,
                loading: false,    
                      
            }
        case types.DELETE_DATA_ERROR:       
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        // --------------------------------------------------------------

        case types.EDIT_DATA_START:
            return {
                ...state,
                loading: true
            }
      
        case types.EDIT_DATA_SUCCESS: 
            return {
                ...state,
                loading: false,
                editData : action.payload
            }
      
        case types.EDIT_DATA_ERROR:       
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default dataReducer;
