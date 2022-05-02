import React, { useContext } from 'react'
import { WiThermometer } from 'weather-icons-react';
import { AppContext } from '../../../AppContext';

export default function FeelsLike(props) {
    const { forecast: {feels_like} } = props;
    const { t } = useContext(AppContext)
  return (
    <div className="card">
        <div style={{display:'flex', flexDirection:'row'}}>
          <WiThermometer size={150} color='black' />
          <div className="card-body">
            <h5 className="card-title">{t('Sensación Térmica')}</h5>
            <p className="card-text">{t('La siguiente es la sensación térmica esperada para la fecha')}</p>
          </div>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item" style={{backgroundColor: 'lightgrey'}}>{`${t('Promedio del día')}: ${feels_like.day} ${t('°C')}`}</li>
          <li className="list-group-item">{`${t('Por la mañana')}: ${feels_like.morn} ${t('°C')}`}</li>
          <li className="list-group-item" style={{backgroundColor: 'lightgrey'}}>{`${t('Por la tarde')}: ${feels_like.eve} ${t('°C')}`}</li>
          <li className="list-group-item">{`${t('Por la noche')}: ${feels_like.night} ${t('°C')}`}</li>
        </ul>
    </div>
  )
}
