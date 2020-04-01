// first lets import the reducers and the types
import { chillReducer,notChillReducer } from '../../Redux/Reducers/MainReducer'

describe('chill reducer',()=>{
  it('should return the initial state', () =>{
    expect(chillReducer(undefined,{})).toEqual({ChillState:[
            {
                type:'Chill',
                lat: 51.048615,
                lon:-114.070847
            },
        ],

        notChill:[
            {
                type:'notChill',
                lat: 50.048615,
                lon:-110.070847
            },
        ]
        })
    })

})
