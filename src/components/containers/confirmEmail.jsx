import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { setToken } from '../../utilities/auth';

class confirmEmail extends Component {
  componentDidMount() {
    const { location } = this.props;
    const token = location.search.split('=')[1];
    axios.get(`${process.env.API_URL}/auth/confirm/${token}`)
      .then((response) => {
        setToken(response.data.data.token);
      })
      .catch(error => error);
  }

  render() {
    return (
      <Redirect to="/" />
    );
  }
}

confirmEmail.propTypes = {
  location: PropTypes.object.isRequired,
};

export default confirmEmail;
