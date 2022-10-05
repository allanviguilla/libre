import { createStore, combineReducers } from "@reduxjs/toolkit";
import currUserReducer from "./reducers/currUser";
import sideBarReducer from "./reducers/sideBar";

const allReducers = combineReducers({
  currUser: currUserReducer,
  sideBar: sideBarReducer
})

const store = createStore(allReducers)

export default store;