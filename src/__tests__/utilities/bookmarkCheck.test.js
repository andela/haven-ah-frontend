import bookmarkCheck from '../../helpers/bookmarkCheck';


describe('bookmark check function', () => {
  it('should return an empty object on no errors', () => {
    const articles = [
      {
        Bookmark: [{
          id: 3,
          userId: 67,
          articleId: 78,
        }]

      },
    ];

    expect(bookmarkCheck(articles)).toEqual([
      {
        Bookmark: [
          {
            articleId: 78,
            id: 3,
            userId: 67,
          },
        ],
        bookmarkFlag: false,
        usersBookmark: undefined,
      },
    ]);
  });
});
