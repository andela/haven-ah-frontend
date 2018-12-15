import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent, cleanup } from 'react-testing-library';
import CommentCard from '../../../components/containers/comments/CommentCard';
import store from '../../testUtilities/store';
import { comment, articleThread } from '../../testUtilities/mockData';

afterEach(cleanup);
const articleThreadStore = store(articleThread);

describe('Comment modal component', () => {
  it('should display modal', () => {
    const displayModal = jest.fn();

    const { getByTestId } = render(
      <Provider store={articleThreadStore}>
        <CommentCard
          comment={comment}
          displayModal={displayModal} />
      </Provider>
    );

    const toggle = getByTestId('toggle-modal');
    toggle.onclick = displayModal;
    fireEvent.click(toggle);

    expect(displayModal).toHaveBeenCalledTimes(2);
  });
});
