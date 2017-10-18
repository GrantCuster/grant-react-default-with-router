import React, { Component } from "react";
import { Provider, Heading, Box, Text, Flex, colors } from "rebass";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Flex>
          <Box>Focus on the process. Not the outcome.</Box>
        </Flex>
      </Provider>
    );
  }
}

export default App;
