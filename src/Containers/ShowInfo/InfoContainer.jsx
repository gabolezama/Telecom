import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Atmosphere from './SubComponents/Atmosphere';
import FeelsLike from './SubComponents/FeelsLike';
import MainForecast from './SubComponents/MainForecast';
import './InfoContainer.css'
import MoonInfo from './SubComponents/MoonInfo';
import WindInfo from './SubComponents/WindInfo';
import { AppContext } from '../../AppContext';

export default function InfoContainer() {
    const {lat,long, index} = useParams();
    const {english, setSavedIndex} = useContext(AppContext)
    const [forecastDays, setForecastDays] = useState({})
    const [loading, setLoading] = useState(true);
    const API_KEY = '64cce94ba0786642188047d2caab47f1'

    useEffect(()=>{
        async function fetchData(lat,long) {
            try {
                const todayForecast = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${API_KEY}&units=${english? 'imperial':'metric'}`)
                                    
            const response = await todayForecast.json()
            setForecastDays(response.daily)

            } catch (error) {
                console.error(error);
            }finally {
                setLoading(false);
            }
        }
        fetchData(lat,long)
        setSavedIndex(index)
    },[lat,long,index,english])

    return (
        <>
            <div id='info-div'>
            {
            loading? 
            <div style={{color: 'white', height:'80vh', display: 'flex', alignItems:'center'}}>
                <h3>{english? 'Loading...' : 'Cargando la data...'}</h3>
            </div> :
            (index !== undefined && forecastDays !== null && forecastDays[index] !== undefined) &&
            <>
                <MainForecast forecast={ forecastDays[index] } english={english}/>
                <FeelsLike forecast={ forecastDays[index] } english={english}/>
                <Atmosphere forecast={ forecastDays[index] } english={english}/>
                <WindInfo forecast={ forecastDays[index] } english={english}/>
                <MoonInfo forecast={ forecastDays[index] } english={english}/>
            </>
            }
            </div>
        </>
    )
}
