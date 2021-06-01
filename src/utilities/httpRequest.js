
const axios = require('axios');

const request = async (fn, url, params) => {
  return await fn(url, params)
    .then((response) => response.data)
    .catch((error) => (console.error(error)));
}

const _http = {
  GET: (url, params = {}) => {
    return request(axios.get, url, params)
  },
  POST: (url, params = {}) => {
    return request(axios.post, url, params)
  },
  PUT: (url, params = {}) => {
    return request(axios.put, url, params)
  },
  DELETE: (url, params = {}) => {
    return request(axios.delete, url, params)
  }
}


// export { _http }

module.exports = _http;



