import validateSignin from '../../utilities/validateInput';


describe('Validate Signin function', () => {
  it('should return an empty object on no errors', () => {
    const payload = {
      email: 'priscillasamiduh@gmail.com',
      password: 'password'
    };

    expect(validateSignin(payload)).toEqual({});
  });

  it('should return an error on password length less than 8', () => {
    const payload = {
      email: 'priscillasamiduh@gmail.com',
      password: 'pass'
    };
    const errors = validateSignin(payload);
    expect(errors).toHaveProperty(
      'password', 'password length must be at least 8 characters');
  });

  it('should return an error on invalid email', () => {
    const payload = {
      email: 'priscillasamiduhgmail.com',
      password: 'password'
    };

    const errors = validateSignin(payload);
    expect(errors)
      .toHaveProperty('email', 'please provide a valid email address');
  });
});
