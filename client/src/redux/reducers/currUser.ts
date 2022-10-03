import { LOGIN, LOGOUT } from "../constant";

const initState = null;
export default function currUserReducer(prevState=initState, action:{type: string, data}) {
  const {type, data} = action;
  switch (type) {
    case LOGIN:
      return data;
    case LOGOUT:
      return data;
    default:
      return prevState
  }
}