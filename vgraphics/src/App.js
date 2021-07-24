import React from 'react';
//  import "bootstrap/dist/css/bootstrap.min.css";
import {  BrowserRouter as Router, Route, Switch} from "react-router-dom";


import Navbar from "./components/navbar.component"
import Register from './components/pages/forme/Form';
import Home from "./components/pages/home/home";
import Login from "./components/pages/login/login";
import Prices from "./components/pages/prices/prices";
import Vcard from "./components/pages/vcard/vcardland";
import Cartview from "./components/pages/cart/cartview";
import { FooterContainer } from './components/pages/footer/containers/footer';
import Digital from "./components/pages/digital/digitalland"
import Offset from "./components/pages/offset/Offsetland"
import View from "./components/pages/digital/view"
import View2 from "./components/pages/vcard/vcardview"
import OffsetView from "./components/pages/offset/Offstview"
import Cdesign from "./components/pages/Cdesign/Cdesign"
import Makepayment from "./components/pages/purchase/checkout"
import Admin from "./components/pages/Admin/AdminView1"
import chats from "./components/pages/Chat/chat"
import Adminchats from "./components/pages/Admin/Chat/Adminchat"






function App() {
  return (
    
    <Router>
     <Navbar />
          <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/chat" component={chats} />
          <Route path="/adminchat" component={Adminchats} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/prices" component={Prices} />
          <Route path="/cart" component={Cartview} />
          <Route path="/vcard/:id" component={View2} />
          <Route path="/vcard" component={Vcard} />
          <Route path="/digital/:id" component={View} />
          <Route path="/digital" component={Digital} />
          <Route path="/offset/:id" component={OffsetView} />
          <Route path="/offset" component={Offset} />
          <Route path="/cdesign" component={Cdesign} />
          <Route path="/makepayment" component={Makepayment} />
          <Route path="/" component = {Home} />
          </Switch>
     <FooterContainer />    
    </Router>
    
  );
}

export default App;
