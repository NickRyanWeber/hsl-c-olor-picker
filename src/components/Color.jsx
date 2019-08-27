import React, { useState } from 'react'

const Color = () => {
  const randomValue = max => {
    return Math.ceil(Math.random() * max)
  }

  const [hue, setHue] = useState(randomValue(360))
  const [saturation, setSaturation] = useState(randomValue(100))
  const [lightness, setLightness] = useState(randomValue(100))

  return (
    <main
      className="background-color"
      style={{
        backgroundColor: `hsl(${hue},
          ${saturation}%,
          ${lightness}%)`
      }}
    >
      <section className="color-picker-main">
        <h1>HSL Color Picker</h1>
        <h2>
          hsl({hue},{saturation}%,{lightness}
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
              value={hue}
              onChange={e => {
                setHue(e.target.value)
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
              value={saturation}
              onChange={e => {
                setSaturation(e.target.value)
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
              value={lightness}
              onChange={e => {
                setLightness(e.target.value)
              }}
            />
          </section>
        </section>
        <button
          onClick={() => {
            setHue(randomValue(360))
            setSaturation(randomValue(100))
            setLightness(randomValue(100))
          }}
        >
          New Color
        </button>
      </section>
    </main>
  )
}

export default Color
