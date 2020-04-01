import React from 'react';
import Enzyme,{ shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

import Button from '../../components/Button'
import { findByTestAtrr,checkProps } from '../../../Utils'

Enzyme.configure({adapter: new Adapter()})

const setUp = (props={})=>{
    const component = shallow(<Button {...props} />);
    return component
};

describe('Button component',()=>{

    describe('Checking PropTypes',()=>{
        it('Should not throw a warning',()=>{
        // if there is an error, then checkPropTypes will throw a warning
            const expectedProps ={name:'this will allow it to pass', dude: 4}
            const propsErr = checkProps(Button,expectedProps)
            expect(propsErr).toBeUndefined();
        })
    })


    describe('Button Rendering', ()=>{
        let component;
        beforeEach(()=>{
            component = setUp()
        })

        it('should render without errors',()=>{
            const wrapper = findByTestAtrr(component,'buttonComponent')
            expect(wrapper.length).toBe(1);
        });
    });

    // describe('Making sure that there is a function in the props',()=>{
    //     it('Should not throw a waring',()=>{
    //         const
    //     })
    // })
})
