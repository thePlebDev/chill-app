import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { chill,notChill } from '../Redux/ActionCreators/Creators';



const Chill = (props)=>{
  return (
    <div className="chill-container">
        <Link to="/data">
          <h2>Explore Chill Places</h2>
        </Link>
        <hr/>
        <h3>My current location is....</h3>

          <button className='chill-button' onClick={()=>props.chill(0,0)}>Chill</button>
          <button className='not-chill-button' onClick={()=>props.notChill(1,1)} >Not Chill</button>
      
    </div>
  )
}

const mapStateToProps =({ChillState,notChill})=>{
  console.log(ChillState)
  console.log(notChill)
  return {
    Chill,
    notChill
  }
}
// I want action creators to happen here

const actionCreators = {
  chill,
  notChill
}
export default connect(mapStateToProps,actionCreators)(Chill)
