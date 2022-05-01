import React from 'react'
import { WiWindy } from 'weather-icons-react';

export default function WindInfo(props) {
    const { forecast } = props;
  return (
    <div className="card">
        <div style={{display:'flex', flexDirection:'row'}}>
          <WiWindy size={150} color='black' />
          <div className="card-body">
            <h5 className="card-title">Previsión del Viento</h5>
            <p className="card-text">Estas son las condiciones de viento esperada para la fecha</p>
          </div>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item" style={{backgroundColor: 'lightgrey'}}>Velocidad del Viento: {forecast?.wind_speed} m/s</li>
          <li className="list-group-item">Ráfagas de Viento: {forecast?.wind_gust} m/s</li>
          <li className="list-group-item" style={{backgroundColor: 'lightgrey'}}>Inclinación del Viento: {forecast?.wind_deg} grados</li>
        </ul>
      </div>
  )
}
