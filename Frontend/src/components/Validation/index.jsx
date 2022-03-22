import { REGEX_PASSWORD, REGEX_EMAIL } from '../../static/regexConstans';

const Validation = (values) => {
  let onError = {};

  //username: 至少7位
  if (!values?.username?.trim()) {
    onError.username = 'Username is required';
  } else if (values?.username?.length < 7) {
    onError.username = 'Username should be longer than 6 characters';
  }

  //password:
  if (!values?.password) {
    onError.password = 'Password is required';
  } else if (values?.password?.length < 6) {
    onError.password = 'Password should be longer than 5 charaters';
  } else if (!REGEX_PASSWORD?.test(values.password)) {
    onError.password =
      'Password should have at least one upercase character, one lowercase character, one number and one special character';
  }

  if (!values?.email) {
    onError.email = 'Password is required';
  } else if (!REGEX_EMAIL?.test(values.email)) {
    onError.email = 'Email address is invalid';
  }

  return onError;
};

export default Validation;
