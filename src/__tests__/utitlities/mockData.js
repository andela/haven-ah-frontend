export const initialArticleThread = {
  articleThread: {}
};

export const articleThread = {
  articleThread: {
    article: {
      title: 'food',
      tags: ['bread', 'cake'],
      images: null,
      Author: []
    },
    commenting: false,
    fetchingComments: false,
    newComment: null,
    comments: [],
  }
};

export const createArticleInitialState = {
  createArticle: {
    slug: null
  }
};

export const createArticleState = {
  createArticle: {
    slug: 'dummy-slug'
  }
};

export const match = {
  params: {
    slug: 'dummy-slug'
  }
};
