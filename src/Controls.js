import React, { useEffect, useState } from 'react'
import useFetch from './hooks/useFetch'


const Controls = () => {
    const [lat, setLat] = useState(28)
    const [long, setLong] = useState(77)
    const [apiUrl, setApiUrl] = useState('')
   
    const {data, refetch}  = useFetch(apiUrl)

    const getReport =(e)=>{
        // const {data}  = useFetch('dumyurl')
        e.preventDefault()
       
        if(lat && long){
            const api = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,relative_humidity_2m,rain,showers,pressure_msl,visibility,wind_speed_10m&forecast_days=3`
            setApiUrl(api)
        }

        
    }

    useEffect(()=>{
        console.log('weather', data.hourly)
    }, [data])
  return (
    <div>Controls
        <div>
            Latitude: <input type='number' value={lat} step='0.01' onChange={(e)=>{setLat(e.target.value)}} />
        </div>
        <div>
            Longitude: <input type='number' value={long} step='0.01' onChange={(e)=>{setLong(e.target.value)}} />
        </div>
        <button onClick={(e)=>{getReport(e)}}>Get Report</button>
    </div>
  )
}

export default Controls