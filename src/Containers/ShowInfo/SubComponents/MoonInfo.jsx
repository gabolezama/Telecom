import React from 'react'

import moment from 'moment';
import { WiMoonAltWaningCrescent5 } from 'weather-icons-react';
import './SubComponents.styles.css'

export default function MoonInfo(props) {
    const { forecast } = props;
    const phaseName = forecast.moon_phase === 1 || forecast.moon_phase <= 0.25? 'Luna Nueva' : 
            forecast.moon_phase > 0.25 && forecast.moon_phase <= 0.5? 'Cuarto Creciente':
            forecast.moon_phase > 0.5  && forecast.moon_phase <= 0.75? 'Luna LLena':
            forecast.moon_phase > 0.75 && forecast.moon_phase < 0.99? 'Cuarto Menguante': null
  return (
      <div className="card">
        <div style={{display:'flex', flexDirection:'row'}}>
          <WiMoonAltWaningCrescent5 size={150} color='black' />
          <div className="card-body">
            <h5 className="card-title">Sobre la Luna</h5>
            <p className="card-text">Información el estado lunar para la fecha indicada</p>
          </div>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item" style={{backgroundColor: 'lightgrey'}}>{`Fase ${forecast.moon_phase} (${phaseName})`}</li>
          <li className="list-group-item">Aparición: {moment.unix(forecast.moonrise).format('hh:mm:ss')} P.M.</li>
          <li className="list-group-item" style={{backgroundColor: 'lightgrey'}}>Desaparición: {moment.unix(forecast.moonrise).format('hh:mm:ss')} A.M.</li>
        </ul>
      </div>
  )
}
