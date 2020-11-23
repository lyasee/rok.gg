import axios from 'axios';

const API = axios.create({
  baseURL: 'http://rok.gg:1337',
  responseType: 'json',
});

export const getApi = async (url, params) => {
  try {
    const res = await API({
      url,
      method: 'GET',
      params,
    });

    return res.data;
  } catch (error) {
    if (!error || !error.response) {
      return null;
    }

    if (error.response.status && (error.response.status === 403 || error.response.status === 401)) {
      await TokenStorage.clear();
      return error.response.data;
    }

    return error.response.data;
  }
};