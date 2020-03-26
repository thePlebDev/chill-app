import { NOT_CHILL,CHILL } from './actionTypes';


function chill(a,b){
  console.log('chill fired')
  return{
    type:CHILL,
    payload: {
      text:'chill',
      lat:a,
      lon:b
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
