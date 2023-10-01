import React from 'react'
import { Link } from 'react-router-dom'
import './css/homepage.css'

export default function RoomBtn(props) {
  return (
    <div>
        <Link to={'/room'}><button className='rooms-div' onClick={()=>{props.on(props.index)}}
         style={{backgroundColor:props.color,border: '2px black'}}>{props.roomName}</button></Link>
    </div>
  )
}
