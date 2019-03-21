import React, { Component } from "react"
import { connect } from "react-redux"

// IMPORT ACTIONS
import { fetchMenus } from "../actions/menuActions"

// IMPORT COMPONENTS
import MenuList from "./MenuList"

class Barbecue extends Component {
  componentDidMount() {
    this.props.fetchMenus()
  }
  render() {
    return (
      <div className="Barbecue">
        <MenuList {...this.props} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  menus: state.menus
})

export default connect(
  mapStateToProps,
  { fetchMenus }
)(Barbecue)
