import { ADDATTENDEE, REMOVEATTENDEE } from "../constant";

export const addAttendee = (data) => ({ type: ADDATTENDEE, data })
export const removeAttendee = (data) => ({ type: REMOVEATTENDEE, data })