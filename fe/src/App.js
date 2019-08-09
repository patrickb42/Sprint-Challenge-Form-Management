import React, { Component } from 'react';
import './App.css';

import Signup from './components/Signup';

class App extends Component {
  state = {
    token: '',
    response: undefined,
  };

  render() {
    return (
      <div data-testid="App" className="App">
        <Signup />
        {this.state.response !== undefined
          && <p>placeholder</p>
        }
      </div>
    );
  }
}

export default App;
