import { NOT_CHILL,CHILL} from './actionTypes';
import GEO from '../../GeoLocationAPI/GAPI'



function chill(lat,lon){
    return {
        type:CHILL,
        payload:{
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


function getGeoAPI(event){
    if (event.target.className === 'chill-button'){
        console.log(event.target.className)
        return function(dispatch){
            let lat = localStorage.getItem('lat')
            let lon = localStorage.getItem('lon')
            dispatch(chill(lat,lon))
        }
    }else{
        console.log(event.target.className)
        return function(dispatch){
            let lat = localStorage.getItem('lat')
            let lon = localStorage.getItem('lon')
            dispatch(notChill(lat,lon))
        }
    }
}


export {chill,notChill,getGeoAPI}
