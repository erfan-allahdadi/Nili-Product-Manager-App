import {combineReducers} from "redux";

// reducers
import { modalReducer } from "./modalReducer";

export const rootReducer = combineReducers({
    modal : modalReducer
})