import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { editProfileAction } from '../../../actions/userProfileAction';

class Bio extends Component {
  state = {
    firstName: '',
    lastName: '',
    bio: '',
    readOnly: true
  }

  componentDidMount() {
    this.setValue();
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  changeState = () => {
    const { readOnly } = this.state;
    this.setState({
      readOnly: !readOnly
    });
  }

  handleClick = () => {
    if (this.state.readOnly) {
      this.changeState();
    } else {
      const {
        match: {
          params: {
            username
          }
        }
      } = this.props;
      const { readOnly, ...userData } = this.state;
      this.props.editProfileAction(username, userData);
      this.changeState();
    }
  }

  setValue = () => {
    const { profile } = this.props;
    const data = {
      firstName: profile.firstName,
      lastName: profile.lastName,
      bio: profile.bio
    };

    this.setState({ ...data });
  }

  render() {
    const {
      readOnly, firstName, lastName, bio
    } = this.state;
    const { profile } = this.props;
    return (
      <div className="columns">
        <div className="column">
          <div className="bio-profile">
            <div className="bio-profile__form">
              <form onSubmit={this.handleSubmit}>
                <div className="field">
                  <div className="control">
                    <input className="input"
                      onChange={this.handleChange} type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={firstName}
                      readOnly={readOnly} />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input className="input" onChange={this.handleChange}
                      type="text" name="lastName"
                      placeholder="Last name"
                      value={lastName}
                      readOnly={readOnly} />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input className="input"
                      onChange={this.handleChange}
                      type="text"
                      placeholder="Username" name="username"
                      value={profile.username} readOnly disabled />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input className="input" name="email"
                      onChange={this.handleChange} type="text"
                      placeholder="Email"
                      value={profile.email} readOnly disabled />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <textarea className="textarea" name="bio"
                      onChange={this.handleChange} value={bio}
                      readOnly={readOnly} />
                  </div>
                </div>
              </form>
              <button className="button is-success mt-2"
                onClick={this.handleClick}>
                {readOnly ? 'Edit Profile' : 'Save'}
              </button>
            </div>
          </div>
        </div>
        <div className="column" />
        <div className="column" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.userProfile.profile,
});
Bio.propTypes = {
  profile: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  editProfileAction: PropTypes.func.isRequired
};

Bio.defaultProps = {
  match: {},
  profile: {},
};

export default connect(mapStateToProps,
  { editProfileAction })(Bio);
