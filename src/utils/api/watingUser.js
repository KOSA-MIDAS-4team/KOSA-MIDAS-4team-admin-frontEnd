import axios from 'axios';
import { getAccessToken } from '../functions/token/token';

export const waitingUser = async () => {
  return await axios
    .request({
      url: 'http://13.209.36.143:8081/admin',
      headers: {
        Authorization: getAccessToken(),
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
};
