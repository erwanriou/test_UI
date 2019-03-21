import React from "react"
var pack = require("bin-pack")

class MenuItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      grill: { x: 30, y: 20 }
    }
  }
  handleMenuItems() {
    const { menu } = this.props
    const blocks = menu.items.map(item =>
      Array(item.Quantity).fill({
        width: item.Width,
        height: item.Length
      })
    )
    const bins = [].concat(...blocks)
    let result = pack(bins, this.state.grill)
    console.log(result)

    const canvas = result.items.map((item, index) => (
      <canvas
        key={index}
        width={item.width * 10}
        height={item.height * 10}
        style={{ left: item.x * 10, top: item.y * 10 }}
      />
    ))

    return canvas
  }
  render() {
    const { menu } = this.props
    return (
      <div className="menu-item">
        <h1>{menu.menu}</h1>
        <div className="grill">{this.handleMenuItems()}</div>
      </div>
    )
  }
}

export default MenuItem
