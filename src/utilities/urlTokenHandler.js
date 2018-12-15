import queryString from 'query-string';
import { setToken } from './auth';

/**
* Captures the token and username in the URL
* Stores them in the local storage and removes the details from the URL.
* @param {string} url
* @returns {string} username
*/
export default (url) => {
  const { token } = queryString.parse(url);
  if (token) {
    const username = url.split('=')[1].split('&')[0];
    const newUrl = url.split('?')[0];

    setToken(token);
    localStorage.setItem('username', username);
    window.location.replace(newUrl);
    return username;
  }
};
