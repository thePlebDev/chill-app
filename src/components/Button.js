import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { chill,notChill, } from '../Redux/ActionCreators/Creators';


const Button = (props) =>{
    function Clicker(){
        if (props.name ==='Chill'){
            props.chill();
        }else{
            props.notChill();
        }
    }
    return(
        <button data-test="buttonComponent" onClick={Clicker}>{ props.name }</button>
    )
}

Button.propTypes={
    name: PropTypes.string,
};

const actionCreators ={
    chill,
    notChill
}

const connectedButton = connect(null,actionCreators)(Button)

export default connectedButton
