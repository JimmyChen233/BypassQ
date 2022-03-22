import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import { Link } from 'react-router-dom';
import '../style/pages/authPage.scss';
import authIcon from '../assets/authPage.svg';
import accountIcon from '../assets/account.svg';
import passwordIcon from '../assets/password.svg';
import InputTab from '../components/Input/index';
import { useAuth } from '../context/userContext';
import { ROLE } from '../static/constants';

const AuthPage = (props) => {
  const [authDetail, setAuthDetail] = useState({
    username: '',
    password: '',
    type: ROLE.USER,
  });
  const { authLogin } = useAuth();
  const [message, setMessage] = useState();

  const handlerFieldInput = (key) => {
    return (value) => {
      setAuthDetail({
        ...authDetail,
        [key]: value,
      });
      setMessage('');
    };
  };

  const loginHandler = async () => {
    const { push } = props.history;
    try {
      const response = await authLogin(authDetail);

      setMessage(response);
      push('/menu');
    } catch (e) {
      //TODO 登录时候后的错误信息，后续用来做用户提示
      setMessage(e.response);
    }
  };

  return (
    <div className="auth-page">
      <section className="auth-page__form">
        <ReactSVG className="auth-page__icon" src={authIcon} />
        <InputTab
          className="auth-page__account"
          icon={accountIcon}
          type="text"
          onChange={handlerFieldInput('username')}
          placeholder="Username"
          required={true}
          value={authDetail.username}
        />

        <InputTab
          className="auth-page__password"
          icon={passwordIcon}
          type="password"
          onChange={handlerFieldInput('password')}
          placeholder="Password"
          required={true}
          value={authDetail.password}
        />

        <button className="auth-page__auth-action" type="submit" onClick={loginHandler}>
          LOGIN
        </button>

        {message &&
          {
            403: <p>Access is not permitted!</p>,
            400: <p>Username or Password is incorrect.</p>,
          }[message.status]}

        <Link to="/signup">
          <span className="auth-page__switch">Create a new account</span>
        </Link>
      </section>
    </div>
  );
};

export default AuthPage;
