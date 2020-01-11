import React from "react";
import { Link, Switch, Route, BrowserRouter } from "react-router-dom";
import BasicDemo from "./demos/BasicDemo";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="menu">
          <ul>
            <li>
              <Link to="/basic">Basic</Link>
            </li>
          </ul>
        </div>
        <div className="content">
          <Switch>
            <Route path="/basic">
              <BasicDemo />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
