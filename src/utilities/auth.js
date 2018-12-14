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
 * a function to set user name
 * @param {*} message
 */

export const setUsername = (message) => {
  const commaPos = message.indexOf(',');
  const username = message.slice(6, commaPos);
  localStorage.setItem('username', username);
};

export const getToken = () => {
  return localStorage.getItem('token');
};
