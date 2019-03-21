import React from "react"

class MenuItem extends React.Component {
  render() {
    const { menu } = this.props
    return (
      <div className="menu-item">
        <h1>{menu.menu}</h1>
        <ul>
          {menu.items.map(item => (
            <li key={item.$id}>{item.Name}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default MenuItem
