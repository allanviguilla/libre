import React from 'react'
import Notifications from './Notifications/Notifications'
import Chat from '../SideBar/Chat/Chat'

import { connect } from 'react-redux';
import FriendsList from './FriendsList/FriendsList';
import Overview from './Overview/Overview';
import styles from './Sidebar.module.css'

const friend =
{
  "oauthAccessToken": "ya29.a0Aa4xrXPwYwaz_gY6CRKVsd2sitX7ADzE703m9qpC5ySlK5vWV8k6R8BErljQNX1Sn28XGukKne8IQlpYnwbygmUAFzALew95aeCbvCfyfvjHT5YmE9ejlyV8z9UNG2v2FY7nOKqRZnnhnJtNOZDVK39y1GjghQaCgYKATASARISFQEjDvL9nCuvP3T1_3CiV5DX-hTsJA0165",
  "friendGroups": [],
  "refreshToken": "AOEOulZ_UDXPKsWYBSD4ulVDLSYlCjZvpe-gFDwd1OeZpnS-TxZio8su9LrdG8-1qDx2UbiVQBx9SmLJKkhvxcPnGmE8yMXelL9cGV10RbRGaZH1BZNWcaQ4gdIsiGKuiG7GSFzYWnI7tQFNFry-N2Qcl-2b8FvASjesDSTaIu_oN1lKJtjySFUuZQrDgA4oneAajPCq6W7t_Pd7NJmcgIq4fkdcwlaM82U2mVkr9PmfUnBuAAw02DoX08hIJQY4OyMhROhMJgCsYrgRg7dHW8icX9oxuoLX-05wdxpTQ4nM0X8-f03dEsc9EwwBCLUANuFznnHJb--pokIzeJZdMhPSVSMqiF6BIDJnq4btGgPlFptY0QkzRfQwkue3Cbsb8mLZThf3aC4CHdbUa4_IkOoeS57xqR7xgw0Vj373hHSrkxtzBOqkcTw",
  "photoUrl": "https://lh3.googleusercontent.com/a/ALm5wu2h4aVdAP5CNehLn0_XIuF3p7CEMoNss1Zul9DHSA=s96-c",
  "email": "allanviguilla@gmail.com",
  "friends": [
      "dantan510@gmail.com",
      "hepner.thomas2@gmail.com",
      "kathryn.kuroko@gmail.com"
  ],
  "displayName": "Allan Viguilla",
  "events": [
      {
          "end": "2022-09-26T12:30:00-07:00",
          "start": "2022-09-26T12:00:00-07:00",
          "color": "orange",
          "id": "0dejh195l0nh7chccubnra4qah",
          "title": "Whiteboarding - Allan Viguilla",
          "extendedProps": {
              "attendees": [
                  "shannon.murphy@galvanize.com",
                  "allanviguilla@gmail.com"
              ],
              "organizer": "galvanize.com_b1mejmcpgsuoosaovb3eod27a0@group.calendar.google.com",
              "description": "Whiteboarding Practice with Outcomes SEIRs.\n\nA chance to practice some whiteboarding in a stress-free environment.",
              "location": "https://us04web.zoom.us/j/9390665705?pwd=aG5mZXY4ZVB3cmplUnUzdlN0d1Jydz09"
          }
      },
      {
          "start": "2022-09-26T13:00:00-07:00",
          "color": "orange",
          "id": "283l0k6rnn62ou95ojqh6noj39",
          "extendedProps": {
              "attendees": [],
              "organizer": "allanviguilla@gmail.com",
              "description": null,
              "location": null
          },
          "end": "2022-09-26T13:30:00-07:00",
          "title": "Bloodwork"
      },
      {
          "start": "2022-09-27T09:30:00-07:00",
          "id": "7dkm5m27vp4cm10n3g0mh77nf3",
          "extendedProps": {
              "location": "https://zoom.us/my/hilaryupton",
              "attendees": [
                  "allanviguilla@gmail.com",
                  "hilary.upton@galvanize.com",
                  "james.emerson.vo.2503@gmail.com",
                  "luk.ivan.mech@gmail.com",
                  "phambri97@gmail.com",
                  "mike.zaki@galvanize.com"
              ],
              "organizer": "galvanize.com_b0tia4avn0g4tbuno26mkpk95c@group.calendar.google.com",
              "description": null
          },
          "color": "orange",
          "title": "🦩TFM SDC Final Convo Practice Tapout - Group 1",
          "end": "2022-09-27T10:00:00-07:00"
      },
      {
          "start": "2022-09-27T13:20:00-07:00",
          "extendedProps": {
              "location": null,
              "attendees": [],
              "description": null,
              "organizer": "allanviguilla@gmail.com"
          },
          "id": "13ngrs84gits0sgmv0des284is",
          "end": "2022-09-27T14:20:00-07:00",
          "title": "Dermatologist",
          "color": "orange"
      },
      {
          "end": "2022-09-28T12:40:00-07:00",
          "id": "2u5el92ohjqqonrmdjq71ticsc",
          "title": "Dentist: Root Canal + Crown",
          "start": "2022-09-28T09:40:00-07:00",
          "extendedProps": {
              "attendees": [],
              "organizer": "allanviguilla@gmail.com",
              "location": null,
              "description": null
          },
          "color": "orange"
      },
      {
          "id": "6pkvbvhlu45rl7u77jbefck2em_20220930T170000Z",
          "end": "2022-09-30T10:45:00-07:00",
          "color": "orange",
          "start": "2022-09-30T10:30:00-07:00",
          "extendedProps": {
              "organizer": "hepner.thomas@gmail.com",
              "attendees": [
                  "hepner.thomas@gmail.com",
                  "allanviguilla@gmail.com",
                  "dantan510@gmail.com",
                  "nicolastiennguyen@gmail.com",
                  "qingzhouyan@gmail.com",
                  "vo.an.2503@gmail.com",
                  "kathryn.kuroko@gmail.com"
              ],
              "location": null,
              "description": null
          },
          "title": "Bowser Team Standup"
      },
      {
          "id": "2g5ib1ms0p348c9hgktcjgc2lp",
          "title": "Mock Interview - Allan Viguilla",
          "start": "2022-09-30T14:00:00-07:00",
          "end": "2022-09-30T15:00:00-07:00",
          "color": "orange",
          "extendedProps": {
              "description": "Mock Interview with an Outcomes SEIR.",
              "organizer": "galvanize.com_b1mejmcpgsuoosaovb3eod27a0@group.calendar.google.com",
              "attendees": [
                  "allanviguilla@gmail.com",
                  "shannon.murphy@galvanize.com"
              ],
              "location": "https://us04web.zoom.us/j/9390665705?pwd=aG5mZXY4ZVB3cmplUnUzdlN0d1Jydz09"
          }
      },
      {
          "end": "2022-09-30T17:30:00-07:00",
          "extendedProps": {
              "location": null,
              "description": null,
              "attendees": [
                  "hepner.thomas@gmail.com",
                  "allanviguilla@gmail.com",
                  "dantan510@gmail.com",
                  "nicolastiennguyen@gmail.com",
                  "qingzhouyan@gmail.com",
                  "vo.an.2503@gmail.com",
                  "kathryn.kuroko@gmail.com"
              ],
              "organizer": "hepner.thomas@gmail.com"
          },
          "color": "orange",
          "title": "Bowser Team Evening Standup",
          "id": "7gpm6p8gc202l4phih8tqaiegt_20221001T001500Z",
          "start": "2022-09-30T17:15:00-07:00"
      },
      {
          "color": "orange",
          "start": "2022-10-01T13:30:00-07:00",
          "end": "2022-10-01T13:45:00-07:00",
          "id": "6pkvbvhlu45rl7u77jbefck2em_20221001T170000Z",
          "extendedProps": {
              "attendees": [
                  "hepner.thomas@gmail.com",
                  "allanviguilla@gmail.com",
                  "dantan510@gmail.com",
                  "nicolastiennguyen@gmail.com",
                  "qingzhouyan@gmail.com",
                  "vo.an.2503@gmail.com",
                  "kathryn.kuroko@gmail.com"
              ],
              "organizer": "hepner.thomas@gmail.com",
              "description": null,
              "location": null
          },
          "title": "Bowser Team Standup"
      },
      {
          "start": "2022-10-03T10:00:00-07:00",
          "color": "orange",
          "title": "Bowser Team Standup",
          "end": "2022-10-03T10:15:00-07:00",
          "id": "6pkvbvhlu45rl7u77jbefck2em_20221003T170000Z",
          "extendedProps": {
              "organizer": "hepner.thomas@gmail.com",
              "location": null,
              "attendees": [
                  "hepner.thomas@gmail.com",
                  "allanviguilla@gmail.com",
                  "dantan510@gmail.com",
                  "nicolastiennguyen@gmail.com",
                  "qingzhouyan@gmail.com",
                  "vo.an.2503@gmail.com",
                  "kathryn.kuroko@gmail.com"
              ],
              "description": null
          }
      },
      {
          "title": "Bowser Team Evening Standup",
          "color": "orange",
          "end": "2022-10-03T17:30:00-07:00",
          "extendedProps": {
              "attendees": [
                  "hepner.thomas@gmail.com",
                  "allanviguilla@gmail.com",
                  "dantan510@gmail.com",
                  "nicolastiennguyen@gmail.com",
                  "qingzhouyan@gmail.com",
                  "vo.an.2503@gmail.com",
                  "kathryn.kuroko@gmail.com"
              ],
              "location": null,
              "organizer": "hepner.thomas@gmail.com",
              "description": null
          },
          "start": "2022-10-03T17:15:00-07:00",
          "id": "7gpm6p8gc202l4phih8tqaiegt_20221004T001500Z"
      },
      {
          "start": "2022-10-04T10:00:00-07:00",
          "end": "2022-10-04T10:15:00-07:00",
          "id": "6pkvbvhlu45rl7u77jbefck2em_20221004T170000Z",
          "extendedProps": {
              "organizer": "hepner.thomas@gmail.com",
              "location": null,
              "attendees": [
                  "hepner.thomas@gmail.com",
                  "allanviguilla@gmail.com",
                  "dantan510@gmail.com",
                  "nicolastiennguyen@gmail.com",
                  "qingzhouyan@gmail.com",
                  "vo.an.2503@gmail.com",
                  "kathryn.kuroko@gmail.com"
              ],
              "description": null
          },
          "color": "orange",
          "title": "Bowser Team Standup"
      },
      {
          "color": "orange",
          "end": "2022-10-04T15:00:00-07:00",
          "extendedProps": {
              "attendees": [
                  "hilary.upton@galvanize.com",
                  "julian.yuen@galvanize.com",
                  "allanviguilla@gmail.com",
                  "jimstolhammer@gmail.com",
                  "kevinpho1012@gmail.com",
                  "qy93@cornell.edu"
              ],
              "description": null,
              "location": "https://zoom.us/my/hilaryupton",
              "organizer": "galvanize.com_b0tia4avn0g4tbuno26mkpk95c@group.calendar.google.com"
          },
          "title": "🦩 Final SDC Conversation -Grp 3",
          "id": "3i8ag6emmdof4jria468gscbfc",
          "start": "2022-10-04T14:30:00-07:00"
      },
      {
          "end": "2022-10-04T17:30:00-07:00",
          "id": "7gpm6p8gc202l4phih8tqaiegt_20221005T001500Z",
          "color": "orange",
          "title": "Bowser Team Evening Standup",
          "extendedProps": {
              "location": null,
              "organizer": "hepner.thomas@gmail.com",
              "attendees": [
                  "hepner.thomas@gmail.com",
                  "allanviguilla@gmail.com",
                  "dantan510@gmail.com",
                  "nicolastiennguyen@gmail.com",
                  "qingzhouyan@gmail.com",
                  "vo.an.2503@gmail.com",
                  "kathryn.kuroko@gmail.com"
              ],
              "description": null
          },
          "start": "2022-10-04T17:15:00-07:00"
      },
      {
          "start": "2022-10-05T10:00:00-07:00",
          "id": "6pkvbvhlu45rl7u77jbefck2em_20221005T170000Z",
          "extendedProps": {
              "attendees": [
                  "hepner.thomas@gmail.com",
                  "allanviguilla@gmail.com",
                  "dantan510@gmail.com",
                  "nicolastiennguyen@gmail.com",
                  "qingzhouyan@gmail.com",
                  "vo.an.2503@gmail.com",
                  "kathryn.kuroko@gmail.com"
              ],
              "organizer": "hepner.thomas@gmail.com",
              "location": null,
              "description": null
          },
          "title": "Bowser Team Standup",
          "end": "2022-10-05T10:15:00-07:00",
          "color": "orange"
      },
      {
          "start": "2022-10-05T17:15:00-07:00",
          "end": "2022-10-05T17:30:00-07:00",
          "title": "Bowser Team Evening Standup",
          "extendedProps": {
              "attendees": [
                  "hepner.thomas@gmail.com",
                  "allanviguilla@gmail.com",
                  "dantan510@gmail.com",
                  "nicolastiennguyen@gmail.com",
                  "qingzhouyan@gmail.com",
                  "vo.an.2503@gmail.com",
                  "kathryn.kuroko@gmail.com"
              ],
              "organizer": "hepner.thomas@gmail.com",
              "description": null,
              "location": null
          },
          "color": "orange",
          "id": "7gpm6p8gc202l4phih8tqaiegt_20221006T001500Z"
      },
      {
          "start": "2022-10-06T10:00:00-07:00",
          "title": "Bowser Team Standup",
          "id": "6pkvbvhlu45rl7u77jbefck2em_20221006T170000Z",
          "extendedProps": {
              "organizer": "hepner.thomas@gmail.com",
              "location": null,
              "attendees": [
                  "hepner.thomas@gmail.com",
                  "allanviguilla@gmail.com",
                  "dantan510@gmail.com",
                  "nicolastiennguyen@gmail.com",
                  "qingzhouyan@gmail.com",
                  "vo.an.2503@gmail.com",
                  "kathryn.kuroko@gmail.com"
              ],
              "description": null
          },
          "color": "orange",
          "end": "2022-10-06T10:15:00-07:00"
      },
      {
          "color": "orange",
          "end": "2022-10-06T17:30:00-07:00",
          "extendedProps": {
              "attendees": [
                  "hepner.thomas@gmail.com",
                  "allanviguilla@gmail.com",
                  "dantan510@gmail.com",
                  "nicolastiennguyen@gmail.com",
                  "qingzhouyan@gmail.com",
                  "vo.an.2503@gmail.com",
                  "kathryn.kuroko@gmail.com"
              ],
              "organizer": "hepner.thomas@gmail.com",
              "location": null,
              "description": null
          },
          "start": "2022-10-06T17:15:00-07:00",
          "id": "7gpm6p8gc202l4phih8tqaiegt_20221007T001500Z",
          "title": "Bowser Team Evening Standup"
      },
      {
          "end": "2022-10-07T10:15:00-07:00",
          "color": "orange",
          "title": "Bowser Team Standup",
          "start": "2022-10-07T10:00:00-07:00",
          "id": "6pkvbvhlu45rl7u77jbefck2em_20221007T170000Z",
          "extendedProps": {
              "description": null,
              "location": null,
              "attendees": [
                  "hepner.thomas@gmail.com",
                  "allanviguilla@gmail.com",
                  "dantan510@gmail.com",
                  "nicolastiennguyen@gmail.com",
                  "qingzhouyan@gmail.com",
                  "vo.an.2503@gmail.com",
                  "kathryn.kuroko@gmail.com"
              ],
              "organizer": "hepner.thomas@gmail.com"
          }
      },
      {
          "id": "7gpm6p8gc202l4phih8tqaiegt_20221008T001500Z",
          "color": "orange",
          "start": "2022-10-07T17:15:00-07:00",
          "end": "2022-10-07T17:30:00-07:00",
          "extendedProps": {
              "location": null,
              "attendees": [
                  "hepner.thomas@gmail.com",
                  "allanviguilla@gmail.com",
                  "dantan510@gmail.com",
                  "nicolastiennguyen@gmail.com",
                  "qingzhouyan@gmail.com",
                  "vo.an.2503@gmail.com",
                  "kathryn.kuroko@gmail.com"
              ],
              "description": null,
              "organizer": "hepner.thomas@gmail.com"
          },
          "title": "Bowser Team Evening Standup"
      },
      {
          "id": "6pkvbvhlu45rl7u77jbefck2em_20221008T170000Z",
          "title": "Bowser Team Standup",
          "color": "orange",
          "start": "2022-10-08T10:00:00-07:00",
          "extendedProps": {
              "location": null,
              "attendees": [
                  "hepner.thomas@gmail.com",
                  "allanviguilla@gmail.com",
                  "dantan510@gmail.com",
                  "nicolastiennguyen@gmail.com",
                  "qingzhouyan@gmail.com",
                  "vo.an.2503@gmail.com",
                  "kathryn.kuroko@gmail.com"
              ],
              "description": null,
              "organizer": "hepner.thomas@gmail.com"
          },
          "end": "2022-10-08T10:15:00-07:00"
      },
      {
          "extendedProps": {
              "description": "Event Name: Technical Interview\n\nLocation: This is a Zoom web conference.\n\nYou can join this meeting from your computer, tablet, or smartphone.\nhttps://wemakewebsites.zoom.us/j/83460785033\n\nOne tap mobile:\n+1 312 626 6799,,83460785033#\n+1 646 558 8656,,83460785033#\n\nYou can also dial in using your phone.\nUS: +1 312 626 6799, +1 646 558 8656, +1 301 715 8592, +1 346 248 7799, +1 669 900 6833, +1 253 215 8782\nMeeting ID: 834-607-85033\n\nAdditional Dial-In Numbers:\nGB: +44 20 8080 6591, +44 20 8080 6592, +44 330 088 5830, +44 131 460 1196, +44 20 3481 5237, +44 20 3481 5240, +44 20 3901 7895\nDE: +49 69 38079884, +49 69 50500951, +49 69 50500952, +49 69 50502596, +49 69 71049922, +49 69 38079883\nNL: +31 20 794 0854, +31 20 794 6519, +31 20 794 6520, +31 20 794 7345, +31 70 700 6526, +31 20 241 0288\nAU: +61 7 3185 3730, +61 8 6119 3900, +61 8 7150 1149, +61 2 8015 6011, +61 3 7018 2005\n\nFind your local number: https://wemakewebsites.zoom.us/u/kbwypfni2N\n\nPlease share anything that will help prepare for our meeting.: Since our last meeting I was accepted into a 12-week software engineering bootcamp with Hack Reactor. I would like to arrange an interview after the program if the position is still available\n\nNeed to make changes to this event?\nCancel: https://calendly.com/cancellations/37ec435e-c686-4034-bf6d-9af369abf35a\nReschedule: https://calendly.com/reschedulings/37ec435e-c686-4034-bf6d-9af369abf35a\n\nPowered by Calendly.com\n",
              "location": "https://wemakewebsites.zoom.us/j/83460785033",
              "attendees": [
                  "truman.lahr@wemakewebsites.com",
                  "allanviguilla@gmail.com"
              ],
              "organizer": "truman.lahr@wemakewebsites.com"
          },
          "end": "2022-10-17T10:30:00-07:00",
          "id": "rgbs2to4em9t6sgf9ga4ajje0g",
          "title": "Allan Viguilla and Truman Lahr",
          "color": "orange",
          "start": "2022-10-17T10:00:00-07:00"
      },
      {
          "id": "24gsvioklf8pa2aiehbpimudov",
          "end": "2022-10-18T09:20:00-07:00",
          "start": "2022-10-18T09:00:00-07:00",
          "extendedProps": {
              "location": "https://zoom.us/my/arthurgalvanize",
              "description": null,
              "attendees": [
                  "allanviguilla@gmail.com",
                  "arthur.coddington@galvanize.com"
              ],
              "organizer": "arthur.coddington@galvanize.com"
          },
          "title": "Allan Viguilla <> Arthur (Job Search Kickoff)",
          "color": "orange"
      },
      {
          "title": "Whiteboarding - Allan Viguilla",
          "start": "2022-09-26T12:00:00-07:00",
          "color": "orange",
          "end": "2022-09-26T12:30:00-07:00",
          "extendedProps": {
              "location": "https://us04web.zoom.us/j/9390665705?pwd=aG5mZXY4ZVB3cmplUnUzdlN0d1Jydz09",
              "organizer": "galvanize.com_b1mejmcpgsuoosaovb3eod27a0@group.calendar.google.com",
              "attendees": [
                  "shannon.murphy@galvanize.com",
                  "allanviguilla@gmail.com"
              ],
              "description": "Whiteboarding Practice with Outcomes SEIRs.\n\nA chance to practice some whiteboarding in a stress-free environment."
          }
      }
  ]
}

const SideBar = (props) => {
  const { sideBar } = props

  return (
    <div className={styles.sidebar} id="side-bar">
      {sideBar === 'overview' ?
        <Overview /> :
        sideBar === 'friends' ?
          <FriendsList /> :
          sideBar === 'groups' ?
            <h2>groups</h2> :
            sideBar === 'chats' ?
              <Chat friend={friend}/> :
              sideBar === 'notifications' ?
                <Notifications /> :
                sideBar === 'account' ?
                  <h2>account</h2> : null
      }

    </div>
  )
}

interface stateInt {
  sideBar: string
}

export default connect((state: stateInt) => ({ sideBar: state.sideBar }), {})(SideBar);
