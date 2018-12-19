import React from 'react';
import { render } from 'react-testing-library';
import CommentHistoryModal from
  '../../../components/containers/comments/CommentHistoryModal';

describe('Comment history modal component', () => {
  it('should render without crashing', () => {
    const closeModal = jest.fn();
    const comments = [
      {
        id: 1,
        oldComment: 'Oldest comment',
        createdAt: new Date()
      },
      {
        id: 2,
        oldComment: 'Older comment',
        createdAt: new Date()
      }
    ];

    render(
      <CommentHistoryModal
        comments={comments}
        closeModal={closeModal}
      />
    );
  });
});
