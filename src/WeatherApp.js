import React, { useState } from 'react'
import Controls from './Controls'
import Forecast from './Components/Forecast'


const WeatherApp = () => {

  return (
    <div>WeatherApp

        <Controls />
        <Forecast />
    </div>
  )
}

export default WeatherApp