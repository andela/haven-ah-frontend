import React from 'react';
import BookmarkCard from './bookmarkCard';

const Bookmarks = (props) => {
  const { bookmarks } = props;
  if (!bookmarks) {
    return (<div>No bookmarks yet</div>);
  }
  return bookmarks.map((
    article,
    index
  ) => <BookmarkCard key={index} article={article} {...props} />);
};

export default Bookmarks;
