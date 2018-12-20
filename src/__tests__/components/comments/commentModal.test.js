import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, cleanup, fireEvent } from 'react-testing-library';
import CommentModal
  from '../../../components/containers/comments/CommentModal';
import store from '../../testUtilities/store';
import { comment, articleThread } from '../../testUtilities/mockData';

afterEach(cleanup);
const articleThreadStore = store(articleThread);

describe('Comment section component', () => {
  it('should render without crashing', () => {
    const displayModal = jest.fn();
    const hideModal = jest.fn();

    render(
      <Provider store={articleThreadStore}>
        <CommentModal
          comment={comment}
          replies={[]}
          displayModal={displayModal}
          hideModal={hideModal}/>
      </Provider>
    );
  });

  it('should close modal on click of the close button', () => {
    const displayModal = jest.fn();
    const hideModal = jest.fn();


    const { getByTestId } = render(
      <Provider store={articleThreadStore}>
        <Router>
          <CommentModal
            comment={comment}
            replies={comment.Replies}
            displayModal={displayModal}
            hideModal={hideModal} />
        </Router>
      </Provider>
    );

    const closeBtn = getByTestId('close-modal');
    fireEvent.click(closeBtn);

    expect(hideModal).toHaveBeenCalledTimes(1);
  });
});
