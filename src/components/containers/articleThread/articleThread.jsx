import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Preloader from './articlePreloader';
import './articleThread.scss';
import { fetchArticle } from '../../../actions/articleThread';
import timeFormatter from '../../../helpers/timeFormatter';

class ArticleThread extends Component {
  componentDidMount() {
    const {
      match: {
        params: {
          slug,
        }
      }
    } = this.props;
    this.props.fetchArticle(slug);
  }

  render() {
    const { article } = this.props;
    if (!article) {
      return (
        <Preloader />
      );
    }
    const { images, readtime } = article;
    const date = new Date(article.createdAt);
    return (
      <div>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-2" />
              <div className="column">
                <div className="article--image" style={{
                  backgroundImage:
`url(${images ? images[0] : 'url(../../../public/images/sweet.jpeg)'})`
                }} />
                <div className="article--title">
                  <h1 className="title is-1 has-text-centered">
                    {article.title}
                  </h1>
                  <p className="subtitle">
                    {article.description}
                  </p>
                  <div className="article--details">
                    <p className="is-inline-block article--details__time">
                      {date.toLocaleDateString()}
                    </p>
                    <p
                      className={`
                      is-inline-block article--details__readtime
                      article--details__time is-small`
                      }>
                      {timeFormatter(readtime)}
                    </p>
                    <div className="article--tags">
                      <div className="justify-content__start">
                        {article.tags.map((tag, index) => {
                          return (
                            <span key={index} className="article--tags__item">
                              {tag}
                            </span>
                          );
                        })
                        }
                      </div>
                    </div>
                  </div>
                </div>

                <div className="article--author__details">
                  <div className="justify-content__start">
                    <div className="article--author__details-image">
                      <i className="fa fa-user-circle fa-4x" />
                    </div>
                    <div className="article--author__details-name">
                      <span>
                        {article.Author.firstName} {article.Author.lastName}
                      </span>
                    </div>
                    <div className="article--author__details-follow">
                      <button
                        className="button is-normal article--button__follow"
                      >
                        Follow
                      </button>
                    </div>
                  </div>
                </div>
                <div className="article--paragraph">
                  <p>{article.body} </p>
                </div>
                <div className="article--reaction">
                  <div className="justify-content__start">
                    <div className="article--reaction__love">
                      <i className="fa fa-heart" />
                      <span className="article--reaction__love-count">
                            233
                      </span>
                    </div>
                    <div className="article--reaction__like">
                      <i className="fa fa-thumbs-up" />
                      <span className="article--reaction__like-count">
                      245
                      </span>
                    </div>
                    <div className="article--reaction__like">
                      <span className="article--reaction__like-count">
                        <i className="fa fa-bookmark fa-2x" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-2" />
            </div>
            <div className="columns comments">
              <div className="column is-2" />
              <div className="column">
                <button className="button is-light is-medium is-fullwidth">
                Load Comments...
                </button>
              </div>
              <div className="column is-2" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  article: state.articleThread.article,
});

ArticleThread.propTypes = {
  article: PropTypes.object,
  fetchArticle: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { fetchArticle })(ArticleThread);
