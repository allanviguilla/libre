import { createStore, combineReducers } from "@reduxjs/toolkit";
import currUserReducer from "./reducers/currUser";

const allReducers = combineReducers({
  currUser: currUserReducer
})

const store = createStore(allReducers)

export default store;