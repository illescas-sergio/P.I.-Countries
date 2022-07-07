import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CardDetail from "./Components/CardDetail/CardDetail.jsx";
import LandingPage from "./Components/LandingPage/LandingPage.jsx";
import Home from "./Components/Home/Home.jsx";
import ActivityCreate from "./Components/ActivityCreate/ActivityCreate";

function App() {

  const [currentPage, setCurrentPage] = useState(1);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/Home">
            <Home currentPage={currentPage} setCurrentPage={setCurrentPage}/>
          </Route>
          <Route exact path="/:id">
            <CardDetail currentPage={currentPage} setCurrentPage={setCurrentPage}/>
          </Route>
          <Route path="/Add/Activity">
            <ActivityCreate />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
