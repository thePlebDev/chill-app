import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { chill,notChill } from '../Redux/ActionCreators/Creators';
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
          <button className='chill-button' onClick={()=>props.chill(geoapi(CHILL))}>Chill</button>
          <button className='not-chill-button' onClick={()=>props.notChill(geoapi(NOT_CHILL))} >Not Chill</button>

    </div>
  )
}

const mapStateToProps =({chillReducer,notChillReducer})=>{
  // this is giving me undefined for some reason.

  return {
    chillReducer,
    notChillReducer
  }
}
// I want action creators to happen here

const actionCreators = {
  chill,
  notChill
}
export default connect(mapStateToProps,actionCreators)(Chill)
