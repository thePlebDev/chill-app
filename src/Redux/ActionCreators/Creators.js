import { NOT_CHILL,CHILL } from './actionTypes';


function chill(lat,lon){
  return{
    type:CHILL,
    payload: {
      text:'chill',
      lat:lat,
      lon:lon
    }
  }
}

function notChill(lat,lon){
  return{
    type:NOT_CHILL,
    payload:{
      text:'notChill',
      lat:lat,
      lon:lon
    }
  }
}

export {chill,notChill}
