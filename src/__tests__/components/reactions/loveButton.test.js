import React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import LoveButton
  from '../../../components/containers/reactions/loveButton';
import store from '../../testUtilities/store';
import {
  articleThread, articleThread2,
} from '../../testUtilities/mockData';

afterEach(cleanup);

const articleThreadStore = store(articleThread);
const articleThreadStore2 = store(articleThread2);
describe('loveButton Component', () => {
  it('should render the half-shade loveButton', () => {
    render(<Router>
      <LoveButton store={articleThreadStore2} />
    </Router>);
  });
  it('should render the full-shade loveButton', () => {
    render(<Router>
      <LoveButton store={articleThreadStore} />
    </Router>);
  });
  it('should handle click for likes', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Router>
        <LoveButton store={articleThreadStore} />
      </Router>
    );
    const love = getByTestId('love');
    love.onclick = handleClick;
    fireEvent.click(love);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
