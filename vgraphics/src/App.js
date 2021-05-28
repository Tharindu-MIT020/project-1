import React from 'react';
//  import "bootstrap/dist/css/bootstrap.min.css";
import {  BrowserRouter as Router, Route, Switch} from "react-router-dom";


import Navbar from "./components/navbar.component"
import Register from './components/pages/forme/Form';
import Home from "./components/pages/home/home";
import Login from "./components/pages/login/login";
import Prices from "./components/pages/prices/prices";
import Vcard from "./components/pages/products/mainContent";



function App() {
  return (
    
    <Router>
     <Navbar />
          <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/prices" component={Prices} />
          <Route path="/vcard" component={Vcard} />
          <Route path="/" component = {Home} />
          </Switch>
    </Router>
    
  );
}

export default App;
