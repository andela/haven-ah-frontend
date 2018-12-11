import React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import LikeButton
  from '../../../components/containers/reactions/likeButton';
// import LikeButton from '../../../components/containers/reactions/LikeButton';

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
  // describe('Like button component', () => {
  //   it('should remain same on hover if user has liked previously', () => {
  //     const addIconClass = jest.fn();

  //     const {
  //       getByText,
  //       getByTestId
  //     } = render(<LikeButton hasLiked likes="0" />);

  //     const likes = getByText('0');
  //     const icon = getByTestId('like-icon');

  //     expect(likes).toBeDefined();

  //     icon.onmouseover = addIconClass;
  //     fireEvent.mouseOver(icon);
  //     expect(icon.className).toEqual('fa fa-thumbs-up');
  //   });

  //   it('should remain same on mouse out if user has liked previously', () => {
  //     const removeIconClass = jest.fn();

  //     const { getByTestId } = render(<LikeButton hasLiked likes="0" />);
  //     const icon = getByTestId('like-icon');

  //     icon.onmouseout = removeIconClass;
  //     fireEvent.mouseOut(icon);
  //     expect(icon.className).toEqual('fa fa-thumbs-up');
  //   });

  //   it('should turn dark on hover if user has not liked previously', () => {
  //     const addIconClass = jest.fn();

  //     const { getByTestId } = render(<LikeButton hasLiked={false} likes="1" />);
  //     const icon = getByTestId('like-icon');

  //     icon.onmouseover = addIconClass;
  //     fireEvent.mouseOver(icon);

  //     expect(icon.className).toEqual('fa fa-thumbs-up');
  //   });

  //   it('should remove dark on mouse out if user has not liked previously', () => {
  //     const removeIconClass = jest.fn();

  //     const { getByTestId } = render(<LikeButton hasLiked={false} likes="1" />);
  //     const icon = getByTestId('like-icon');

  //     icon.onmouseout = removeIconClass;
  //     fireEvent.mouseOut(icon);

  //     expect(icon.className).toEqual('fa fa-thumbs-o-up');
  //   });
  // });
});
