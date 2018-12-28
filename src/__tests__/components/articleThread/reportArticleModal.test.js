import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import ReportArticleModal from
  '../../../components/containers/articleThread/reportArticleModal';
import store from '../../testUtilities/store';
import { reportArticle } from '../../testUtilities/mockData';

afterEach(cleanup);

const reportArticleStore = store(reportArticle);

describe('Report article modal component', () => {
  const closeModal = jest.fn();

  it('should render without crashing', () => {
    render(
      <ReportArticleModal store={reportArticleStore}
        slug="slug"
        closeModal={closeModal} />
    );
  });

  it('should submit report form', () => {
    const { getByPlaceholderText, getByText, getByLabelText } = render(
      <ReportArticleModal store={reportArticleStore}
        slug="slug"
        closeModal={closeModal} />
    );

    const complaintInput = getByPlaceholderText('tell us your reason');
    const inputNode = getByLabelText('Abuse', { selector: 'input' });
    const submitBtn = getByText('Report');

    fireEvent.change(complaintInput, { target: { value: 'Sample complaint' } });
    fireEvent.click(inputNode);
    fireEvent.click(submitBtn);
    expect(inputNode.checked).toBe(true);
  });

  it('should close report modal on click of close button', () => {
    const { getByTestId } = render(
      <ReportArticleModal store={reportArticleStore}
        slug="slug"
        closeModal={closeModal} />
    );
    const closeBtn = getByTestId('close-modal');
    fireEvent.click(closeBtn);
    expect(closeModal).toHaveBeenCalledTimes(1);
  });
});
