import axios from 'axios';

export const payment = (paymentData) => {
  return axios.post(`https://ijz4cmb44c.execute-api.us-east-1.amazonaws.com/UAT/bypassq-payment`, { ...paymentData });
};
