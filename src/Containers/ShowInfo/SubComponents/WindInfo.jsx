import React, { useContext } from 'react'
import { WiWindy } from 'weather-icons-react';
import { AppContext } from '../../../AppContext';

export default function WindInfo(props) {
    const { forecast } = props;
    const { t } = useContext(AppContext)
  return (
    <div className="card">
        <div style={{display:'flex', flexDirection:'row'}}>
          <WiWindy size={150} color='black' />
          <div className="card-body">
            <h5 className="card-title">{t('Previsión del Viento')}</h5>
            <p className="card-text">{t('Estas son las condiciones de viento esperada para la fecha')}</p>
          </div>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item" style={{backgroundColor: 'lightgrey'}}>{`${t('Velocidad del Viento')}: ${forecast?.wind_speed} m/s`}</li>
          <li className="list-group-item">{`${t('Ráfagas de Viento')}: ${forecast?.wind_gust} m/s`}</li>
          <li className="list-group-item" style={{backgroundColor: 'lightgrey'}}>{`${t('Inclinación del Viento')}: ${forecast?.wind_deg} ${t('grados')}`}</li>
        </ul>
      </div>
  )
}
