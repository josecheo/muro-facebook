import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Muro from './pages/Muro'

function App() {
  return (

   <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path ="/muro" component = {Muro}/>
      
      </Switch>

  </BrowserRouter>
  );
}

export default App;
