import { CHANGESIDEBAR } from "../constant";

const initState = 'defaultSideBar'
export default function sideBarReducer(prevState=initState, action){
  const {type, data} = action;
  switch(type){
    case CHANGESIDEBAR:
      return data;
    default:
      return prevState
  }
}