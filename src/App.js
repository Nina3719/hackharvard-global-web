import React, { Component } from "react";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router
} from "react-router-dom";

import { ThemeProvider } from "styled-components";
import theme from "./theme";

import { Wrapper } from "./styles";

// page views
import Home from "./containers/Home";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Router>
            <Switch>
              <Route path="/" component={Home} />
            </Switch>
          </Router>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default App;
