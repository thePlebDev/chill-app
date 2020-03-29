import { NOT_CHILL,CHILL,REQUEST_API } from './actionTypes';
import GEO from '../../GeoLocationAPI/GAPI'


function chill(){
  return{
    type:CHILL,
    payload: {
      text:'chill',
      lat:0,
      lon:0
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
function getGeoAPI(){

  // this will get called and turned into a thunk with the middleware, will return a function instead of an object
  // the middleware will run the function
  return function(dispatch){

    return new Promise(
      GEO('CHILL')
    )
    .then(()=>console.log('this is being called'))
  }


}

export {chill,notChill,getGeoAPI}
