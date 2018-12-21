import validateSignin, { validateReport } from '../../utilities/validateInput';


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

describe('Validate report article function', () => {
  it('should return an empty object if values are supplied', () => {
    const payload = {
      complaintType: 'Abuse',
      complaintBody: 'An abusive report'
    };
    const errors = validateReport(payload);
    expect(errors).toEqual({});
  });

  it('should return an object with complaint type error', () => {
    const payload = {
      complaintType: '',
      complaintBody: 'An abusive report'
    };

    const errors = validateReport(payload);
    expect(Object.keys(errors).length).toEqual(1);
    expect(errors).toHaveProperty('complaintType');
    expect(errors.complaintType).toEqual('please select a complaint type');
  });

  it('should return an object with errors', () => {
    const payload = {
      complaintType: '',
      complaintBody: ''
    };

    const errors = validateReport(payload);
    expect(Object.keys(errors).length).toEqual(2);
    expect(errors).toHaveProperty('complaintBody');
  });
});
