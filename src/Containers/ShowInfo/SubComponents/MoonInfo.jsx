import React, { useContext } from 'react'
import moment from 'moment';
import { WiMoonAltWaningCrescent5 } from 'weather-icons-react';
import './SubComponents.styles.css'
import { AppContext } from '../../../AppContext';

export default function MoonInfo(props) {
    const { forecast } = props;
    const { t } = useContext(AppContext)

    const phaseName = forecast.moon_phase === 1 || forecast.moon_phase <= 0.25? 'Luna Nueva' : 
            forecast.moon_phase > 0.25 && forecast.moon_phase <= 0.5? 'Cuarto Creciente':
            forecast.moon_phase > 0.5  && forecast.moon_phase <= 0.75? 'Luna Llena':
            forecast.moon_phase > 0.75 && forecast.moon_phase < 0.99? 'Cuarto Menguante': null
  return (
      <div className="card">
        <div style={{display:'flex', flexDirection:'row'}}>
          <WiMoonAltWaningCrescent5 size={150} color='black' />
          <div className="card-body">
            <h5 className="card-title">{t('Sobre la Luna')}</h5>
            <p className="card-text">{t('Información el estado lunar para la fecha indicada')}</p>
          </div>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item" style={{backgroundColor: 'lightgrey'}}>{`${t('Fase')}: ${forecast.moon_phase} (${t(phaseName)})`}</li>
          <li className="list-group-item">{`${t('Aparición')}: ${moment.unix(forecast.moonrise).format('hh:mm:ss')} P.M.`}</li>
          <li className="list-group-item" style={{backgroundColor: 'lightgrey'}}>{`${t('Desaparición')}: ${moment.unix(forecast.moonrise).format('hh:mm:ss')} A.M.`}</li>
        </ul>
      </div>
  )
}
