import React, { Component } from "react"
import { connect } from "react-redux"
import { Switch, Route, withRouter } from "react-router-dom"

// IMPORT ACTIONS
import { fetchMenus } from "../actions/menuActions"

// IMPORT COMPONENTS
import MenuSelector from "./MenuSelector"
import MenuItem from "./MenuItem"

// IMPORT CSS
import "../styles/global.css"

class Barbecue extends Component {
  componentDidMount() {
    this.props.fetchMenus()
  }
  render() {
    return (
      <div className="Barbecue">
        <MenuSelector {...this.props} />
        <Switch>
          {this.props.menus.menus.map(menu => (
            <Route
              exact
              path={`/menu/${menu.Id}`}
              key={menu.$id}
              render={() => <MenuItem menu={menu} />}
            />
          ))}
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  menus: state.menus
})

export default withRouter(
  connect(
    mapStateToProps,
    { fetchMenus }
  )(Barbecue)
)
