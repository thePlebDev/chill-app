import { combineReducers } from 'redux';

import initialState from './State';

import { NOT_CHILL,CHILL } from '../ActionCreators/actionTypes';


function chillReducer(state = initialState,action){
    // this is the main reducer
    switch(action.type){
        case CHILL:
            return {
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
    }

}

function notChillReducer(state= initialState,action){
    switch(action.type){
        case NOT_CHILL:
            return {
                notChill:[
                    ...state.notChill,
                    {
                        type:NOT_CHILL,
                        lat:action.payload.lat,
                        lon:action.payload.lon
                    }
                ]
            }
        default:
            return state
    }
}
export {chillReducer,notChillReducer}
