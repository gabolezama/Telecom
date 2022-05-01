import React from 'react'
import { WiThermometer } from 'weather-icons-react';

export default function FeelsLike(props) {
    const { forecast: {feels_like} } = props;

  return (
    <div className="card">
        <div style={{display:'flex', flexDirection:'row'}}>
          <WiThermometer size={150} color='black' />
          <div className="card-body">
            <h5 className="card-title">Sensación Térmica</h5>
            <p className="card-text">La siguiente es la sensación térmica esperada para la fecha</p>
          </div>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item" style={{backgroundColor: 'lightgrey'}}>Promedio del día: {feels_like.day} °C</li>
          <li className="list-group-item">Por la mañana {feels_like.morn} °C</li>
          <li className="list-group-item" style={{backgroundColor: 'lightgrey'}}>Por la tarde {feels_like.eve} °C</li>
          <li className="list-group-item">Por la noche {feels_like.night} °C</li>
        </ul>
    </div>
  )
}
