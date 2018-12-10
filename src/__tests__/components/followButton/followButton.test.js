import React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import FollowButton
  from '../../../components/containers/followButton/followButton';
import store from '../../testUtilities/store';
import {
  articleThread, articleThread2,
} from '../../testUtilities/mockData';

afterEach(cleanup);

const articleThreadStore = store(articleThread);
const articleThreadStore2 = store(articleThread2);
describe('followButton Component', () => {
  it('should render the half-shade followButton', () => {
    render(<Router>
      <FollowButton store={articleThreadStore2} />
    </Router>);
  });

  it('should render the full-shade followButton', () => {
    render(<Router>
      <FollowButton store={articleThreadStore} />
    </Router>);
  });

  it('should handle click for unfollowing', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Router>
        <FollowButton store={articleThreadStore2} />
      </Router>
    );
    const follow = getByTestId('follow');
    follow.onclick = handleClick;
    fireEvent.click(follow);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should handle click for following', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Router>
        <FollowButton store={articleThreadStore} />
      </Router>
    );
    const follow = getByTestId('follow');
    follow.onclick = handleClick;
    fireEvent.click(follow);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
