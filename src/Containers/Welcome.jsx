import React, { useState, useContext } from 'react'
import { AppContext } from '../AppContext';
import './Welcome.styles.css'

export default function Welcome() {
  const {english, setEnglish} = useContext(AppContext)

  const handleLaenguage = () =>{
    setEnglish(!english)
  }

  return (
    <div id='welcome-div'>
      <div className="form-check form-switch">
        <input value={english} className="form-check-input" type="checkbox" role="switch" id="flexSwitch" onClick={(e)=> handleLaenguage(e.target.value)}/>
        <label className="form-check-label" for="flexSwitch">{english? 'This app will display texts in English' : 'La aplicación mostrará los textos en Español'}</label>
      </div>
      { english?
        <>
          <h1>WELCOME!!</h1>
          <p>Please first select a city and then select the day you want to see the forecast from</p>
        </>:
        <>
          <h1>Bienvenido!!</h1>
          <p>Por Favor Selecciones una ciudad y luego selecciones el día para poder ver el pronóstico del Tiempo</p>
        </>
      }
    </div>
  )
}
