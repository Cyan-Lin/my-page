import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Thanks from "./Thanks";
import Navigation from "./Navigation";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/thanks" component={Thanks} />
      </BrowserRouter>
    </div>
  );
};

export default App;
