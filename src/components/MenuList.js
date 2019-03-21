import React from "react"

import MenuItem from "./MenuItem"

class MenuList extends React.Component {
  render() {
    const { menus } = this.props.menus
    return (
      <div className="menu-list">
        {menus.map(menu => (
          <MenuItem key={menu.$id} menu={menu} />
        ))}
      </div>
    )
  }
}

export default MenuList
