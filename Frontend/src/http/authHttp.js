import { http } from '.';

export const loginHttp = (loginDetail) => {
  return http('/user/login', { method: 'POST', requestData: { userInfo: loginDetail } });
};

export const registerHttp = (registerDetail) => {
  return http('/user/register', { method: 'POST', requestData: { userInfo: registerDetail } });
};

export const meHttp = (token) => {
  return http('/user/me', { method: 'POST', token });
};
