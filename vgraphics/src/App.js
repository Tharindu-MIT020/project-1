import React from 'react';
//  import "bootstrap/dist/css/bootstrap.min.css";
import {  BrowserRouter as Router, Route, Switch} from "react-router-dom";


import Navbar from "./components/navbar.component"
import Register from './components/pages/forme/Form';
import Home from "./components/pages/home/home";
import Login from "./components/pages/login/login"



function App() {
  return (
    
    <Router>
     <Navbar />
          <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/" component = {Home} />
          </Switch>
    </Router>
    
  );
}

export default App;
