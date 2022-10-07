import { CREATEEVENT } from '../constant'

const initState = 0
export default (prevState = initState, action) => {
  console.log(prevState)
  const {type, data} = action
  switch (type) {
    case CREATEEVENT:
      return prevState + 1
    default:
      return prevState
  }
}