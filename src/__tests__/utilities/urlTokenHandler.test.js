import handleToken from '../../utilities/urlTokenHandler';

const href = 'https://haven-ah-frontend.herokuapp.com/?username=TheoOkafor'
    + '&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImlhdCI6MTU'
    + '0NDAxNDA5NiwiZXhwIjoxNTQ0NjE4ODk2fQ.u0wqlyKNGGVjVRTl3ZRYh'
    + 'MtaWlO8GxNENK6nFEdqm_M';

describe('URL Token Handler', () => {
  it('should return username', () => {
    expect(handleToken(href)).toEqual('TheoOkafor');
  });
});
