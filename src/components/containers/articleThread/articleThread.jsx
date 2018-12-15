import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import {
  FacebookIcon, FacebookShareButton,
  TwitterIcon, TwitterShareButton,
  WhatsappIcon, WhatsappShareButton,
  EmailIcon, EmailShareButton,
} from 'react-share';
import FollowButton from '../followButton/followButton';
import ReactionButtons from '../reactions/reactionButtons';
import AlertBox from '../alerts/AlertBox';
import CommentSection from '../comments/CommentSection';
import Preloader from './articlePreloader';
import timeFormatter from '../../../helpers/timeFormatter';
import './articleThread.scss';
import {
  fetchArticle,
  clearRedirect,
  getComments,
  postComment,
} from '../../../actions/articleThread';
import BookmarkArticle from '../bookmarkArticle/bookmarkArticle';
import bookmarkCheck from '../../../helpers/bookmarkCheck';

class ArticleThread extends Component {
  componentDidMount() {
    const {
      match: {
        params: {
          slug,
        }
      }
    } = this.props;
    this.props.clearRedirect();
    this.props.fetchArticle(slug);
  }

  shouldComponentUpdate(nextProps) {
    const checkFollowing = nextProps.following === this.props.following;

    if (!checkFollowing) {
      const { slug } = this.props.match.params;
      this.props.fetchArticle(slug);

      return true;
    }
    return true;
  }

  render() {
    const {
      fetchingComments,
      newComment, comments, match: { params: { slug, } },
      getCommentsAction, postCommentAction
    } = this.props;

    let { article } = this.props;

    if (!article) {
      return (
        <Preloader />
      );
    }

    article = bookmarkCheck([article]);
    [article] = article;

    const currentUser = localStorage.getItem('username');
    const isOwner = currentUser === article.Author.username;

    const { images, readtime } = article;
    const date = new Date(article.createdAt);

    const shareUrl = window.location.href;
    const { following, reaction } = this.props;
    return (
      <div>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-2" />
              <div className="column">
                <div className="article--image" style={{
                  backgroundImage:
                    `url(${images
                      ? images[0] : 'url(../../../public/images/sweet.jpeg)'})`
                }} />
                <div className="article--title">
                  <h1 className="title is-1 has-text-centered">
                    {article.title}
                  </h1>
                  <p className="article--description">
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
                {
                  following.error
                  && <AlertBox
                    message={following.error.message} theme="danger"/>
                }
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
                      { isOwner ? null : <FollowButton /> }
                    </div>
                  </div>
                </div>
                <div className="article--paragraph">
                  <p>{ReactHtmlParser(article.body)} </p>
                </div>
                {
                  reaction.error
                  && <AlertBox
                    message={reaction.error.message} theme="danger"/>
                }
                <div className="article--reaction">
                  <div className="justify-space-between">
                    <div className="justify-content__start">
                      <ReactionButtons />
                      <div className="article--reaction__like">
                        <BookmarkArticle article={article} />
                      </div>
                    </div>
                    <div className="is-inline article--social-share">
                      <FacebookShareButton
                        url={shareUrl}
                        quote={article.title}
                        className="article__share-button">
                        <FacebookIcon size={32} round/>
                      </FacebookShareButton>

                      <TwitterShareButton
                        url={shareUrl}
                        title={article.title}
                        className="article__share-button">
                        <TwitterIcon size={32} round />
                      </TwitterShareButton>

                      <WhatsappShareButton
                        url={shareUrl}
                        title={article.title}
                        className="article__share-button">
                        <WhatsappIcon size={32} round />
                      </WhatsappShareButton>

                      <EmailShareButton
                        url={shareUrl}
                        subject={article.title}
                        body={article.body}
                        className="article__share-button">
                        <EmailIcon size={32} round />
                      </EmailShareButton>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-2" />
            </div>
          </div>
        </section>
        <section>
          <CommentSection
            fetching={fetchingComments}
            comments={comments}
            postComment={postCommentAction}
            getComments={getCommentsAction}
            slug={slug}
            newComment={newComment}
          />
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  article: state.articleThread.article,
  following: state.following,
  reaction: state.reaction,
  comments: state.articleThread.comments,
  newComment: state.articleThread.newComment,
  fetchingComments: state.articleThread.fetchingComments
});

ArticleThread.propTypes = {
  article: PropTypes.object,
  fetchArticle: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  clearRedirect: PropTypes.func.isRequired,
  reaction: PropTypes.object,
  following: PropTypes.object,
  getCommentsAction: PropTypes.func,
  postCommentAction: PropTypes.func,
  comments: PropTypes.array,
  newComment: PropTypes.object,
  fetchingComments: PropTypes.bool
};

ArticleThread.defaultProps = {
  reaction: {},
  following: {},
  article: null,
  getCommentsAction: () => { },
  postCommentAction: () => { },
  comments: [],
  newComment: null,
  fetchingComments: false,
};

const actions = {
  fetchArticle,
  clearRedirect,
  getCommentsAction: getComments,
  postCommentAction: postComment,
};

export default connect(mapStateToProps, actions)(ArticleThread);
