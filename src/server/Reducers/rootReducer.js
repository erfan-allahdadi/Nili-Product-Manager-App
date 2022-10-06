import {combineReducers} from "redux";

// reducers
import { modalReducer } from "./modalReducer";
import { productReducer } from './productReducer';
import { loginReducer } from "./loginReducer";

// combine
export const rootReducer = combineReducers({
    modal : modalReducer,
    product : productReducer,
    login : loginReducer
})