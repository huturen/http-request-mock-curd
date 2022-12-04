/* eslint-disable */
let mocker;
import HttpRequestMock from 'http-request-mock/http-request-mock.esm.mjs';

mocker = HttpRequestMock.setup();

mocker.mock({
  url: '/api/create-user',
  method: 'POST',
  body: import('./user/create-user.js'),
  delay: 800,
  headers: {
    'content-type': 'application/json',
  },
});
mocker.mock({
  url: '/api/delete-user',
  method: 'POST',
  body: import('./user/delete-user.js'),
  delay: 800,
  headers: {
    'content-type': 'application/json',
  },
});
mocker.mock({
  url: '/api/get-user-list',
  method: 'GET',
  body: import('./user/get-user-list.js'),
  delay: 500,
  headers: {
    'content-type': 'application/json',
  },
});
mocker.mock({
  url: '/api/update-user',
  method: 'POST',
  body: import('./user/update-user.js'),
  delay: 800,
  headers: {
    'content-type': 'application/json',
  },
});

export default mocker;
/* eslint-enable */
