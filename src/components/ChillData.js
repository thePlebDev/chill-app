import React from 'react';


const ChillData = (props)=>{
    return(
        <div>
            <h1 data-test="todos" >todos</h1>
            { props.name }
        This is where the chill data will go
        <h2 data-test="info">This is some very important info</h2>
        </div>
    )
}

export default ChillData
