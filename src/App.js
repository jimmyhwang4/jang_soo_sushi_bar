import React from 'react';
import { Route, BrowserRouter as Router, Redirect} from "react-router-dom";
import './App.css';

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import LunchMenu from "./pages/LunchMenu";
import DinnerMenu from "./pages/DinnerMenu";
import DrinksMenu from "./pages/DrinksMenu";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import COVID from "./pages/COVID";
import Careers from "./pages/Careers";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route to exact path="/">
            <Home />
        </Route>
        <Route to exact path="/menu">
            <Menu />
        </Route>
        <Route to exact path="/menu/lunch">
            <LunchMenu />
        </Route>
        <Route to exact path="/menu/dinner">
            <DinnerMenu />
        </Route>
        <Route to exact path="/menu/drinks">
            <DrinksMenu />
        </Route>
        <Route to exact path="/gallery">
            <Gallery />
        </Route>
        <Route to exact path="/contact_us">
            <Contact />
        </Route>
        <Route to exact path="/careers">
            <Careers />
        </Route>

        <Route to exact path="/covid-19">
            <COVID />
        </Route>
        
      </Router>
      <Footer />
    </div>
  );
}

export default App;
