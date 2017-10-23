import React, { Component } from "react";

class AppState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Focus on the process"
    };
    this.setAppState = this.setAppState.bind(this);
  }

  setAppState(newState, callback) {
    this.setState(newState, callback);
  }

  render() {
    return (
      <div className="AppState">
        {React.Children.map(this.props.children, child => {
          return React.cloneElement(child, {
            AppState: this.state,
            setAppState: this.setAppState
          });
        })}
      </div>
    );
  }
}

export default AppState;
