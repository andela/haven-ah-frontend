import { setToken, setUsername } from '../../utilities/auth';

describe('bookmark check function', () => {
  const token = 'bhedhbhhdfgh';
  it('should return an empty object on no errors', () => {
    expect(setToken(token)).toEqual(undefined);
  });
  it('should return an empty object on no errors', () => {
    const username = 'bhedhbhhdfgh';
    expect(setUsername(username)).toEqual(undefined);
  });
});
