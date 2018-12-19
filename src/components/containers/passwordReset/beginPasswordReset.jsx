import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { passwordResetRequest } from '../../../actions/passwordReset';
import AlertBox from '../alerts/AlertBox';

class BeginPasswordReset extends PureComponent {
    state = {
      email: ''
    };

    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = (event) => {
      event.preventDefault();
      const { email } = this.state;
      this.props.passwordResetRequest(email);
    }

    render() {
      const { email } = this.state;
      const { mailSuccess } = this.props;
      return (
        <div className="authentication">
          <div className="container">
            <div className="columns">
              <div className="column is-7">
                <div className="login-banner_img" />
              </div>
              <div className="column is-4">
                <div className="form__card">
                  <h1 className="title is-3 has-text-centered">
                    Authors
                    <span className="ah-orange">Haven</span>
                  </h1>
                  <p className="has-text-centered">Enter your email</p>
                  <div className="line" />
                  <form className="form" onSubmit={this.handleSubmit}>
                    <div className="field">
                      <div className="control has-icons-left">
                        <input
                          data-testid="email"
                          className="input is-medium"
                          name="email"
                          type="email"
                          placeholder="Email"
                          onChange={this.handleChange}
                          value={email}
                          required
                        />
                        <span className="icon is-small is-left">
                          <i className="fa fa-envelope" />
                        </span>
                      </div>
                    </div>

                    <div className="field mt-1">
                      <div className="control">
                        <button
                          className="button
                          is-rounded is-medium is-orange is-fullwidth">
                          Retrieve account
                        </button>
                      </div>
                    </div>
                    {
                      mailSuccess
                      && <AlertBox
                        message={'A mail has been sent to you'}
                        theme="success" />
                    }
                  </form>
                  <p className="mt-1 has-text-centered">
                    Back to
                    <span>
                      <Link to="/login"> Sign In page</Link>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

const mapStateToProps = state => ({
  mailSuccess: state.resetPassword.emailSuccess
});

BeginPasswordReset.propTypes = {
  mailSuccess: PropTypes.bool.isRequired,
  passwordResetRequest: PropTypes.func.isRequired
};

export default
connect(mapStateToProps, {
  passwordResetRequest
})(BeginPasswordReset);
