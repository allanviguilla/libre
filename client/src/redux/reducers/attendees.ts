import { ADDATTENDEE, REMOVEATTENDEE } from "../constant";

const initState = []

export default (prevState = initState, action) => {
  const [type, data] = action;

  switch(type) {
    case ADDATTENDEE:
      return [data, ...prevState]
      case REMOVEATTENDEE:
        const attendees = prevState.filter(attendee => attendee.email !== data.email)
        return attendees
      default:
        return prevState
  }
}