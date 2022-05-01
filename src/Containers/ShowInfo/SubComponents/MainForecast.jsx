import React from 'react'
import moment from 'moment';
import './SubComponents.styles.css'

export default function MainForecast(props) {
    const { forecast } = props;
    const { forecast: {temp} } = props;
    const { forecast: weather } = props;

    console.log(weather.weather[0]?.description);
  return (
      <div className="card">
        <div style={{display:'flex', flexDirection:'row'}}>
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0]?.icon}@2x.png`}/>
          <div className="card-body">
            <h5 className="card-title">Previsión para el {moment.unix(forecast.dt).format('DD MM YYYY')}</h5>
            <p className="card-text">{`Para este día se espera:  ${weather.weather[0]?.description}`}</p>
          </div>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item" style={{backgroundColor: 'lightgrey'}}>Promedio del día: {temp.day} °C</li>
          <li className="list-group-item">Mínima: {temp?.min} °C</li>
          <li className="list-group-item" style={{backgroundColor: 'lightgrey'}}>Máxima: {temp?.max} °C</li>
          <li className="list-group-item">Amanecer: {moment.unix(forecast.sunrise).format('hh:mm:ss')} A.M.</li>
          <li className="list-group-item" style={{backgroundColor: 'lightgrey'}}>Ocaso: {moment.unix(forecast.sunset).format('hh:mm:ss')} P.M.</li>
        </ul>
      </div>
  )
}
