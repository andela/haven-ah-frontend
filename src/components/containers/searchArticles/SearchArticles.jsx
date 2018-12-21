import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './searchArticles.scss';
import SearchResultCards from './SearchResultCards';
import { searchRequestAction } from '../../../actions/searchAction';
import bookmarkCheck from '../../../helpers/bookmarkCheck';
import AlertBox from '../alerts/AlertBox';

class SearchArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keywords: '',
      author: '',
      tag: '',
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSearch = (event) => {
    event.preventDefault();
    const { keywords, author, tag } = this.state;
    this.props.searchRequestAction({
      keywords,
      author,
      tag,
    });
  }

  renderSearchResultsCard() {
    return this.props.articles
      && this.props.articles.map((article) => {
        bookmarkCheck(this.props.articles);
        return (<SearchResultCards key={article.id} article={article} />);
      });
  }

  render() {
    const { fetching, error } = this.props;
    return (
      <div>
        {
          error
          && <AlertBox message={error} theme="danger"/>
        }
        <div className="container">
          <div className="columns">
            <div className="column is-1" />
            <div className="column is-10">
              <div className="searchbar">
                <div className="columns">
                  <div className="column">
                    <div>
                      <div className="control control--padding">
                        <input className="input is-large borderless"
                          name="keywords"
                          value={this.state.keywords}
                          onChange={this.handleChange}
                          placeholder="search by keywords" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div>
                      <div className="control">
                        <input className="input is-large borderless"
                          name="author"
                          value={this.state.author}
                          onChange={this.handleChange}
                          data-testid="searchBar"
                          placeholder="search by Author" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="justify-content__start">
                      <div>
                        <div className="control">
                          <input className="input is-large borderless"
                            name="tag"
                            value={this.state.tag}
                            onChange={this.handleChange}
                            data-testid="searchBar"
                            placeholder="search by Tag" type="text" />
                        </div>
                      </div>
                      <div>
                        <button className="button is-large is-rounded
                         search-btn" onClick={this.handleSearch}
                        data-testid="search">
                      Search</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div> <h1 className="title is-3 mb-2 has-text-centered">
                Search Results </h1></div>
                { fetching ? <div className="loading-icon">
                  <i className="fa fa-spinner fa-3x fa-spin "/></div>
                  : this.renderSearchResultsCard() }
              </div>
            </div>
            <div className="column is-1" />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  articles: state.searchArticle.articles,
  fetching: state.searchArticle.fetching,
  error: state.searchArticle.error
});
SearchArticles.propTypes = {
  searchRequestAction: PropTypes.func.isRequired,
  articles: PropTypes.array,
  fetching: PropTypes.bool,
  error: PropTypes.string,
};
SearchArticles.defaultProps = {
  articles: null,
  fetching: false,
  error: ''
};
export default connect(mapStateToProps,
  { searchRequestAction })(SearchArticles);
