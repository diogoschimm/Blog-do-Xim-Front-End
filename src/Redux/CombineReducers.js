import { combineReducers } from "redux";
import contents from "./Reducers";

export const CombineReducers = combineReducers({
    stateContents: contents
})