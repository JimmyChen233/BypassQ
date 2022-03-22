import React, { useEffect } from 'react';
import { useState, createContext, useContext } from 'react';
import { registerHttp, meHttp, loginHttp } from '../http/authHttp';
import { ROLE, TOKEN } from '../static/constants';

const UserContext = createContext(undefined);

const setToken = (key, token) => window.localStorage.setItem(key, token);
const removeToken = (key) => window.localStorage.removeItem(key);
const getUserToken = () => window.localStorage.getItem(TOKEN.USER);
const getAdminToken = () => window.localStorage.getItem(TOKEN.ADMIN);

export const AuthProvider = (props) => {
  const { children } = props;
  // eslint-disable-next-line
  const [user, setUser] = useState({});
  const [adminUser, setAdminUser] = useState({});
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const AuthVerify = async () => {
      await tokenVerify(getAdminToken());
      await tokenVerify(getUserToken());
      setStatus(true);
    };
    AuthVerify();
  }, []);

  const authLogin = async (loginDetail) => {
    const { data } = await loginHttp(loginDetail);
    if (data) {
      if (data.type === ROLE.ADMIN) {
        setAdminUser(data);
        setToken(TOKEN.ADMIN, data.token);
      }
      if (data.type === ROLE.USER) {
        setUser(data);
        setToken(TOKEN.USER, data.token);
      }
    } else {
      throw Error;
    }
  };

  const authRegister = async (registerDetail) => {
    const { data } = await registerHttp(registerDetail);
    if (data) {
      setToken(data.token);
      setUser(data);
    } else {
      throw Error;
    }
  };

  const tokenVerify = async (token) => {
    try {
      const { data } = await meHttp(token);

      if (data.type === ROLE.ADMIN) {
        setAdminUser(data);
      }
      if (data.type === ROLE.USER) {
        setUser(data);
      }
    } catch (e) {
      removeToken();
    }
  };

  const authLogout = (token) => {
    if (token === TOKEN.USER) {
      setUser({});
    } else {
      setAdminUser({});
    }
    removeToken(token);
  };

  return (
    <UserContext.Provider value={{ authLogin, authRegister, authLogout, user, adminUser, status }}>
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(UserContext);
  return context;
};
