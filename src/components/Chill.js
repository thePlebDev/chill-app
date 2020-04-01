import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { chill,notChill, } from '../Redux/ActionCreators/Creators';
import geoapi from '../GeoLocationAPI/GAPI'
import {NOT_CHILL,CHILL} from '../Redux/ActionCreators/actionTypes'
import Button from './Button'



const Chill = (props)=>{
    console.log(props)
    return (
        <div className="chill-container" data-test="chillComponent">
            <Link to="/data">
                <h2>Explore Chill Places</h2>
            </Link>
            <hr/>
            <h3>My current location is....</h3>
            <Button name='Chill'/>
            <Button name="Not Chill"/>

        </div>
    )
}

const mapstateToProps =function(state){
    //this is how our component would be made aware of the state
    console.log(state)
    return{}
}

const actioncreators ={
    // this is where our component gets acces to aciton creators
    chill,
    notChill,
}


const ChiillConnect = connect(mapstateToProps,actioncreators)(Chill)
export default ChiillConnect
