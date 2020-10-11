import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./Componenet/Home/About/About";
import DEntalService from "./Componenet/Home/DentailService/DEntalService";
import Reviews from "./Componenet/Home/REviews/Reviews";
import Blog from "./Componenet/Home/Blog/Blog";
import ContactUs from "./Componenet/Home/ContactUs/ContactUs";
import Home from "./Componenet/Home/Home/Home";
import Appointment from "./Componenet/Appointment/Appointment/Appointment";
import Login from "./Componenet/Login/Login";
import Appointments from "./Componenet/Dashbord/Appointments/Appointments";
import Patients from "./Componenet/Dashbord/Patient/Patients";
import Prescription from "./Componenet/Dashbord/Perspiciatis/Prescription";
import Dashbord from "./Componenet/Dashbord/Dashbord/Dashbord";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/patients">
          <Patients />
        </Route>

        <Route exact path="/prescription">
          <Prescription />
        </Route>

        <Route exact path="/dashbord">
          <Dashbord />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/contactus">
          <ContactUs />
        </Route>
        <Route exact path="/appointment">
          <Appointment />
        </Route>
        <Route exact path="/appointments">
          <Appointments />
        </Route>
        <Route exact path="/dentalservice">
          <DEntalService />
        </Route>
        <Route exact path="/reviews">
          <Reviews />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
