/**
 *
 * @param {object} articles
 * @returns article
 */
const bookmarkCheck = (articles) => {
  const userId = localStorage.getItem('userId');
  return articles.map((article) => {
    const bookmarked = article.Bookmark
      .filter(bookmark => bookmark.userId === parseInt(userId, 10));

    const hasBookmarked = bookmarked.length > 0;
    article.bookmarkFlag = hasBookmarked;
    [article.usersBookmark] = bookmarked;
    return article;
  });
};
export default bookmarkCheck;
