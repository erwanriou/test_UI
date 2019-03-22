import React from "react"
import { Link } from "react-router-dom"

class MenuSelector extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: ""
    }
    this.handleSelectMenu = this.handleSelectMenu.bind(this)
  }
  handleSelectMenu(e) {
    this.setState({
      menu: e.target.value
    })
  }
  render() {
    const { menus } = this.props.menus
    return (
      <div className="select-menu">
        <select
          name="menu"
          className="menu-list"
          onChange={this.handleSelectMenu}
          value={this.state.menu}
        >
          <option defaultValue="">Pick a menu</option>
          {menus.map(menu => (
            <option key={menu.Id} value={menu.Id}>
              {menu.menu}
            </option>
          ))}
        </select>
        <Link to={`/menu/${this.state.menu}`}>Go to menu</Link>
      </div>
    )
  }
}

export default MenuSelector
