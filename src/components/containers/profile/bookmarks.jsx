import React from 'react';
import BookmarkCard from './bookmarkCard';

const Bookmarks = ({ bookmarks }) => {
  return bookmarks.map((
    article,
    index
  ) => <BookmarkCard key={index} article={article} />);
};

export default Bookmarks;
