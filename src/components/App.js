import React from 'react';
import {Route,Switch} from 'react-router-dom';

import Chill from './Chill';
import ChillData from './ChillData';



const App = () =>{
  return(
    <div className="container">
      <Switch>
      <Route exact path="/">
        <Chill />
      </Route>
      <Route path="/data">
        <ChillData name='jeff' />
      </Route>
      </Switch>


    </div>
  )
}

export default App
