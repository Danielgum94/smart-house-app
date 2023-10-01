import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './css/homepage.css'


export default function HomePage(props) {

  return (
    <div className='main-div'>
      <div className='rooms-div'> <p>My Rooms:</p>{props.return()}</div>
        
        <Link to={'/addroom'}><button id='add'>+</button></Link>
    </div>
  )
}
