import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reportArticle } from '../../../actions/reportArticle';
import { getUsername } from '../../../utilities/auth';
import { validateReport } from '../../../utilities/validateInput';

class ReportArticleModal extends Component {
  state = {
    complaintType: '',
    complaintBody: '',
    errors: {},
    isValid: false,
  }

  handleChange = (event) => {
    const { errors } = this.state;
    this.setState({
      [event.target.name]: event.target.value,
      errors: { ...errors, [event.target.name]: '' },
    });
  }

  submit = (event) => {
    event.preventDefault();
    const { slug } = this.props;
    const errors = validateReport(this.state);
    if (Object.keys(errors).length > 0) {
      this.setState({ errors, isValid: false });
    } else {
      this.props.reportArticle({ slug, complaintBody: this.state });
      this.setState({
        errors: {}, isValid: true, complaintType: '', complaintBody: ''
      });
      const { closeModal } = this.refs;
      setTimeout(() => closeModal.click(), 5000);
    }
  }

  render() {
    const { closeModal, message } = this.props;
    const { isValid, errors } = this.state;

    return (
      <div className="container">
        <div className="modal is-active">
          <div className="modal-background" />
          <div className="modal-card">
            <div className="columns">
              <div className="column is-2" />
              <div className="column is-8">
                <header className="modal-card-head">
                  <p className="modal-card-title" id="comment-modal__title">
                    Report this article
                    <span className="ah-orange"> {getUsername()}
                    </span>
                  </p>
                  <button
                    data-testid="close-modal"
                    ref="closeModal"
                    className="delete is-orange"
                    aria-label="close" onClick={closeModal} />
                </header>
                <section className="modal-card-body">
                  {
                    isValid
                    && message
                    && <p
                      className="has-text-primary is-size-7 has-text-centered"
                      style={{ paddingBottom: 20 }}>
                      {message}</p>
                  }
                  <div className="complaint">
                    <form>
                      <div className="complaint--type">
                        <div className="control">
                          <label className="radio">
                            <input type="radio"
                              name="complaintType"
                              value="Rules Violation"
                              onChange={this.handleChange} />
                            <span className="radio--value">
                              Rules Violation
                            </span>
                          </label>
                        </div>
                        <div className="control">
                          <label className="radio">
                            <input type="radio"
                              name="complaintType"
                              value="Abuse"
                              onChange={this.handleChange} />
                            <span className="radio--value">Abuse</span>
                          </label>
                        </div>
                        <div className="control">
                          <label className="radio">
                            <input type="radio"
                              name="complaintType"
                              value="Plagiarism"
                              onChange={this.handleChange} />
                            <span className="radio--value">Plagiarism</span>
                          </label>
                        </div>
                        <div className="control">
                          <label className="radio">
                            <input type="radio"
                              name="complaintType"
                              value="Others"
                              onChange={this.handleChange} />
                            <span className="radio--value">
                              Other violations
                            </span>
                          </label>
                          {
                            !isValid
                            && errors.complaintType
                            && <p className="has-text-danger is-size-7">
                              {errors.complaintType}
                            </p>
                          }
                        </div>
                      </div>
                      <div className="complaint--form">
                        <div className="control">
                          <textarea
                            className="textarea is-small" rows="2"
                            placeholder="tell us your reason"
                            name="complaintBody"
                            value={this.state.complaintBody}
                            onChange={this.handleChange} />
                        </div>
                        {
                          !isValid
                          && errors.complaintBody
                          && <p className="has-text-danger is-size-7">
                            {errors.complaintBody}
                          </p>
                        }
                        <div className="mt-1">
                          <button
                            className="button is-small btn--outline"
                            onClick={this.submit}>Report
                          </button>
                          <button
                            className="button is-small ml-1 is-orange"
                            onClick={closeModal}>Cancel
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </section>
                <footer className="modal-card-foot" />
              </div>
              <div className="column is-2" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReportArticleModal.propTypes = {
  slug: PropTypes.string.isRequired,
  reportArticle: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  message: PropTypes.string
};

const mapStateToProps = state => ({
  reporting: state.reportArticle.reporting,
  message: state.reportArticle.message,
});

export default connect(mapStateToProps, { reportArticle })(ReportArticleModal);
