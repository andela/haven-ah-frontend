import React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactionButtons
  from '../../../components/containers/reactions/reactionButtons';
import store from '../../testUtilities/store';
import {
  articleThread,
} from '../../testUtilities/mockData';

afterEach(cleanup);

const articleThreadStore = store(articleThread);

describe('loveButton Component', () => {
  it('should render the loveButton and the likeButtons', () => {
    const component = render(<Router>
      <ReactionButtons store={articleThreadStore} />
    </Router>);
    expect(component).toMatchSnapshot();
  });
  it('should handle click for love', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Router>
        <ReactionButtons store={articleThreadStore} />
      </Router>
    );
    const love = getByTestId('love');
    love.onclick = handleClick;
    fireEvent.click(love);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it('should handle click for love', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Router>
        <ReactionButtons store={articleThreadStore} />
      </Router>
    );
    const love = getByTestId('love');
    love.onclick = handleClick;
    fireEvent.click(love);
    fireEvent.click(love);

    expect(handleClick).toHaveBeenCalledTimes(2);
  });
  it('should handle click for like', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Router>
        <ReactionButtons store={articleThreadStore} />
      </Router>
    );
    const like = getByTestId('like');
    like.onclick = handleClick;
    fireEvent.click(like);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it('should handle click for like', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Router>
        <ReactionButtons store={articleThreadStore} />
      </Router>
    );
    const like = getByTestId('like');
    like.onclick = handleClick;
    fireEvent.click(like);
    fireEvent.click(like);

    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it('should handle click for love on comment', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Router>
        <ReactionButtons
          store={articleThreadStore}
          loves={20}
          likes={1}
          hasLoved={false}
          hasLiked />
      </Router>
    );
    const love = getByTestId('love');
    love.onclick = handleClick;
    fireEvent.click(love);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it('should handle click for like on comment', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Router>
        <ReactionButtons
          store={articleThreadStore}
          commentId={2}
          loves={20}
          likes={1}
          hasLoved
          hasLiked={false} />
      </Router>
    );
    const like = getByTestId('like');
    like.onclick = handleClick;
    fireEvent.click(like);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
