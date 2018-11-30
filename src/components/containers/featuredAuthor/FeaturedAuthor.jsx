import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './featuredAuthor.scss';
import image from '../../../../public/images/book.jpg';

import {
  fetchFeaturedAuthor,
} from '../../../actions/featuredAuthor';

class FeaturedAuthor extends PureComponent {
  componentDidMount() {
    const { getFeaturedAuthor } = this.props;
    getFeaturedAuthor();
  }

  getData = () => {
    const { data } = this.props;
    let featuredAuthor;
    let followers;
    if (data) {
      ({ featuredAuthor, followers } = data);
    }

    const style = featuredAuthor ? { width: '700px' } : { width: '100%' };
    return { featuredAuthor, followers, style };
  }

  render() {
    const { featuredAuthor, followers, style } = this.getData();

    return (
      <section className="section mobile-section">
        <div className="container mt-6">
          <div className="columns">
            <div className="column is-8">
              <div className="featured-author">
                <div className="justify-content__start">
                  <div className="featured-author__image"
                    style=
                      {
                        {
                          ...style,
                          backgroundImage:
                          `url(${featuredAuthor
                            && featuredAuthor.imageUrl
                            ? featuredAuthor.imageUrl : image})`
                        }
                      }
                  />
                  {
                    featuredAuthor && (
                      <div className="featured-author__details">
                        <h1 className="
                        title is-3 featured-author__details-title p-0">
                          Author of the Week
                        </h1>
                        <hr />
                        <div className="featured-author__details-description">
                          <p className="mb-1 is-size-5 ah-orange
                            has-text-weight-bold"
                          >
                            {
                              `${featuredAuthor.firstName}
                               ${featuredAuthor.lastName}.`
                            }
                          </p>
                          <p>
                            {
                              featuredAuthor.bio
                              && `${featuredAuthor.bio.slice(0, 100)}... `
                            }
                            <span className="is-italic">
                              <Link to="">
                                read more.
                              </Link>
                            </span>
                          </p>
                        </div>
                        <div className="featured-author__details-reactions">
                          <span className="is-pulled-left ah-orange is-size-6">
                            {` ${followers} followers`}
                          </span>
                          <span className="is-pulled-right">
                            {
                              featuredAuthor.facebook && (
                                <span className="ml-1">
                                  <a href={featuredAuthor.facebook}
                                    target="blank">
                                    <i className="fa fa-facebook facebook" />
                                  </a>
                                </span>
                              )}
                            {
                              featuredAuthor.twitter && (
                                <span className="ml-1">
                                  <a
                                    href={featuredAuthor.twitter}
                                    target="blank">
                                    <i className="fa fa-twitter twitter" />
                                  </a>
                                </span>
                              )}
                          </span>
                        </div>
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="start-writing">
                <h1 className="title is-3 ah-orange">
                  You can start writing articles on your favourite topic
                </h1>
                <div className="display-center">
                  <button className="button is-orange is-rounded">
                    Start Writing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

FeaturedAuthor.propTypes = {
  data: PropTypes.object.isRequired,
  getFeaturedAuthor: PropTypes.func.isRequired,
};

const actions = {
  getFeaturedAuthor: fetchFeaturedAuthor
};

const mapStateToProps = state => ({
  fetching: state.featuredAuthor.fetching,
  data: state.featuredAuthor.data,
  error: state.featuredAuthor.error,
});


export default connect(mapStateToProps, actions)(FeaturedAuthor);
