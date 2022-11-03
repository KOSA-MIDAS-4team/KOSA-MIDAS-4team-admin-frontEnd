import axios from 'axios';
import { getAccessToken } from '../../functions/token/token';

export const getAllUser = async () => {
  return await axios.request({
    url: 'http://13.209.36.143:8081/user/all',
    headers: {
      Authorization: getAccessToken(),
    },
  });
};
