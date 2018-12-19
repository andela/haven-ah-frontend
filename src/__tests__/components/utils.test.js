import articleValidator from '../../utilities/validateArticle';
import { dummyarticle } from '../testUtilities/mockData';

describe('Article validator', () => {
  it('Validate an article bundle', () => {
    expect(articleValidator(dummyarticle)).toBe('The title is empty. ');
  });
});
