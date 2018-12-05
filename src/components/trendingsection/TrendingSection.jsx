import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { trendingArticlesAction } from '../../actions/trendingArticlesAction';
import TrendingCard from './TrendingCard';
import './TrendingSection.scss';

class TrendingSection extends PureComponent {
  componentDidMount() {
    this.props.trendingArticlesAction();
  }

  render() {
    const { articles } = this.props;
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
            {articles.length !== 0
                && articles.slice(0, 3).map(article => (
                  <TrendingCard key={article.id}
                    title={article.title}
                    images={article.images}
                    description={article.description}
                    readtime={article.readtime} />
                ))
            }


          </div>
          <div className="columns is-variable is-8 mt-6">
            {articles.length !== 0
              && articles.slice(3, 6).map(article => (
                <TrendingCard key={article.id}
                  title={article.title}
                  images={article.images}
                  description={article.description}
                  readtime={article.readtime} />
              ))
            }


          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.trendingArticles.articles,
});

TrendingSection.propTypes = {
  trendingArticlesAction: PropTypes.func.isRequired,
  articles: PropTypes.array.isRequired,
};

export default connect(mapStateToProps,
  { trendingArticlesAction })(TrendingSection);
