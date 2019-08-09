import React, { Component } from 'react';
import './App.css';

import Signup from './components/Signup';

class App extends Component {
  state = {
    token: '',
    response: undefined,
  };

  setToken = (token) => {
    this.setState({
      ...this.state,
      token,
  });
  }

  render() {
    console.log(this.state.token);
    return (
      <div data-testid="App" className="App">
        <Signup setToken={this.setToken}/>
        {this.state.response !== undefined
          && <p>placeholder</p>
        }
      </div>
    );
  }
}

export default App;
