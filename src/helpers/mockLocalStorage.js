/**
 * Local Storage Class for mocking localStorage tests
 * Solution from https://stackoverflow.com/questions/32911630
 * /how-do-i-deal-with-localstorage-in-jest-tests
 * By @nickcan
 */
export default class MockLocalStorage {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    delete this.store[key];
  }
}
