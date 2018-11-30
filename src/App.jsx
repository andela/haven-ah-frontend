import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import '../public/styles/App.scss';
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes />
      </Router>
    );
  }
}

export default App;
