import { SIGNIN, LOGOUT } from "../constant";

export const signin = (data) => ({ type: SIGNIN, data });
export const logout = () => ({ type: LOGOUT, data: null });