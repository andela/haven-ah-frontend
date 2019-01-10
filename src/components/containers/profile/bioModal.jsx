import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { getToken } from '../../../utilities/auth';

class BioModal extends Component {
    state = {
      imgurl: '',
      isUploading: false,
      error: {}
    }

    closeModal = (event) => {
      this.props.hideModal(event);
    }

    handleChange = (event) => {
      event.preventDefault();
      this.setState({
        isUploading: true
      });
      const image = event.target.files[0];
      const formData = new FormData();
      formData.append('file', image);
      formData.append('upload_preset', 'default_preset');
      axios({
        method: 'post',
        url: 'https://api.cloudinary.com/v1_1/teamhaven/upload',
        data: formData,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
      })
        .then((response) => {
          this.setState({
            imgurl: response.data.secure_url,
            isUploading: false
          });
        })
        .catch((error) => {
          this.setState({
            isUploading: false,
            error
          });
        });
    }

    handleImageUpload = (event) => {
      event.preventDefault();
      const { imgurl } = this.state;
      const { username, updateHandler, hideModal } = this.props;
      if (imgurl === '') {
        return false;
      }
      updateHandler(imgurl);
      axios.put(`${process.env.API_URL}/users/${username}`, {
        image: imgurl
      }, {
        headers: {
          'x-access-token': getToken()
        }
      });
      hideModal();
    }

    render() {
      const { displayModal } = this.props;
      const { isUploading } = this.state;
      return (
        <div className="columns">
          <div className="column" />
          <div className="column">
            <div className="modal is-active">
              <div className="modal-background" />
              <div className="modal-card">
                <header className="modal-card-head">
                  <p className="modal-card-title">
                    Upload your image
                  </p>
                  <button
                    data-testid="close-modal"
                    className="delete is-dark"
                    aria-label="close" onClick={this.closeModal} />
                </header>
                <section className="modal-card-body"
                  displayModal={displayModal}>
                  <form>
                    <div className="file is-dark is-boxed">
                      <label className="file-label">
                        <input
                          onChange={this.handleChange}
                          ref="fileinput" className="file-input"
                          type="file" name="resume" />
                        <span className="file-cta">
                          <span className="file-icon">
                            <i className="fa fa-upload" />
                          </span>
                          <span className="file-label">
                                Choose a file…
                          </span>
                        </span>
                      </label>
                    </div>
                  </form>
                </section>
                <footer className="modal-card-foot">
                  <button onClick={this.handleImageUpload}
                    className="button is-primary">
                    {isUploading ? 'Uploading image ...' : 'Save your image'}
                  </button>
                </footer>
              </div>
            </div>
          </div>
          <div className="column" />
        </div>

      );
    }
}

BioModal.propTypes = {
  displayModal: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  updateHandler: PropTypes.func.isRequired
};

export default BioModal;
