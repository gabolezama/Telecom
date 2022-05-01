import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Atmosphere from './SubComponents/Atmosphere';
import FeelsLike from './SubComponents/FeelsLike';
import MainForecast from './SubComponents/MainForecast';
import './InfoContainer.css'
import MoonInfo from './SubComponents/MoonInfo';
import WindInfo from './SubComponents/WindInfo';

export default function InfoContainer() {
    const {lat,long, index} = useParams();
    console.log(lat,long, index);
    const [forecastDays, setForecastDays] = useState({})
    const [loading, setLoading] = useState(true);
    const API_KEY = '64cce94ba0786642188047d2caab47f1'

    useEffect(()=>{
        async function fetchData(lat,long) {
            try {
                const todayForecast = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`)
                                    
            const response = await todayForecast.json()
            setForecastDays(response.daily)

            } catch (error) {
                console.error(error);
            }finally {
                setLoading(false);
            }
        }
        fetchData(lat,long)

    },[lat,long,index])

    console.log(forecastDays[index]);
    return (
        <>
        {
        loading? <h3>Cargando la data...</h3> :
        (index !== undefined && forecastDays !== null && forecastDays[index] !== undefined) &&
        <div id='info-div' style={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'space-around'}}>
            <MainForecast forecast={ forecastDays[index] }/>
            <FeelsLike forecast={ forecastDays[index] }/>
            <Atmosphere forecast={ forecastDays[index] }/>
            <WindInfo forecast={ forecastDays[index] }/>
            <MoonInfo forecast={ forecastDays[index] }/>
        </div>
        }
        </>
    )
}
