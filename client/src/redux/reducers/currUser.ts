import { SIGNIN, LOGOUT } from "../constant";

const initState = null;
export default function currUserReducer(prevState=initState, action:{type: string, data}) {
    const {type, data} = action;
    switch (type) {
      case SIGNIN:
        return data;
      case LOGOUT:
        return data;
      default:
        return prevState
    }
  }