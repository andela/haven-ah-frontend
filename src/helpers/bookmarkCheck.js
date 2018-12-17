/**
 *
 * @param {object} articles
 * @returns article
 */
const bookmarkCheck = (articles) => {
  const userid = localStorage.getItem('userid');
  return articles.map((article) => {
    const bookmarked = article.Bookmark
      .filter(bookmark => bookmark.userId === parseInt(userid, 10));

    const hasBookmarked = bookmarked.length > 0;
    article.bookmarkFlag = hasBookmarked;
    [article.usersBookmark] = bookmarked;
    return article;
  });
};
export default bookmarkCheck;
