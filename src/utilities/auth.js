const setToken = (token) => {
  localStorage.setItem('token', token);
};

export const setUsername = (message) => {
  const commaPos = message.indexOf(',');
  const username = message.slice(6, commaPos);

  localStorage.setItem('username', username);
};

export default setToken;
