import {combineReducers } from "redux";
import { reducer as formReducer} from "redux-form";
import AppReducer from "./reducer_app";
import PatientReducer from "./reducer_patient";


const rootReducer = combineReducers({
    form: formReducer,
    appreducer: AppReducer,
    patientreducer: PatientReducer
})

export default rootReducer
