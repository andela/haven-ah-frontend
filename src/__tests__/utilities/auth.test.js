import { cleanup } from 'react-testing-library';
import MockLocalStorage from '../../helpers/mockLocalStorage';
import { setToken } from '../../utilities/auth';

afterEach(cleanup);

describe('Social Authentication  component', () => {
  it('should redirect to homepage', () => {
    global.localStorage = new MockLocalStorage();
    localStorage.setItem('token', 'XTREME.PRODIGY');
    setToken('SULLIVAN.JIGGY.PRISCILLA.UCHE.THEO');
    const token = localStorage.getItem('token');
    expect(token)
      .toEqual('SULLIVAN.JIGGY.PRISCILLA.UCHE.THEO');
  });
});
