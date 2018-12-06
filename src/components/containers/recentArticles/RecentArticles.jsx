import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './recentArticles.css';
import { recentArticlesAction } from '../../../actions/recentArticlesAction';
import RecentArticleCard from './recentArticlesCard';

class RecentArticles extends Component {
  componentDidMount() {
    this.props.recentArticlesAction();
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
          < div className = "columns is-variable is-8 mt-3">
            {
              this.props.articles
            && this.props.articles.slice(0, 3).map((article) => {
              return (<RecentArticleCard key={article.id} article={article} />);
            })
            }
          </div>
          < div className = "columns is-variable is-8 mt-3">
            {
              this.props.articles
            && this.props.articles.slice(3, 6).map((article) => {
              return (<RecentArticleCard key={article.id} article={article} />);
            })
            }
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.recentArticles.articles,
});

RecentArticles.propTypes = {
  recentArticlesAction: PropTypes.func.isRequired,
  articles: PropTypes.array,
};
RecentArticles.defaultProps = {
  articles: [],
};

export default connect(mapStateToProps,
  { recentArticlesAction })(RecentArticles);
