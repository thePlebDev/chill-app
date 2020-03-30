import {chill,notChill,getGeoAPI} from '../../Redux/ActionCreators/Creators';
import { CHILL,NOT_CHILL } from '../../Redux/ActionCreators/actionTypes';

describe('actions',()=>{
    test('should create an action to add chill location to the state',()=>{
        const expectedAction ={
            type:CHILL,
            payload:{
                text:'chill',
                lat:0,
                lon:0
            }

        }
        expect(chill(0,0)).toEqual(expectedAction)
    })

    test('should create an action to add chill location to the state',()=>{
        const expectedAction={
            type:NOT_CHILL,
            payload:{
                text:'notChill',
                lat:0,
                lon:0
            }
        }
        expect(notChill(0,0)).toEqual(expectedAction)
    })
    
})
