import './App.css';
import { useState } from 'react';
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import Title from './components/Title';
import AddRoom from './components/AddRoom';
import HomePage from './components/HomePage';
import Room from './components/Room';

let room, prod;

function App() {
const [singleRoom, setSingleRoom] = useState(0);
const [prodArr, setProdArr] = useState([]);
const [roomsArr, setNewRooms] = useState([]);


const addNewProd = (type,current) => { /// add new product to productsRoomArr
   prod = new Product (type)
  setProdArr([...prodArr,prod])
  current.productsRoomArr.push(prod)
}

  const addNewRoom = (roomType,roomName,roomColor) => { // add new room
    let check = false;
    roomsArr.forEach((val)=>{
      if(val.roomName == roomName){
        check = true;
        alert('The Room allready exist')
        return false;
      }
    })
      if(check == false){
        room = new MyRoom(roomType,roomName,roomColor);
        setNewRooms([...roomsArr, room]); 
      }
  }

  const turnOnOff = (prod) =>{
    prod.onAndOff(); 
  }


const indexRoom = (index) => { //get Room index
  setSingleRoom(index);
}

const returnRoom = () => { // show all rooms on homepage
  return roomsArr.map((val,idx)=>{
    return <Link to={'/room'}><button onClick={()=>{indexRoom(idx)}}
    style={{backgroundColor:val.roomColor, border: '3px black' ,margin: '3px'}}>{val.roomName}</button></Link>
  })
}

  // const addProductsArr =(prodType) =>{
  //   prod = new Product(prodType);
  // rooms.productsRoomArr.push(prod)
  // }

  return (
    <div className="App">
      <BrowserRouter>
      <Title/>
      <Routes>
        <Route path='/' element={<HomePage  roomArr = {roomsArr} return = {returnRoom}  room ={room}/>}/>
        <Route path='/addroom' element={<AddRoom roomArr = {roomsArr} add={addNewRoom} />}/>
        <Route path='/room' element={<Room  current = {roomsArr[singleRoom]}  arrProd = {prodArr} on = {turnOnOff} addProd = {addNewProd} room ={room}  prod ={prod}/>} />
      </Routes>
      </BrowserRouter>
      <br/>
    </div>
  );
}

export default App

class MyRoom { //room class
  productsRoomArr = [];
  constructor (roomType, roomName, roomColor) {
    this.roomType = roomType;
    this.roomName = roomName;
    this.roomColor = roomColor;
  }
}

class Product { // product class

  isOn = false;
  color ='red'

  constructor (type) {
    this.type = type;
}
  onAndOff() {
    if(this.isOn == false) {
      this.isOn = true;
      this.color = 'green';

    } else {
      this.isOn = false;
      this.color ='red'

    }
  }
}



