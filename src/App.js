import React, { Component } from 'react';
import './App.css';
import { Login } from './Login';
import { Register } from './Register';
import {Home} from './Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentForm: 'Login'
    };
  }
//Switching between forms
  handleFormSwitch = (formName) => {
    if (formName === 'Home') {
      this.setState({ currentForm: 'Home' });
    } else {
      this.setState({ currentForm: formName });
    }
  };

  render() {
    const { currentForm } = this.state;
//Switching beetwen login and register forms
    return (
      <div className="App">
        {currentForm === 'Login' ? (
          <Login onFormSwitch={this.handleFormSwitch} />
        ) : currentForm === 'Register' ? (
          <Register onFormSwitch={this.handleFormSwitch} />
        ) : (
          <Home />
        )}
      </div>
    );
  }
}

export default App;
