import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bulma/css/bulma.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Routes from './routes';
import store from './store';
import '../public/styles/App.scss';
import '../public/styles/responsive.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    );
  }
}

export default App;
