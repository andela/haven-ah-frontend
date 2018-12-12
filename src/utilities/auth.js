/**
 * a function to set token
 * @param {*} token
 */

export const setToken = (token) => {
  if (localStorage.getItem('token')) {
    localStorage.removeItem('token');
  }
  localStorage.setItem('token', token);
};

/**
 * a function to get token
 * @param {*} token
 */

export const getToken = () => {
  return localStorage.getItem('token');
};

/**
 * a function to set user name
 * @param {*} message
 */

export const setUsername = (message) => {
  const commaPos = message.indexOf(',');
  const username = message.slice(6, commaPos);
  localStorage.setItem('username', username);
};

/**
 * A function to check logged in state
 * @returns {boolean} login state
 */
export const isLoggedIn = () => {
  let loginState;
  const token = getToken();
  if (token) {
    loginState = true;
  } else {
    loginState = false;
  }
  return loginState;
};

/**
 * Function to clear user credentials
 */
export const clearCredentials = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userid');
  localStorage.removeItem('username');
};
