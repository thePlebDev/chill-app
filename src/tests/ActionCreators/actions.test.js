import {chill,notChill,getGeoAPI} from '../../Redux/ActionCreators/Creators';
import { CHILL } from '../../Redux/ActionCreators/actionTypes';

function add(){
    return 3
}
describe('actions',()=>{
    test('should create an action to add chill location to the state',()=>{
        const expectedAction ={type:CHILL}
        expect(chill()).toEqual(expectedAction)
    })
})
