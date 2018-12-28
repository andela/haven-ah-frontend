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
  },
  reportArticle: {
    reporting: false,
    message: 'Message'
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

export const reportArticle = {
  reportArticle: {
    reporting: false,
    message: 'New message',
    error: 'Error message'
  }
};
