import {combineReducers } from "redux";
import { reducer as formReducer} from "redux-form";
import AppReducer from "./reducer_app";


const rootReducer = combineReducers({
    form: formReducer,
    appreducer: AppReducer
})

export default rootReducer
