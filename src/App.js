import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'Update Me w/ the Input',
  };

  usernameChangedHandler = (e) => {
    this.setState({ username: e.target.value });
  };

  render() {
    return (
      <div className='App'>
        <UserInput
          changed={this.usernameChangedHandler}
          // currentName={this.state.username}
        />
        <UserOutput userName={this.state.username} />
        <UserOutput userName='Blake' />
      </div>
    );
  }
}

export default App;
