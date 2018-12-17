import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { trendingArticlesAction } from '../../actions/trendingArticlesAction';
import TrendingCard from './TrendingCard';
import './TrendingSection.scss';
import bookmarkCheck from '../../helpers/bookmarkCheck';

class TrendingSection extends Component {
  componentDidMount() {
    this.props.trendingArticlesAction();
  }

  renderTrendingArticle(start, end) {
    const { articles } = this.props;

    return (
      articles.length !== 0
        && articles.slice(start, end).map(article => (
          <TrendingCard key={article.id}
            title={article.title}
            images={article.images}
            description={article.description}
            readtime={article.readtime}
            slug={article.slug}
            authorImage={article.Author.imageUrl}
            authorName={article.Author.username}
            bookmarkFlag={article.bookmarkFlag}
            id={article.id} />
        ))
    );
  }


  render() {
    const { articles } = this.props;
    bookmarkCheck(articles);
    return (
      <section className="section mobile-section">
        <div className="container">
          <div className="justify-space-between mobile-pd">
            <div className="trending-articles">
              <h1 className="title is-2">
                Trending Articles
              </h1>
            </div>
          </div>
          <div className="columns is-variable is-8 mt-3">
            {this.renderTrendingArticle(0, 3)}
          </div>
          <div className="columns is-variable is-8 mt-6">
            {this.renderTrendingArticle(3, 6)}
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.trendingArticles.articles,
  bookmark: state.bookmarkArticle.payload,
});

TrendingSection.propTypes = {
  trendingArticlesAction: PropTypes.func.isRequired,
  articles: PropTypes.array,
  bookmark: PropTypes.object,
};

export default connect(mapStateToProps,
  { trendingArticlesAction })(TrendingSection);
