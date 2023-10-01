import React,{ useState } from 'react'
import './css/room.css'
import { Link } from 'react-router-dom';
export default function Room(props) {

const [prodColor, setProdColor] = useState('');
const [productType, setProdType] = useState ('');

const isValid = () =>{
  let checkIf = true;

  if(props.current.productsRoomArr.length >= 5 || 
    ((props.current.roomType != 'bathroom') && 
    (productType == 'boler'))||
    (productType.val == 'select')) {

      alert('Wrong!');
      checkIf = false;
      changeflag();
      props.addProd(false);
    }
    else if (productType == 'stereo')
    {
      props.current.productsRoomArr.forEach((val)=>{
          if(val.type == 'stereo'){

            alert(`Allready have ${productType} in this room`)
            checkIf = false;
            changeflag()
            props.addProd(false);
          }})
    }

    if(check == true){
      props.addProd(productType,props.current)
      changeflag()
    }
}

const [check, setCheck] = useState (false);
const changeflag = () => {

  if(check == true)
    setCheck(false);
    else
    setCheck(true);
}

const ClickOnProd = () => {
  if (check == true){

   return <div className='selcet-div'>
          <select id='select' onChange={(e)=>{setProdType(e.target.value)}}>
          <option value={'select'}>Select a Device</option>
            <option>boler</option>
            <option>stereo</option>
            <option>lamp</option>
            <option>AC</option>
        </select>
        <br/>
        <br/>
        <button id='add-prod-from-list' onClick={()=>{isValid()}}>Add</button>
        <br/>
        </div>
  }
}

const changeColor = (val) => {
  props.on(val)
  setProdColor(val.color)
}

const returnProd = () => {
  return props.current.productsRoomArr.map((val)=>{
    return <button id='prod-btn' onClick={()=>{changeColor(val)}} 
    style={{backgroundColor: val.color,justifyContent: 'space-between',
     margin: '25px' ,width : '65px' ,marginTop: '0px', fontSize: '12px'}}>{val.type}
     </button>
  })}

  return (
    <div className='main-room'>
      <div>
  <h5 className='room-name'>Room Name: {props.current.roomName}</h5>
  <h5 className='room-name'>Room Type: {props.current.roomType}</h5>
      </div>
      <div id='sec-room-div'>
      {returnProd()}  <br/>
      <button id='addprod-btn' onClick={()=>{changeflag()}}>Add Product</button>
      {ClickOnProd()}
      <br/>
      <Link to={'/'}><button id='return-btn'>return</button></Link>
      </div>
      </div>
      
  )
}
