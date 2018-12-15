import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  bookmarkArticleAction,
  unbookmarkArticleAction,
} from '../../../actions/bookmarkArticle';

class BookmarkArticle extends Component {
  constructor(props) {
    super(props);

    const { bookmarkFlag } = this.props.article;
    this.state = {
      bookmarkFlag,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    const checkBookmark = nextState.bookmarkFlag === this.state.bookmarkFlag;
    if (!checkBookmark) {
      return true;
    }
    return true;
  }

  handleBookmark = () => {
    const { slug } = this.props.article;
    this.props.bookmarkArticleAction(slug);
    this.setState({
      bookmarkFlag: true,
    });
  }

   handleUnBookmark = (e) => {
     const { id } = e.target.dataset;
     const { slug } = this.props.article;

     this.props.unbookmarkArticleAction(slug, id);
     this.setState({
       bookmarkFlag: false,
     });
   }

   render() {
     const { bookmarkFlag } = this.state;
     const { id } = this.props.article;
     return (
       localStorage.getItem('token')
         ? <span>
           {bookmarkFlag
             ? <i data-testid="bookmark"
               className="fa fa-bookmark fonticons-20"
               data-id={id}
               onClick={this.handleUnBookmark} id={this.props.bookmarkId}/>
             : <i data-testid="bookmark"
               className="fa fa-bookmark-o fonticons-20"
               data-id={id}
               onClick={this.handleBookmark} />}
         </span> : ''
     );
   }
}
const mapStateToProps = state => ({
  bookmark: state.bookmarkArticle.payload,
});
BookmarkArticle.propTypes = {
  bookmarkArticleAction: PropTypes.func.isRequired,
  unbookmarkArticleAction: PropTypes.func.isRequired,
  article: PropTypes.object.isRequired,
  bookmark: PropTypes.object,
  bookmarkId: PropTypes.number,
};
BookmarkArticle.defaultProps = {
  bookmark: {},
};
export default connect(
  mapStateToProps,
  {
    bookmarkArticleAction,
    unbookmarkArticleAction,
  }
)(BookmarkArticle);
