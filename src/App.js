import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Provider as RebassProvider,
  Heading,
  Box,
  Text,
  Flex,
  colors
} from "rebass";
import Home from "./Home";
import About from "./About";
import "./App.css";

class App extends Component {
  render() {
    return (
      <RebassProvider>
        <Router>
          <Box>
            <Flex>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
            </Flex>
            <Box>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </Box>
          </Box>
        </Router>
      </RebassProvider>
    );
  }
}

export default App;
