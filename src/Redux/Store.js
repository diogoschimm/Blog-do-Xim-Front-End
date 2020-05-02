import { createStore } from "redux";
import { CombineReducers } from './CombineReducers';

const Store = createStore(CombineReducers);
export default Store;