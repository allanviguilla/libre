import { DateRange } from "../HomePage/Calendar/Calendar";
import axios from "axios";
import { parseEvents } from "./parser";
import { config } from "../../../../configs/config";
import { isDataView } from "util/types";
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

// export const postEvent = () => {
//   const eventAPI = `${calAPI}/${email}/events`

//   // TO-DO: replace config with data for post request
//   // Get refresh token for hepner.thomas2@gmail.com
//   // test this in postman before doing it in axios
//   const config = {
//     params: {
//       orderBy: 'startTime',
//       singleEvents: true,
//       timeMin: dateRange.start,
//       timeMax: dateRange.end,
//     },
//     headers: {
//       'Authorization': `Bearer ${token}`
//     }
//   };

//   return axios.post(eventAPI, config)
//     .then((res) => console.log("event added successfully!"))
//     .catch((err) => console.log(error))

// }

const { apiKey } = config;
const tokenAPI = `https://securetoken.googleapis.com/v1/token?key=${apiKey}`;

export const getToken = (refreshToken) => {
  return axios.post(tokenAPI,
    {
      grant_type: 'refresh_token',
      refresh_token: refreshToken
    })
    .then(res => res.data.access_token)
    .catch(err => console.log(err))
}
