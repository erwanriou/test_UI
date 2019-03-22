import React from "react"
const pack = require("bin-pack")
const BinPacking2D = require("binpackingjs").BP2D
const { Bin, Box, Packer } = BinPacking2D

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
        height: item.Length,
        name: item.Name
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
      >
        {item.item.name}
      </canvas>
    ))

    return canvas
  }
  handleMenuItems2() {
    const { menu } = this.props
    let blocks = menu.items.map(item =>
      Array(item.Quantity).fill(new Box(item.Width, item.Length))
    )
    let boxes = [].concat(...blocks)
    let bin_1 = new Bin(30, 20)
    let packer = new Packer([bin_1])
    let packed_boxes = packer.pack(boxes)
    console.log(boxes)
    console.log(packer)
    console.log(packed_boxes)
    console.log(packed_boxes.length)
    const canvas = packed_boxes.map((item, index) => (
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
        <div className="trials">
          <div className="trial-1">
            <h2>
              Trial with Bin-pack (no way of controling the size of the grill)
            </h2>
            <div className="grill">{this.handleMenuItems()}</div>
          </div>
          <div className="trial-2">
            <h2>Trial with BinPacking2D (results seems incoherents)</h2>
            <div className="grill">{this.handleMenuItems2()}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default MenuItem
