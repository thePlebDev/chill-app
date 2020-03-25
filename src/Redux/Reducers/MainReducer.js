// our reducer has to stay pure. It will take in the previousState plus an action and give us the next state
import initialState from './State';
import { NOT_CHILL,CHILL } from '../ActionCreators/actionTypes';


function chillReducer(state = initialState,action){
  // this is the main reducer
    switch(action.type){
      case CHILL:
      return {...state,
        ChillState:[
          ...state.ChillState,
          {
            type: CHILL,
            lat:action.payload.lat,
            lon:action.payload.lon
          }
        ]
      }
      default:
        return state

      case NOT_CHILL:
      return {...state,
        notChill:[
          ...state.notChill,
          {
            type:NOT_CHILL,
            lat:action.payload.lat,
            lon:action.payload.lon
          }
        ]
      }
    }

}

export default chillReducer
