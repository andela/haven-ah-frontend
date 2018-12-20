import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { registerRequestAction } from '../../actions/registerAction';
import AlertBox from '../containers/alerts/AlertBox';
import SocialAuth from '../containers/auth/SocialAuth';

class RegisterPage extends Component {
    state = {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
    }

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      });
    }

  clearInputs = () => {
    this.setState({
      ...this.state,
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: ''
    });
  }

    handleSubmit = (e) => {
      e.preventDefault();
      const { registerAction } = this.props;
      registerAction(this.state);
      this.clearInputs();
    }

    render() {
      const { signingUp, success, error } = this.props;
      return (
        <div className="layout">
          {
            error
            && <AlertBox className="danger" message={error} />
          }
          {
            success
            && <AlertBox className="success" message={success.split('.')[1]} />
          }
          <div className="authentication">
            <div className="container">
              <div className="columns">
                <div className="column is-7">
                  <div className="banner_img" />
                </div>
                <div className="column is-4">
                  <div className="form__card">
                    <h1 className="subtitle is-3 has-text-centered">
                        Welcome to
                      <p className="title">
                        <Link to="/"> Authors
                          <span className="ah-orange">Haven</span>
                        </Link>
                      </p>
                    </h1>
                    <p className="has-text-centered">
                  Lets set you up so you could start writing awesome articles
                    </p>
                    <SocialAuth authType={'Sign up'} />
                    <div className="line" />
                    <form className="form" onSubmit={this.handleSubmit}>
                      <div className="field">
                        <div className="control has-icons-left">
                          <input className="input is-medium"
                            type="text"
                            placeholder="First Name" name="firstName"
                            value={this.state.firstName}
                            onChange={this.handleChange} />
                          <span className="icon is-small is-left">
                            <i className="fa fa-user-circle" />
                          </span>
                        </div>
                      </div>
                      <div className="field">
                        <div className="control has-icons-left">
                          <input className="input is-medium"
                            type="text"
                            placeholder="Last Name" name="lastName"
                            value={this.state.lastName}
                            onChange={this.handleChange} />
                          <span className="icon is-small is-left">
                            <i className="fa fa-user" />
                          </span>
                        </div>
                      </div>
                      <div className="field">
                        <div className="control has-icons-left">
                          <input className="input is-medium"
                            type="email"
                            placeholder="Email" name="email"
                            value={this.state.email}
                            onChange={this.handleChange} />
                          <span className="icon is-small is-left">
                            <i className="fa fa-envelope" />
                          </span>
                        </div>
                      </div>
                      <div className="field">
                        <div className="control has-icons-left">
                          <input className="input is-medium"
                            type="text"
                            placeholder="Username" name="username"
                            value={this.state.username}
                            onChange={this.handleChange} />
                          <span className="icon is-small is-left">
                            <i className="fa fa-male" />
                          </span>
                        </div>
                      </div>
                      <div className="field">
                        <div className="control has-icons-left">
                          <input className="input is-medium"
                            type="password"
                            placeholder="Password" name="password"
                            value={this.state.password}
                            onChange={this.handleChange} />
                          <span className="icon is-small is-left">
                            <i className="fa fa-lock" />
                          </span>
                        </div>
                      </div>
                      <div className="field mt-1">
                        <div className="control">
                          <button className="button
                        is-rounded
                        is-medium is-orange is-fullwidth">
                            {signingUp
                              && <i className="fa fa-spin fa-spinner mr-1" />}
                           Proceed
                          </button>
                        </div>
                      </div>
                    </form>
                    <p className="mt-1 has-text-centered">
                       Already Signed Up?  <span>
                        <Link
                          to="/login"
                          className="ah-orange">Sign In here</Link>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="column is-1" />
              </div>
            </div>
          </div>
        </div>
      );
    }
}
const mapStateToProps = state => ({
  error: state.registerUser.error,
  success: state.registerUser.success,
  payload: state.registerUser.payload,
  signingUp: state.registerUser.signingUp
});

const mapDispatchToProps = {
  registerAction: registerRequestAction
};

RegisterPage.propTypes = {
  registerAction: PropTypes.func.isRequired,
  signingUp: PropTypes.bool.isRequired,
  success: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
