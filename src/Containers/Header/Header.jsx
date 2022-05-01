import React, { useState } from 'react'
import moment from 'moment'
import './Header.styles.js'
import {TabText, Container, Selections} from './Header.styles'
import { Link } from 'react-router-dom'

export default function Header() {

  const [city, setCity] = useState("-34.672501/-58.449722")
  // console.log(moment().format('dddd MMMM Do YYYY'));
  // console.log(moment().add(1, 'days').format('dddd MMMM Do YYYY'));

  return (
    <Container>
      <Selections>
        <label style={{marginTop:10}}>Seleccione una ciudad: </label>
        <select onChange={(e)=> setCity(e.target.value)} style={{padding:3, height:'2rem', marginTop:5, marginLeft:5}} value={city}>
            <option value={"-34.672501/-58.449722"} selected>Buenos Aires</option>
            <option value={"-34.90328/-56.18816"}>Montevideo</option>
            <option value={"-33.447487/-70.673676"}>Santiago, CL</option>
            <option value={"10.500000/-66.916664"}>Caracas</option>
            <option value={"40.730610/-73.935242"}>New York</option>
        </select>
      </Selections>
      <Selections>
        <Link style={{textDecoration:'none'}} to={`/${city}/0`}><TabText>HOY</TabText></Link>
        <Link style={{textDecoration:'none'}} to={`/${city}/1`}><TabText>{moment().add(1, 'days').format('dddd Do')}</TabText></Link>
        <Link style={{textDecoration:'none'}} to={`/${city}/2`}><TabText>{moment().add(2, 'days').format('dddd Do')}</TabText></Link>
        <Link style={{textDecoration:'none'}} to={`/${city}/3`}><TabText>{moment().add(3, 'days').format('dddd Do')}</TabText></Link>
        <Link style={{textDecoration:'none'}} to={`/${city}/4`}><TabText>{moment().add(4, 'days').format('dddd Do')}</TabText></Link>
        <Link style={{textDecoration:'none'}} to={`/${city}/5`}><TabText>{moment().add(5, 'days').format('dddd Do')}</TabText></Link>
      </Selections>    
    </Container>
  )
}
