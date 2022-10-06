import { DateRange } from "../HomePage/Calendar/Calendar";
import axios from "axios";
import { parseEvents } from "./parser";
import { apiKey } from "../../../../configs/config";
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

const tokenAPI = `https://securetoken.googleapis.com/v1/token?key=${apiKey}`;

export const getToken = (refreshToken) => {
  const config = {
    grant_type: 'refresh_token',
    refresh_token: refreshToken
  };

  return axios.post(tokenAPI, config)
    .then(res => res.data.access_token)
    .catch(err => console.log(err))
}
