import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updatePasswordRequest } from '../../../actions/passwordReset';
import AlertBox from '../alerts/AlertBox';

class UpdatePassword extends PureComponent {
    state = {
      password: '',
      confirmpassword: '',
      errors: ''
    };

    handleChange = (event) => {
      event.preventDefault();
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    clearErrors = () => {
      return setTimeout(() => {
        this.setState({
          errors: ''
        });
      }, 3000);
    }

    handleSubmit = (event) => {
      event.preventDefault();
      const { password, confirmpassword } = this.state;
      if (password !== confirmpassword) {
        this.setState({
          errors: 'Passwords must match'
        });
        return this.clearErrors();
      }
      if (password.length < 8) {
        this.setState({
          errors: 'Password must be atleast 8 characters long'
        });
        return this.clearErrors();
      }
      this.props.updatePasswordRequest(password);
    }

    render() {
      const { password, confirmpassword, errors } = this.state;
      const { updateSuccess } = this.props;
      if (updateSuccess) {
        return (<Redirect to="/login" />);
      }

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
                  <p className="has-text-centered">Enter your new password</p>
                  <div className="line" />
                  <form className="form" onSubmit={this.handleSubmit}>
                    <div className="field">
                      <div className="control has-icons-left">
                        <input
                          data-testid="password"
                          className="input is-medium"
                          name="password"
                          type="password"
                          placeholder="Password"
                          onChange={this.handleChange}
                          value={password}
                          required
                        />
                        <span className="icon is-small is-left">
                          <i className="fa fa-envelope" />
                        </span>
                      </div>
                    </div>

                    <div className="field">
                      <div className="control has-icons-left">
                        <input
                          data-testid="confirmpassword"
                          className="input is-medium"
                          name="confirmpassword"
                          type="password"
                          placeholder="Confirm password"
                          onChange={this.handleChange}
                          value={confirmpassword}
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
                          Update password
                        </button>
                      </div>
                    </div>
                    {
                      errors && <AlertBox
                        message={errors}
                        theme="danger" />
                    }
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

const mapStateToProps = state => ({
  updateSuccess: state.resetPassword.updateSuccess
});

UpdatePassword.propTypes = {
  updateSuccess: PropTypes.bool.isRequired,
  updatePasswordRequest: PropTypes.func.isRequired
};

export default
connect(mapStateToProps, {
  updatePasswordRequest
})(UpdatePassword);
