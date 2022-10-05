import { DateRange } from "../HomePage/Calendar/Calendar";
import axios from "axios";
import { parseEvents } from "./parser";
const calAPI = 'https://www.googleapis.com/calendar/v3/calendars';

export const getEvents = (email:string, dateRange:DateRange, token:string) => {
  const eventAPI = `${calAPI}/${email}/events`
  const config = {
    params: {
      orderBy: 'startTime',
      singleEvents: true,
      timeMin: dateRange.start,
      timeMax: dateRange.end,
    },
    headers: {
      'Authorization': `Bearer ${token}`
    }

  };

  return axios.get(eventAPI, config)
    .then((res) => res.data.items)
    .catch((err) => console.log(err))
}