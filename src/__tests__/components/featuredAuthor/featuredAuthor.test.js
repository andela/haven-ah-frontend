import React from 'react';
import { render, cleanup } from 'react-testing-library';
import FeaturedAuthorComponent from '../../../components/containers/featuredAuthor/FeaturedAuthor';
import store from '../../../store';

afterEach(cleanup);
const featuredAuthor = {
  facebook: 'blahh',
  bio: 'boo',
  firstName: 'bay',
  lastName: 'mr'
};
let followers;
const data = { featuredAuthor, followers };
describe('Featured Author component', () => {
  it('should render without crashing', () => {
    render(<FeaturedAuthorComponent data={data} store={store} />);
  });
});
