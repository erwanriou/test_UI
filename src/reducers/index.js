import { combineReducers } from "redux"

import menuReducer from "./menuReducer"

export default combineReducers({
  error: errorReducer,
  menus: menuReducer
})
