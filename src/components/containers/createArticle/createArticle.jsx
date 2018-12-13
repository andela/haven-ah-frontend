import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Editor } from '@tinymce/tinymce-react';
import { createArticleRequest } from '../../../actions/createArticle';
import AlertBox from '../alerts/AlertBox';
import articleValidator from '../../../utilities/validateArticle';
import { getToken } from '../../../utilities/auth';
import './createArticle.scss';

class CreateArticle extends Component {
  constructor(props) {
    super(props);
    this.uploadedImages = [];
    this.state = {
      title: '',
      description: '',
      body: '',
      tags: [],
      errors: null
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleEditorChange = (event) => {
    this.refs.preview.innerHTML = event.target.getContent();
    this.setState({
      body: event.target.getContent()
    });
  }

  handleClick = () => {
    this.refs.preview.classList.toggle('hidden');
    this.refs.tinymce.classList.toggle('hidden');
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      const { tags } = this.state;
      if (tags.includes(event.target.value.trim())) {
        this.setState({
          errors: 'You already added this tag'
        });
        setTimeout(this.clearError, 2000);
        return false;
      }
      if (tags.length > 2) {
        this.setState({
          errors: 'Tag limit reached'
        });
        setTimeout(this.clearError, 2000);
        return false;
      }
      tags.push(event.target.value.split(' ').join('-'));
      this.setState({
        tags
      });
      event.target.value = '';
    }
  }

  removeTag = (event) => {
    event.preventDefault();
    const tagToRemove = event.target.getAttribute('tagname');
    let { tags } = this.state;
    tags = tags.filter(tag => tag !== tagToRemove);
    this.setState({
      tags
    });
  }

  clearError = () => {
    this.setState({ errors: null });
  }

  handleSubmit = () => {
    const { errors, ...userInput } = this.state;
    const error = articleValidator(userInput);
    if (error) {
      this.setState({
        errors: error
      });
      setTimeout(this.clearError, 5000);
      return false;
    }
    const payload = {
      title: userInput.title,
      body: userInput.body,
      description: userInput.description,
      images: this.uploadedImages.join(','),
      tags: userInput.tags.join(' '),
    };
    this.props.createArticleRequest(payload);
  }

  render() {
    const { tags, errors } = this.state;
    const { slug } = this.props;
    if (!getToken()) {
      return (<Redirect to="/signup" />);
    }
    if (slug) {
      return (<Redirect to={`/articles/${slug}`} />);
    }
    return (
      <div className="editor">
        {
          errors
          && <AlertBox message={errors} theme="danger"/>
        }
        <div className="editor__author-details">
          <div>
            <i className="fa fa-user-circle fa-3x" />
            <div className="editor__buttons-container is-pulled-right">
              <button
                className="button editor__preview-button"
                onClick={this.handleClick}
              >
                Preview
              </button>
              <button
                className="button editor__publish-button"
                onClick={this.handleSubmit}
              >
                Publish
              </button>
            </div>
          </div>
        </div>
        <div className="editor__article-title">
          <input
            name="title"
            className="input is-large"
            type="text"
            placeholder="Enter title ..."
            onChange={this.handleChange}
            value={this.state.title}
          />
        </div>
        <div ref="tinymce">
          <Editor
            apiKey="62f09f1tcs6q656hhs7m255ss4cfsorbja94l2qwga06zjj9"
            initialValue="<p>Start creating awesome articles ... </p>"
            init={{
              plugins: 'link image code',
              toolbar: `
              undo redo | bold italic |
              alignleft aligncenter alignright | code
              `,
              height: 400,
              resize: true,
              paste_data_images: true,
              inline: true,
              images_upload_handler: (blobInfo, success, failure) => {
                const formData = new FormData();
                formData.append('upload_preset', 'default_preset');
                formData.append('file', blobInfo.blob(), blobInfo.filename());
                axios({
                  method: 'post',
                  url: 'https://api.cloudinary.com/v1_1/teamhaven/upload',
                  data: formData,
                  config: { headers: { 'Content-Type': 'multipart/form-data' } }
                })
                  .then((response) => {
                    this.uploadedImages.push(response.data.secure_url);
                    success(response.data.secure_url);
                  })
                  .catch((error) => {
                    failure(error);
                  });
              }
            }}
            onChange={this.handleEditorChange}
          />
          <div className="editor__container">
            <div className="editor__description">
              <div className="column is-full">
                <label>Add a description</label>
                <input
                  name="description"
                  className="input"
                  type="text"
                  placeholder="Give a short description ..."
                  onChange={this.handleChange}
                />
              </div>
              <div className="tags">
                <div className="tags__container column is-one-fifth">
                  <label>Tags/Keywords</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="Add tags ..."
                    onKeyPress={this.handleKeyPress}
                  />
                </div>
                <div
                  ref="taglist"
                  className="tags__list column is-pulled-right is-half"
                >
                  {tags.map((tag, i) => {
                    return (
                      <div className="tag__tag-item is-pulled-left" key={i}>
                        {tag}
                        <div
                          className={`
                            tag__tag-remove tag__tooltip is-pulled-right
                          `}
                          tagname={tag}
                          onClick={this.removeTag}
                        >
                          &times;
                          <span className="tooltiptext">Remove!</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="editor__preview hidden" ref="preview" />
      </div>
    );
  }
}

CreateArticle.propTypes = {
  createArticleRequest: PropTypes.func.isRequired,
  slug: PropTypes.string
};

CreateArticle.defaultProps = {
  slug: null
};

const mapStateToProps = state => ({
  slug: state.createArticle.slug,
});

export default connect(mapStateToProps, {
  createArticleRequest
})(CreateArticle);
