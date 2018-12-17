const localStorageMock = {
  getItem: jest.fn(() => 'token'),
  setItem: jest.fn(() => 'token'),
  removeItem: jest.fn(() => 'token'),
};
global.localStorage = localStorageMock;

export default localStorageMock;
