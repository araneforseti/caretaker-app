global.self = global; // this is required for isomorphic-fetch to work in react-native
require('isomorphic-fetch');
import { getApiUrl } from '../config/ApiConfig';

const API_URL = getApiUrl();

const getRequest = () => ({
  headers: {
    'Accept': 'application/json'
  }
});

const postRequest = (body) => ({
  method: 'POST',
  headers: {
    ...getRequest().headers,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
});

const parseJson = response => response.json();

const getResource = (path) => fetch(API_URL + path, getRequest());

const postResource = (path, body) => fetch(API_URL + path, postRequest(body));


module.exports = {
  parseJson,
  getResource,
  postResource
};
