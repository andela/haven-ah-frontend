import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../containers/navbar/navbar';
import {
  userProfileAction,
  userBookmarksRequest
} from '../../actions/userProfileAction';
import Bio from '../containers/profile/bio';
import Bookmarks from '../containers/profile/bookmarks';
import defaultImage from '../../../public/images/empty.jpeg';
import { isLoggedIn } from '../../utilities/auth';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBio: true,
      isBookmarks: false,
      isArticles: false
    };
  }

  componentDidMount() {
    const {
      match: {
        params: {
          username
        }
      }
    } = this.props;
    this.props.userProfileAction(username);
    this.props.userBookmarksRequest(username);
  }

  selectBio = () => {
    this.setState({
      isBio: true,
      isBookmarks: false,
      isArticles: false
    });
  }

  selectBookmarks = () => {
    this.setState({
      isBio: false,
      isBookmarks: true,
      isArticles: false
    });
  }

  render() {
    const { profile, bookmarks } = this.props;
    const { isBio, isBookmarks } = this.state;
    return (
      < div className="layout" >
        <Navbar isLoggedIn={isLoggedIn()} />
        {profile
          && <div>
            <section className="section mt-4">
              <div className="container">
                <div className="profilebox">
                  <div className="columns">
                    <div className="column">
                      <div className="profilebox-user">
                        <div className="justify-content__start">
                          <div className="profilebox-user__image-container">
                            <img className="profilebox-user__image"
                              src={profile.imageUrl
                                ? profile.imageUrl : defaultImage} />
                          </div>
                          <div className="profilebox-user__details">
                            <div className="profilebox-user__name">
                              <span>
                                {profile.firstName} - {profile.lastName}
                              </span>
                            </div>
                            <div className="profilebox-username">
                              <span>{profile.username}</span>
                            </div>
                            <div className="profilebox-email">
                              <span>{profile.email}</span>
                            </div>
                            <div className="justify-space-between mt-1">
                              <div
                                className="profilebox-user__socials-facebook">
                                <i className="fa fa-facebook-square" />
                              </div>
                              <div className="profilebox-user__socials-twitter">
                                <i className="fa fa-twitter" />
                              </div>
                              <div className="profilebox-user__socials-google">
                                <i className="fa fa-google" />
                              </div>

                            </div>
                          </div>
                        </div>
                        <p className="profilebox-user__bio">
                          {profile.bio}
                        </p>
                      </div>
                    </div>
                    <div className="column" />
                    <div className="column">
                      <div className="profilebox-users">
                        <div className="profilebox-user__followers">
                          <span>FOLLOWERS {profile.followers
                          && profile.followers.length > 0
                            ? profile.followers.length : '0'}
                          </span>
                        </div>
                        <div className="profilebox-user__following">
                          <span>FOLLOWING {profile.followings
                          && profile.followings.length > 0
                            ? profile.followings.length : '0'}
                          </span>
                        </div>
                        <div className="profilebox-user__followers-btn">
                          <button className="button is-success is-outlined">
                            follow
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section">
              <div className="container">
                <div className="profile-tabs">
                  <div className="tabs is-medium">
                    <ul>
                      <li
                        className={isBio ? 'is-active' : ''}
                        onClick={this.selectBio}
                      ><a>Bio</a></li>
                      <li><a>Articles</a></li>
                      <li
                        className={isBookmarks ? 'is-active' : ''}
                        onClick={this.selectBookmarks}
                      ><a>Bookmarks</a></li>
                    </ul>
                  </div>
                  <div className="tabs-content">
                    <div className="bio">
                      {isBio ? <Bio profile={profile} /> : null}
                      {
                        isBookmarks
                          ? <div className = "columns is-variable is-8 mt-3">
                            <Bookmarks bookmarks={bookmarks} />
                          </div>
                          : null}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        }
      </div >
    );
  }
}

const mapStateToProps = state => ({
  profile: state.userProfile.profile,
  bookmarks: state.userProfile.bookmarks,
});

ProfilePage.propTypes = {
  userProfileAction: PropTypes.func.isRequired,
  userBookmarksRequest: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  profile: PropTypes.object,
  bookmarks: PropTypes.array
};

export default connect(mapStateToProps,
  { userProfileAction, userBookmarksRequest })(ProfilePage);
