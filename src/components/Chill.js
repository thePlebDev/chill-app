import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { chill,notChill,getGeoAPI } from '../Redux/ActionCreators/Creators';
import geoapi from '../GeoLocationAPI/GAPI'
import {NOT_CHILL,CHILL} from '../Redux/ActionCreators/actionTypes'



const Chill = (props)=>{

  return (
    <div className="chill-container">
        <Link to="/data">
          <h2>Explore Chill Places</h2>
        </Link>
        <hr/>
        <h3>My current location is....</h3>
          <button className='chill-button' onClick={props.chill} >Chill</button>
          <button className='not-chill-button' onClick={props.notChill} >Not Chill</button>

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
  getGeoAPI
}


const ChiillConnect = connect(mapstateToProps,actioncreators)(Chill)
export default ChiillConnect
