import { NOT_CHILL,CHILL} from './actionTypes';
import GEO from '../../GeoLocationAPI/GAPI'



function chill(){
    let lat = localStorage.getItem('lat')
    let lon = localStorage.getItem('lon')
    return {
        type:CHILL,
        payload:{
            text:'chill',
            lat:lat,
            lon:lon
        }
    }
}

function notChill(){
  let lat = localStorage.getItem('lat')
  let lon = localStorage.getItem('lon')
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
