import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import ChillData from '../../components/ChillData'
import { findByTestAtrr } from '../../../Utils/index.js'


Enzyme.configure({ adapter: new Adapter() }) // this is the configuration needed to tell enzyme to use the needed adapter
const props ={
    name:'dude'
}

const setUp = (props={})=> {
  //for the sake of cutting down on code.
    const component = shallow(<ChillData {...props} />);
    return component;
}


describe('Chill Data component',()=>{
    let component;
    beforeEach(()=>{
        // this funciton runs before every test
        component = setUp();
    })

    test('should have a todos div',()=>{
        const wrapper = findByTestAtrr(component,'todos')
        expect(wrapper.length).toBe(1)
    }
    )

    test('should have a info div',()=>{
        const wrapper = findByTestAtrr(component,'info')
        expect(wrapper.length).toBe(1)
    })
})
