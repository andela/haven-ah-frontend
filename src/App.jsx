import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import 'bulma/css/bulma.min.css';
import 'font-awesome/css/font-awesome.min.css';

import '../public/styles/App.scss';
import '../public/styles/responsive.scss';
import store from './store';

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
