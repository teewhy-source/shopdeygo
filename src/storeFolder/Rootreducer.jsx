import {combineReducers } from "redux"
import { Userreducer } from "./userfolder/UserReducer"



export const rootReducer = combineReducers({
    user :  Userreducer
})