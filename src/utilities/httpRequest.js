import axios from 'axios';

const request = async (action, url, params) => {

  return await action(url, params)
    .then((response) => response?.data)
    .catch((error) => (console.error(error)));

}

const _http = {
  GET: (url, params = {}) => {
    return request(axios.get, url, params);
  },
  POST: (url, params = {}) => {
    return request(axios.post, url, params);
  },
  PUT: (url, params = {}) => {
    return request(axios.put, url, params);
  },
  DELETE: (url, params = {}) => {
    return request(axios.delete, url, params);
  }
}

export { _http };