import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';

import Signup from './components/Signup';
import Dish from './components/Dish';

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

  componentDidUpdate = (prevProps, prevState) => {
    (async () => {
      if (prevState.token !== this.state.token) {
        this.setState({
          ...this.state,
          response: await Axios.get('http://localhost:5000/api/restricted/data', {token: this.state.token}),
        });
      }
    })();
  }

  render() {
    return (
      <div data-testid="App" className="App">
        <Signup setToken={this.setToken}/>
        {this.state.response !== undefined
          && this.state.response.data.map((dish) => {
            return <Dish key={dish.name} {...dish} />;
          })
        }
      </div>
    );
  }
}

export default App;
