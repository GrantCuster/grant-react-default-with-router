import React, { Component } from "react";
import { Provider, Heading, Box, Text, Flex, colors } from "rebass";
import "./App.css";

class App extends Component {
  render() {
    const { AppState, setAppState } = this.props;
    const { message } = AppState;
    return (
      <Provider>
        <Flex>
          <Box>{message}</Box>
        </Flex>
      </Provider>
    );
  }
}

export default App;
