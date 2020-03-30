import {NOT_CHILL,CHILL} from '../Redux/ActionCreators/actionTypes'
import { chill,notChill } from '../Redux/ActionCreators/Creators'
// I really want to make this more modular




export default function showPositionChill(position){

    let lat =  position.coords.latitude
    let lon =  position.coords.longitude
    //setting the  local store
    localStorage.setItem('lat',lat)
    localStorage.setItem('lon',lon)
    //getting the local store
}
