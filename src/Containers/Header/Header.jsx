import React, { useState, useContext} from 'react'
import moment from 'moment'
import './Header.styles.js'
import {TabText, Container, Selections} from './Header.styles'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../../AppContext.js'

export default function Header() {
  const [city, setCity] = useState("-34.672501/-58.449722")
  
  const {english, setEnglish, t, savedIndex} = useContext(AppContext) 

  const navigate = useNavigate();

  const dT = (dayString) =>{
    if(english){
      return dayString
    }else{

    const dayName = dayString.split(' ')[0]
    const ordinal = dayString.split(' ')[1]

    return dayName.length === 9? `Miércoles ${ordinal}`:
           dayName.length === 8? `Jueves ${ordinal}`:
           dayName.length === 7? `Martes ${ordinal}`:
           dayName === 'Friday'? `Viernes ${ordinal}`: `Lunes ${ordinal}`
    }
  }
  

  return (
    <Container>
      <Selections>
        <label style={{marginTop:10}}>{t('Seleccione una ciudad')}</label>
        <select onChange={(e)=>{ setCity(e.target.value); navigate(`/${city}/${savedIndex}`)}} style={{padding:3, height:'2rem', marginTop:5, marginLeft:5}} value={city}>
            <option value={"-34.672501/-58.449722"} selected>Buenos Aires</option>
            <option value={"-34.90328/-56.18816"}>Montevideo</option>
            <option value={"-33.447487/-70.673676"}>Santiago, CL</option>
            <option value={"10.500000/-66.916664"}>Caracas</option>
            <option value={"40.730610/-73.935242"}>New York</option>
        </select>
      </Selections>
      <Selections>
        <Link style={{textDecoration:'none'}} to={`/${city}/0`}><TabText>{t('HOY')}</TabText></Link>
        <Link style={{textDecoration:'none'}} to={`/${city}/1`}><TabText>{dT(moment().add(1, 'days').format('dddd D'))}</TabText></Link>
        <Link style={{textDecoration:'none'}} to={`/${city}/2`}><TabText>{dT(moment().add(2, 'days').format('dddd D'))}</TabText></Link>
        <Link style={{textDecoration:'none'}} to={`/${city}/3`}><TabText>{dT(moment().add(3, 'days').format('dddd D'))}</TabText></Link>
        <Link style={{textDecoration:'none'}} to={`/${city}/4`}><TabText>{dT(moment().add(4, 'days').format('dddd D'))}</TabText></Link>
        <Link style={{textDecoration:'none'}} to={`/${city}/5`}><TabText>{dT(moment().add(5, 'days').format('dddd D'))}</TabText></Link>
      </Selections>
      <div className="form-check form-switch" style={{ display:'flex', flexDirection: 'column'}}>
        <label className="form-check-label" for="flexSwitch">{english? 'Language (English)' : 'Idioma (Español)'}</label>
        <input style={{marginLeft: 20}} value={english} className="form-check-input" type="checkbox" role="switch" id="flexSwitch" onClick={()=> setEnglish(!english)}/>
      </div>
    </Container>
  )
}
