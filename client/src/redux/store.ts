import { createStore, combineReducers } from "@reduxjs/toolkit";
import currUserReducer from "./reducers/currUser";
import sideBarReducer from "./reducers/sideBar";
import attendeesReducer from "./reducers/attendees";

const allReducers = combineReducers({
  currUser: currUserReducer,
  sideBar: sideBarReducer,
  attendees: attendeesReducer
})

const store = createStore(allReducers)

export default store;