import {
  LOADING_DATA,
  CLEAR_LOADING_DATA,
  RESET_STATE,
  FETCH_MENUS
} from "../actions/types"

const initialState = {
  menus: [],
  loading: false
}

export default function proposalReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      }
    case FETCH_MENUS:
      return {
        ...state,
        menus: action.payload,
        loading: false
      }
    case CLEAR_LOADING_DATA:
      return {
        ...state,
        loading: false
      }
    case RESET_STATE:
      return {
        menus: [],
        loading: false
      }
    default:
      return state
  }
}
