import { SAVE_DATA } from './constants'
const initState = {
  users: [],
}
export default function (state = initState, action) {
  switch (action.type) {
    case SAVE_DATA:
      return {
        ...state,
        users: action.data,
      }
    default:
      return state
  }
}
