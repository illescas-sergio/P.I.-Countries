import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CardDetail from "./Components/CardDetail";
import LandingPage from "./Components/LandingPage";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/:id">
            <CardDetail />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
