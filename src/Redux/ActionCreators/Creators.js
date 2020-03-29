import { NOT_CHILL,CHILL,REQUEST_API } from './actionTypes';
import GEO from '../../GeoLocationAPI/GAPI'


function chill(){
  console.log('this is inside of the chill function')
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
    return new Promise((GEO)=>{
    //passing in GEO as the resolve function
      // creating a new promise because the GEOAPI is callback based
      GEO('CHILL');// operations within the executor is asnchronous and provides a callback
      // call the GEO function. the promise will return a new promise . Making the .then() be able to be called
    }).then(()=> dispatch(chill()) )
  }


}

export {chill,notChill,getGeoAPI}
