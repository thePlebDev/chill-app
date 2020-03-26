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
//still have to make the call twice to the reducer

//at the moment, it currently goes into the action creator before the showPositionChill is returned, We need to
//Change that. With asyncrounous programming

function showPositionChill(position){
  let lat = position.coords.latitude
  let lon = position.coords.longitude
  return{lat,lon}
}

function showPositionNotChill(position){


  console.log('this place was not chill')
}
