import axios from "axios"
import {
  FETCH_MENUS,
  GET_ERRORS,
  LOADING_DATA,
  CLEAR_LOADING_DATA
} from "../types"

const loading = () => {
  return {
    type: LOADING_DATA
  }
}

const clearLoading = () => {
  return {
    type: CLEAR_LOADING_DATA
  }
}

export const fetchMenus = () => async dispatch => {
  dispatch(loading())
  try {
    const res = await axios.get(
      "http://isol-grillassessment.azurewebsites.net/api/GrillMenu"
    )
    dispatch({
      type: FETCH_MENUS,
      payload: res.data
    })
  } catch (e) {
    dispatch({
      type: GET_ERRORS,
      payload: e.response.data
    })
  }
  dispatch(clearLoading())
}
