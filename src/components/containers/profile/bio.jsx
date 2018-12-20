import React from 'react';
import PropTypes from 'prop-types';

const Bio = ({ profile }) => {
  return (
    <div className="columns">
      <div className="column">
        <div className="bio-profile">
          <div className="bio-profile__form">
            <form>
              <div className="field">
                <div className="control">
                  <input className="input" type="text"
                    placeholder="First Name"
                    value={profile.firstName} readOnly />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input className="input"
                    type="text"
                    placeholder="Last name"
                    value={profile.lastName}
                    readOnly />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input className="input" type="text"
                    placeholder="Username"
                    value={profile.username} readOnly />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input className="input" type="text"
                    placeholder="Email"
                    value={profile.email} readOnly />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <textarea className="textarea" readOnly>
                    {profile.bio}
                  </textarea>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="column" />
      <div className="column" />
    </div>
  );
};

Bio.propTypes = {
  profile: PropTypes.object.isRequired
};

export default Bio;
