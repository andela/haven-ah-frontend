import React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import LikeButton
  from '../../../components/containers/reactions/likeButton';
import store from '../../testUtilities/store';
import {
  articleThread,
  articleThread2,
} from '../../testUtilities/mockData';

afterEach(cleanup);

const articleThreadStore = store(articleThread);
const articleThreadStore2 = store(articleThread2);


describe('LikeButton Component', () => {
  it('should render the half-shade likeButton', () => {
    render(<Router>
      <LikeButton store={articleThreadStore2} />
    </Router>);
  });
  it('should render the full-shade likeButton', () => {
    render(<Router>
      <LikeButton store={articleThreadStore} />
    </Router>);
  });

  it('should handle click for likes', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Router>
        <LikeButton store={articleThreadStore} />
      </Router>
    );
    const like = getByTestId('like');
    like.onclick = handleClick;
    fireEvent.click(like);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
