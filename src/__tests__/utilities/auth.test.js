import { setToken, setUsername } from '../../utilities/auth';

describe('bookmark check function', () => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
    + '.eyJpZCI6MSwiaWF0IjoxNTQ1MDcyODUzLCJleHAiOjE1NDU2Nzc2NTN9'
    + '.4oYvI4LAt-HJGtxzX24Xw0K_pPn4LiHXVgrc20Ykj_Y';
  it('should return an empty object on no errors', () => {
    expect(setToken(token)).toEqual(undefined);
  });
  it('should return an empty object on no errors', () => {
    const username = 'bhedhbhhdfgh';
    expect(setUsername(username)).toEqual(undefined);
  });
});
