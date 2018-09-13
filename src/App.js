import React, { Component } from "react";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router
} from "react-router-dom";

// page views
import Home from "./containers/Home";

class App extends Component {
  render() {
    return (
        <Router>
            <Switch>
              <Route path="/" component={Home} />
            </Switch>
        </Router>
    );
  }
}

export default App;
