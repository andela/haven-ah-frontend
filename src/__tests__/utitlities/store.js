const mocks = {
  subscribe: () => jest.fn(),
  dispatch: () => jest.fn()
};

const store = (state) => {
  return {
    getState: () => state,
    ...mocks
  };
};

export default store;
