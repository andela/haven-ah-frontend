import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './recentArticles.css';
import { recentArticlesAction } from '../../../actions/recentArticlesAction';
import RecentArticleCard from './recentArticlesCard';
import bookmarkCheck from '../../../helpers/bookmarkCheck';

class RecentArticles extends Component {
  componentDidMount() {
    this.props.recentArticlesAction();
  }

  renderArticleCard(start, end) {
    return this.props.articles
      && this.props.articles.slice(start, end).map((article) => {
        bookmarkCheck(this.props.articles);
        return (<RecentArticleCard key={article.id} article={article} />);
      });
  }

  render() {
    return (
      <section className="section mt-4 mobile-section">
        <div className="container">
          <div className="justify-space-between">
            <div className="trending-articles">
              <h1 className="title is-2 mb-3">
                Recently Published Articles
              </h1>
            </div>
          </div>
          <div className = "columns is-variable is-8 mt-3">
            {this.renderArticleCard(0, 3)}
          </div>
          <div className = "columns is-variable is-8 mt-3">
            {this.renderArticleCard(3, 6)}
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.recentArticles.articles,
  bookmark: state.bookmarkArticle.payload,
});

RecentArticles.propTypes = {
  recentArticlesAction: PropTypes.func.isRequired,
  articles: PropTypes.array,
  bookmark: PropTypes.object,
};
RecentArticles.defaultProps = {
  articles: [],
  bookmark: {}
};

export default connect(mapStateToProps,
  { recentArticlesAction })(RecentArticles);
