export const parseEvents = (events) => {
  console.log('...........EVENT..........', events)
  let aggParsed = [];
  events.forEach((event) => {
    let parsed = {color: 'orange'} as ParsedEvent;
    parsed.id = event.id;
    parsed.title = event.summary;
    parsed.start = event.start.date ? event.start.date : event.start.dateTime;
    parsed.end = event.end.date ? event.end.date : event.end.dateTime;
    parsed.extendedProps = {
      organizer: event.organizer.email,
      attendees: event.attendees ? event.attendees.map(({ email }) => email) : [],
      location: event.location ? event.location : null,
      description: event.description ? event.description : null
    }
    aggParsed.push(parsed);
  })
  return aggParsed;
}

export const parseInfo = (info) => {
  let parsed = {color: 'orange'} as ParsedEvent;
  // console.log(info)
  parsed.title = info._def.title;
  parsed.start = new Date(info.start).toLocaleString('en-US', {timeZone: "America/Los_Angeles"});
  parsed.end = new Date(info.end).toLocaleString('en-US', {timeZone: "America/Los_Angeles"});
  parsed.extendedProps = info._def.extendedProps;

  return parsed;
}

export const setInverseBg = (events) => {
  let agg = events.map((event) => {
    return {...event, display: 'inverse-background' }
  })
  return agg;
}

export interface ParsedEvent {
  id: string;
  title: string;
  start: string;
  end: string;
  extendedProps: {
    organizer: string;
    attendees: string[];
    location: string | null;
    description: string | null;
  }
  color: string
}