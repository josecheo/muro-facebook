import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
