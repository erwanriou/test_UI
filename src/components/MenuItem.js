import React from "react"

class MenuItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      grill: {
        height: 20,
        width: 30
      }
    }
  }
  render() {
    const { menu } = this.props
    return (
      <div className="menu-item">
        <h1>{menu.menu}</h1>
        <ul>
          {menu.items.map(item => (
            <li key={item.$id}>{new Array(item.Quantity).fill(item.Name)}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default MenuItem
