import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

const Forecast = () => {
    const report = useSelector(state => state.forecast.report);
    console.log('redux data', report)
  return (
    <div>
        Forecast
        <table border={1} style={{textAlign:'center'}}>
        <tr>
            <th>Time</th>
            <th>Today</th>
            <th>Tomorrow</th>
            <th>A Day after</th>
        </tr>
        <tr>
            <td>12 AM (Midnight) </td>
            <td>{report[0].night}</td>
            <td>{report[1].night}</td>
            <td>{report[2].night}</td>
        </tr>
        <tr>
            <td>12 PM (Noon) </td>
            <td>{report[0].day}</td>
            <td>{report[1].day}</td>
            <td>{report[2].day}</td>
        </tr>
        </table>
    </div>
    
  )
}

export default Forecast