const mocks = {
  subscribe: () => jest.fn(),
  dispatch: () => jest.fn(),
  getCommentsAction: () => jest.fn(),
  postCommentAction: () => jest.fn(),
};

const store = (state) => {
  return {
    getState: () => state,
    setState: () => state,
    ...mocks
  };
};

export default store;
