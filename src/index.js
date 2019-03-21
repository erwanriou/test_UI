import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { BrowserRouter as Router } from "react-router-dom"

// IMPORT COMPONENTS
import Barbecue from "./components/Barbecue"
import middleware from "./middleware"
import reducer from "./reducers"

const store = createStore(reducer, composeWithDevTools(middleware))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Barbecue />
    </Router>
  </Provider>,
  document.getElementById("grill-master-ui")
)
