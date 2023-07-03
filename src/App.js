import React from "react";
import "./styles.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import placingOrder from "./components/placingOrder";
import Notification from "./components/notificationComponent/Notification";
import SellerHomePage from "./components/SellerPageComponenets/SellerHomePage";

export default function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route
        path="/home"
        render={(props) => <Home display={true} {...props} />}
      />
      <Route path="./order" componenet={placingOrder}/>

      <Redirect to="/login" />
      {/* <Route path="/notification" component={Notification} />
      <Route path="/sellerhome" component={SellerHomePage} /> */}
    </Switch>
  );
}
