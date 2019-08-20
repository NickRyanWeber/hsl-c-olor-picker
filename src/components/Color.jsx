import React, { Component } from 'react'

class Color extends Component {
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
          <section className="sliders">
            <section className="slider hue-slider">
              <label htmlFor="Hue">H </label>
              <input
                type="range"
                name="Hue"
                min="0"
                max="360"
                value={this.state.color.h}
                onChange={e => {
                  this.colorSliderChange(e, 'h')
                }}
              />
            </section>
            <section className="slider saturation-slider">
              <label htmlFor="Saturation">S </label>
              <input
                type="range"
                name="Saturation"
                min="0"
                max="100"
                value={this.state.color.s}
                onChange={e => {
                  this.colorSliderChange(e, 's')
                }}
              />
            </section>
            <section className="slider lightness-slider">
              <label htmlFor="Lightness">L </label>
              <input
                type="range"
                name="Lightness"
                min="0"
                max="100"
                value={this.state.color.l}
                onChange={e => {
                  this.colorSliderChange(e, 'l')
                }}
              />
            </section>
          </section>
          <button onClick={this.randomizeBGColors}>New Color</button>
        </section>
      </main>
    )
  }
}

export default Color
