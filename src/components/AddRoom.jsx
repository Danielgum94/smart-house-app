import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './css/AddRoom.css'
export default function AddRoom(props) {


  const [roomType, setType] = useState([]);
  const [roomName, setName] = useState('');
  const [roomColor, setColor] = useState('');
  const nav = useNavigate()
 

const addRoom =() => {
if(roomName.length > 5 || roomName.length == 0){
alert('error')
} else if (roomType == 0) {
  alert('You need to pick a room')
  nav('/');
}
   else {
    nav('/');
    props.add(roomType,roomName,roomColor,)
  }
}

  return (
    <div id='main-div1'>
      <label>Please Select a room:</label>
      <br/>
      <br/>
    <select onChange={(e)=>{setType(e.target.value)}} name="rooms" id="room">
      <option value='select'>Select a Room</option>
   <option value="bedroom">bedroom</option>
   <option value="bathroom">bathroom</option>
   <option value="kitchen">kitchen</option>
 </select>
 <br/>
 <br/>
 <input onChange={(e)=>{setName(e.target.value)}} id='roon-name' type={'text'} placeholder='room name?'/>
 <br/>
 <br/>
 <input onChange={(e)=>{setColor(e.target.value)}}  id='room-color'  type={'text'} placeholder='room color?'/>
 <br/>
 <button onClick={addRoom} id='add-btn'>Add</button>
    
    </div>
  )
}
