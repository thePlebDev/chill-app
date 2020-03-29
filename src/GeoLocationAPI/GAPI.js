import {NOT_CHILL,CHILL} from '../Redux/ActionCreators/actionTypes'
import { chill,notChill } from '../Redux/ActionCreators/Creators'




export default function getLocation(a){
  if (navigator.geolocation){
    //checking to see if the browser has this api
    if(a === CHILL){
      navigator.geolocation.getCurrentPosition(showPositionChill) // I need to wait for this
      // when getCurrentPosition gets called it becomes an asynchronous request.
    }else{
      navigator.geolocation.getCurrentPosition(showPositionNotChill)
    }
  }
}


function showPositionChill(position){
  let value = position.coords.latitude

  return value
}

function showPositionNotChill(position){


  console.log('this place was not chill')
}
