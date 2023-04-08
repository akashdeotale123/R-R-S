import { combineReducers } from "redux";
import dataReducer from "./Reducers/DataReducer";

const rootReducer = combineReducers({
    admin: dataReducer,
 

})

export default rootReducer;