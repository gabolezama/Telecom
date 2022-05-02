import React, { useContext } from 'react'
import moment from 'moment';
import './SubComponents.styles.css'
import { AppContext } from '../../../AppContext';

export default function MainForecast(props) {
    const { forecast } = props;
    const { forecast: {temp} } = props;
    const { forecast: weather } = props;
    const { t } = useContext(AppContext)

  return (
      <div className="card">
        <div style={{display:'flex', flexDirection:'row'}}>
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0]?.icon}@2x.png`}/>
          <div className="card-body">
            <h5 className="card-title">{`${t('Prevision para el')} ${moment.unix(forecast.dt).format('DD/MM/YYYY')}`}</h5>
            <p className="card-text">{`${t('Para este día se espera')}  ${weather.weather[0]?.description}`}</p>
          </div>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item" style={{backgroundColor: 'lightgrey'}}>{`${t('Promedio del día')}: ${temp.day} ${t('°C')}`}</li>
          <li className="list-group-item">{`${t('Mínima')}: ${temp?.min} ${t('°C')}`}</li>
          <li className="list-group-item" style={{backgroundColor: 'lightgrey'}}>{`${t('Máxima')}: ${temp?.max} ${t('°C')}`}</li>
          <li className="list-group-item">{`${t('Amanecer')}: ${moment.unix(forecast.sunrise).format('hh:mm:ss')} A.M.`}</li>
          <li className="list-group-item" style={{backgroundColor: 'lightgrey'}}>{`${t('Ocaso')}: ${moment.unix(forecast.sunset).format('hh:mm:ss')} P.M.`}</li>
        </ul>
      </div>
  )
}
