import React, { useContext } from 'react'
import { WiDayCloudyWindy } from 'weather-icons-react';
import { AppContext } from '../../../AppContext';

export default function WindInfo(props) {
    const { forecast } = props;
    const { t } = useContext(AppContext)
  return (
    <div className="card">
        <div style={{display:'flex', flexDirection:'row'}}>
          <WiDayCloudyWindy size={150} color='black' />
          <div className="card-body">
            <h5 className="card-title">{t('Condiciones Atmosféricas')}</h5>
            <p className="card-text">{t('Las siguientes son las condiciones de la admosfera previstas para la fecha')}</p>
          </div>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item" style={{backgroundColor: 'lightgrey'}}>{`${t('Nubes')}: ${forecast?.clouds} %`}</li>
          <li className="list-group-item">{`${t('Presión')}: ${forecast?.pressure} hPa`}</li>
          <li className="list-group-item" style={{backgroundColor: 'lightgrey'}}>{`${t('Humedad')}: ${forecast?.humidity} %`}</li>
          <li className="list-group-item">UVI: {forecast?.uvi} </li>
        </ul>
      </div>
  )
}
