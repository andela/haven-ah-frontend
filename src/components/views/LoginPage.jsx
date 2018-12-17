import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginRequestAction } from '../../actions/loginActions';
import validateSignIn from '../../utilities/validateInput';
import { getToken } from '../../utilities/auth';
import AlertBox from '../containers/alerts/AlertBox';
import SocialAuth from '../containers/auth/SocialAuth';

import '../../../public/styles/App.scss';

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {},
  }

  componentDidMount() {
    this.focusInput.current.focus();
  }

  focusInput = React.createRef();

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      errors: { ...this.state.errors, [event.target.name]: '' }
    });
  }

  clearInputs = () => {
    this.setState({ email: '', password: '', errors: {} });
  }

  submit = (event) => {
    event.preventDefault();
    const { errors, ...userInput } = this.state;

    const error = validateSignIn(userInput);
    if (Object.keys(error).length > 0) {
      this.setState({ errors: error });
    } else {
      const { loginAction } = this.props;
      loginAction(userInput);
      setTimeout(this.clearInputs, 1000);
    }
  }

  render() {
    const { email, password, errors } = this.state;
    const { loggingIn, error, token } = this.props;

    if (getToken()) {
      return (<Redirect to="/" />);
    }

    return (
      <div className="layout">
        {
          error
          && <AlertBox message={error} theme="danger"/>
        }
        {
          token
          && <AlertBox message="Login successful" theme="success" />
        }
        <div className="authentication">
          <div className="container">
            <div className="columns">
              <div className="column is-7">
                <div className="login-banner_img" />
              </div>
              <div className="column is-4">
                <div className="form__card">
                  <h1 className="title is-3 has-text-centered">
                    Welcome back to Authors
                    <span className="ah-orange">Haven</span>
                  </h1>
                  <p className="has-text-centered">fill in your details</p>

                  <SocialAuth authType={'Sign in'} />
                  <div className="line" />
                  <form className="form" onSubmit={this.submit}>
                    <div className="field">
                      <div className="control has-icons-left">
                        <input
                          className="input is-medium"
                          name="email"
                          value={email}
                          onChange={this.handleInputChange}
                          type="email"
                          placeholder="Email"
                          ref={this.focusInput}
                          required
                        />
                        <span className="icon is-small is-left">
                          <i className="fa fa-envelope" />
                        </span>
                      </div>
                      {
                        errors
                        && errors.email
                        && <p className="is-size-7 has-text-danger">
                          {errors.email}
                        </p>
                      }
                    </div>

                    <div className="field">
                      <div className="control has-icons-left">
                        <input
                          className="input is-medium"
                          name="password"
                          value={password}
                          onChange={this.handleInputChange}
                          type="password"
                          placeholder="Password" required
                        />
                        <span className="icon is-small is-left">
                          <i className="fa fa-lock" />
                        </span>
                      </div>
                      {
                        errors
                        && errors.password
                        && <p className="is-size-7 has-text-danger">
                          {errors.password}
                        </p>
                      }
                    </div>

                    <div className="field mt-1">
                      <div className="control">
                        <button
                          className="button
                          is-rounded is-medium is-orange is-fullwidth">
                          {
                            loggingIn
                            && <i className="fa fa-spin fa-spinner mr-1" />
                          }
                          Sign In
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="mt-1 has-text-centered">
                    Not yet Signed Up?
                    <span>
                      <Link to="/signup"> Sign Up here</Link>
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

Login.propTypes = {
  loggingIn: PropTypes.bool.isRequired,
  loginAction: PropTypes.func.isRequired,
  token: PropTypes.string,
  error: PropTypes.string
};

Login.defaultProps = {
  token: '',
  error: ''
};

const mapStateToProps = (state) => {
  const {
    loggingIn, error, token, payload
  } = state.loginUser;

  return {
    loggingIn, error, token, payload
  };
};

const mapDispatchToProps = {
  loginAction: loginRequestAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
