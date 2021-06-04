import React from 'react';
//  import "bootstrap/dist/css/bootstrap.min.css";
import {  BrowserRouter as Router, Route, Switch} from "react-router-dom";


import Navbar from "./components/navbar.component"
import Register from './components/pages/forme/Form';
import Home from "./components/pages/home/home";
import Login from "./components/pages/login/login";
import Prices from "./components/pages/prices/prices";
import Vcard from "./components/pages/products/mainContent";
import Cartview from "./components/pages/cart/cartview";
import { FooterContainer } from './components/pages/footer/containers/footer'



function App() {
  return (
    
    <Router>
     <Navbar />
          <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/prices" component={Prices} />
          <Route path="/cart" component={Cartview} />
          <Route path="/vcard" component={Vcard} />
          <Route path="/" component = {Home} />
          </Switch>
     <FooterContainer />    
    </Router>
    
  );
}

export default App;
