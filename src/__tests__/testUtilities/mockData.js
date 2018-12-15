export const initialArticleThread = {
  articleThread: {}
};

export const articleThread = {
  articleThread: {
    article: {
      title: 'food',
      tags: ['bread', 'cake'],
      images: null,
      Author: {
        id: 3,
        firstName: 'Price',
        lastName: 'Raymonds',
        username: 'rayprice',
        imageUrl: null,
        bio: null
      },
      Reactions: {
        loveCount: 20,
        likesCount: 23,
        hasFollowedAuthor: false,
        hasLiked: true,
        hasLoved: true,
      },
      Bookmark: [
        {
          id: 5,
          articleId: 3,
          userId: 3,
          createdAt: '2018-11-28T14:23:28.554Z',
        }
      ],
    },
    comments: [
      {
        id: 10,
        image: null,
        body: 'Obi is a boy',
        User: {},
        createdAt: '2018-11-29T14:23:28.492Z',
        highlightedText: null,
        Replies: [
          {
            id: 3,
            image: null,
            body: 'Priscilla is a girl',
            User: {},
            createdAt: null,
            highlightedText: null,
            Reactions: {
              loves: 10,
              likes: 13,
              currentUserReaction: 'Love',
            }
          }
        ],
        Reactions: {
          loves: 10,
          likes: 13,
          currentUserReaction: 'Like',
        },
        Bookmark: [
          {
            id: 5,
            articleId: 3,
            userId: 3,
            createdAt: '2018-11-28T14:23:28.554Z',
          }
        ],
      },
      {
        id: 11,
        image: null,
        body: 'Ada is a girl',
        User: {},
        highlightedText: null,
        createdAt: '2018-11-28T14:23:28.492Z',
        Replies: [
          {
            id: 4,
            image: null,
            body: 'Sullivan is a man',
            User: {},
            createdAt: null,
            highlightedText: null,
            Reactions: {
              loves: 10,
              likes: 13,
              currentUserReaction: 'Love',
            }
          }
        ],
        Reactions: {
          loves: 10,
          likes: 13,
          currentUserReaction: 'Love',
        },
        Bookmark: [
          {
            id: 5,
            articleId: 3,
            userId: 3,
            createdAt: '2018-11-28T14:23:28.554Z',
          }
        ],
      }
    ],
  },
  following: {
    payload: {
      status: 200,
      message: 'Message',
    }
  },
  reaction: {
    payload: {
      status: 200,
      message: 'Message',
    }
  },
  bookmarkArticle: {
    payload: {
      status: 200,
      message: 'Message',
    }
  }
};

export const articleThread2 = {
  articleThread: {
    article: {
      title: 'food',
      tags: ['bread', 'cake'],
      images: null,
      Author: [],
      Reactions: {
        loveCount: 20,
        likesCount: 23,
        hasFollowedAuthor: true,
        hasLiked: false,
        hasLoved: false,
      }
    }
  },
  following: {
    payload: {
      status: 200,
      message: 'Message',
    }
  },
  reaction: {
    payload: {
      status: 200,
      message: 'Message',
    }
  }
};

export const trendingArticles = {
  trendingArticles: {
    articles: [
      {
        id: 1,
        title: 'MY test article',
        description: 'My test description',
        images: 'https://',
        readtime: '500',
        slug: 'a-slug-85988640950',
        authorImage: 'https://',
        authorName: 'presley',
        Bookmark: [
          {
            id: 5,
            articleId: 3,
            userId: 3,
            createdAt: '2018-11-28T14:23:28.554Z',
          }
        ],
      },
      {
        id: 2,
        title: 'A test article',
        description: 'My test description',
        images: 'https://',
        readtime: '500',
        slug: 'a-slug-85988640950',
        authorImage: 'https://',
        authorName: 'presley',
      },
    ],
  }
};

export const match = {
  params: {
    slug: 'dummy-slug'
  }
};

export const redirectSignup = {
  location: {
    search: 'https://haven-ah-frontend.herokuapp.com/?token=ndjndjsfd',
  },
};

export const comment = {
  id: 2,
  image: null,
  body: 'Obi is a boy',
  User: {},
  createdAt: null,
  highlightedText: null,
  Replies: [
    {
      id: 4,
      image: null,
      body: 'Sullivan is a man',
      User: {},
      createdAt: '2018-11-28T14:23:28.492Z',
      highlightedText: null,
      Reactions: {
        loves: 10,
        likes: 13,
        currentUserReaction: 'Love',
      }
    },
  ],
  Reactions: {
    loves: 20,
    likes: 23,
    currentUserReaction: 'Love'
  }
};

export const comments = [
  {
    id: 10,
    image: null,
    body: 'Obi is a boy',
    User: {},
    createdAt: '2018-11-28T14:23:28.492Z',
    highlightedText: null,
    Replies: [
      {
        id: 3,
        image: null,
        body: 'Priscilla is a girl',
        User: {},
        createdAt: null,
        highlightedText: null,
        Reactions: {
          loves: 10,
          likes: 13,
          currentUserReaction: 'Love',
        }
      }
    ],
    Reactions: {
      loves: 10,
      likes: 13,
      currentUserReaction: 'Like',
    }
  },
  {
    id: 11,
    image: null,
    body: 'Ada is a girl',
    User: {},
    createdAt: '2018-11-29T14:23:28.492Z',
    highlightedText: null,
    Replies: [
      {
        id: 4,
        image: null,
        body: 'Sullivan is a man',
        User: {},
        createdAt: null,
        highlightedText: null,
        Reactions: {
          loves: 10,
          likes: 13,
          currentUserReaction: 'Love',
        }
      }
    ],
    Reactions: {
      loves: 10,
      likes: 13,
      currentUserReaction: 'Love',
    }
  }
];
