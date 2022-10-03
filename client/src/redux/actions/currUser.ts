import { LOGIN, LOGOUT } from "../constant";

export const login = (data) => ({ type: LOGIN, data });
export const logout = () => ({ type: LOGOUT, data: null });