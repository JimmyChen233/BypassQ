import React, { useState } from 'react';
import isEmpty from 'lodash/isEmpty';
import { ReactSVG } from 'react-svg';
import '../style/pages/signupPage.scss';
import { Link } from 'react-router-dom';
import authIcon from '../assets/authPage.svg';
import accountIcon from '../assets/account.svg';
import passwordIcon from '../assets/password.svg';
import emailIcon from '../assets/email.svg';
import InputTab from '../components/Input/index';
import Validation from '../components/Validation';
import { useAuth } from '../context/userContext';
import { ROLE } from '../static/constants';

const SignupPage = (props) => {
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    email: '',
    type: ROLE.USER,
  });

  const [onError, setOnError] = useState({});
  const { authRegister } = useAuth();

  const handlerFieldInput = (key) => {
    return (value) => {
      setValues({
        ...values,
        [key]: value,
      });
      setOnError('');
    };
  };

  const handleSignupSubmit = async (e) => {
    const { push } = props.history;
    e.preventDefault();
    setOnError(Validation(values));
    if (isEmpty(Validation(values))) {
      try {
        await authRegister(values);
        push('/menu');
      } catch (err) {
        //TODO 登录错误后返回的错误信息，后续用来做用户提醒
      }
    }
  };

  return (
    <div className="signup-page">
      <form className="signup-page__form">
        <ReactSVG className="signup-page__icon" src={authIcon} />
        <InputTab
          className="signup-page__account-firstname"
          icon={accountIcon}
          type="text"
          name="firstname"
          onChange={handlerFieldInput('firstname')}
          placeholder="firstname"
          value={values?.firstname}
          required={true}
        />
        {onError?.firstname && <p>{onError.firstname}</p>}

        <InputTab
          className="signup-page__account-lastname"
          icon={accountIcon}
          type="text"
          name="lastname"
          onChange={handlerFieldInput('lastname')}
          maxLength={30}
          placeholder="lastname"
          value={values?.lastname}
          required={true}
        />
        {onError?.lastname && <p>{onError.lastname}</p>}

        <InputTab
          className="signup-page__account"
          icon={accountIcon}
          type="text"
          name="username"
          onChange={handlerFieldInput('username')}
          maxLength={30}
          placeholder="Username"
          value={values?.username}
          required={true}
        />
        {onError?.username && <p>{onError.username}</p>}

        <InputTab
          className="signup-page__password"
          icon={passwordIcon}
          type="password"
          name="password"
          onChange={handlerFieldInput('password')}
          maxLength={30}
          placeholder="Password"
          value={values?.password}
          required={true}
        />
        {onError?.password && <p>{onError.password}</p>}

        <InputTab
          className="signup-page__email"
          icon={emailIcon}
          type="text"
          name="email"
          onChange={handlerFieldInput('email')}
          maxLength={30}
          placeholder="Email"
          value={values?.email}
          required={true}
        />
        {onError?.email && <p>{onError.email}</p>}

        <button className="signup-page__auth-action" type="submit" onClick={handleSignupSubmit}>
          REGISTER
        </button>
        <Link to="/auth">
          <span className="signup-page__switch">Alread have an acount? Login</span>
        </Link>
      </form>
    </div>
  );
};

export default SignupPage;
