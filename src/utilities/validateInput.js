const emailPattern = /^[a-zA-Z0-9]+[-_.]*[a-zA-Z0-9]*@[a-zA-Z0-9]+\.(?:[a-zA-Z0-9]+)*$/;

const validateSignIn = ({ email, password }) => {
  const errors = {};

  if (!emailPattern.test(email)) {
    errors.email = 'please provide a valid email address';
  }

  if (password.length < 8) {
    errors.password = 'password length must be at least 8 characters';
  }

  return errors;
};

export default validateSignIn;
