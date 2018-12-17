import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import CommentCard from '../../../components/containers/comments/CommentCard';


afterEach(cleanup);

describe('Comment modal component', () => {
  it('should display modal', () => {
    const displayModal = jest.fn();
    const comment = {
      Replies: [
        {
          id: 1
        }
      ]
    };

    const { getByTestId } = render(<CommentCard comment={comment}
      displayModal={displayModal} />);

    const toggle = getByTestId('toggle-modal');
    toggle.onclick = displayModal;
    fireEvent.click(toggle);

    expect(displayModal).toHaveBeenCalledTimes(2);
  });
});
