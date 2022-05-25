import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StyledApp } from "./Components/abstract/styledComponents/app.styled";
import Navbar from "./Components/main/navbar";
import Home from "./Components/main/home";
import About from "./Components/main/about";
import Contacts from "./Components/main/contacts";

function App() {
  return (
    <Router>
      <StyledApp>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
        </Switch>
      </StyledApp>
    </Router>
  );
}

export default App;
