import React, { Component } from 'react'

export class ColorSlider extends Component {
  render() {
    return (
      <section className="slider">
        <label>H </label>
        <input
          type="range"
          min="0"
          max="360"
          value="180"
          // onChange={e => {
          //   this.colorSliderChange(e, 'h')
          // }}
        />
      </section>
    )
  }
}

export default ColorSlider
