import React from "react";
import { Link, Switch, Route, BrowserRouter } from "react-router-dom";
import FormikDemo from "./demos/FormikDemo";
import BasicDemo from "./demos/BasicDemo";
import FormFinalResultDemo from "./demos/FormFinalResultDemo";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="menu">
          <ul>
            <li>
              <Link to="/pure">Pure</Link>
            </li>
            <li>
              <Link to="/basic">Basic</Link>
            </li>
            <li>
              <Link to="/final">Final</Link>
            </li>
          </ul>
        </div>
        <div className="content">
          <Switch>
            <Route path="/pure">
              <FormikDemo />
            </Route>
            <Route path="/basic">
              <BasicDemo />
            </Route>
            <Route path="/final">
              <FormFinalResultDemo />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
