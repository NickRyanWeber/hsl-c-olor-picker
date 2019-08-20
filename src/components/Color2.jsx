import React, { Component } from 'react'
import ColorSlider from './ColorSlider.jsx'

class Color2 extends Component {
  state = {
    color: {
      h: 0,
      s: 0,
      l: 0
    }
  }

  randomValue = max => {
    return Math.ceil(Math.random() * max)
  }

  randomizeBGColors = () => {
    this.setState({
      color: {
        h: this.randomValue(360),
        s: this.randomValue(100),
        l: this.randomValue(100)
      }
    })
  }

  colorSliderChange = (event, value) => {
    // console.log(event.target.value)
    // console.log(value)

    const _state = this.state
    _state.color[value] = event.target.value
    this.setState(_state)
  }

  componentDidMount() {
    this.randomizeBGColors()
  }

  render() {
    return (
      <main
        className="background-color"
        style={{
          backgroundColor: `hsl(${this.state.color.h},
          ${this.state.color.s}%,
          ${this.state.color.l}%)`
        }}
      >
        <section className="color-picker-main">
          <h1>HSL Color Picker</h1>
          <h2>
            hsl({this.state.color.h},{this.state.color.s}%,{this.state.color.l}
            %)
          </h2>
          <ColorSlider />
          <ColorSlider />
          <ColorSlider />
          <button onClick={this.randomizeBGColors}>New Color</button>
        </section>
      </main>
    )
  }
}

export default Color2
