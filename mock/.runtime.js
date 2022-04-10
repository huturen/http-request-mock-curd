/* eslint-disable */
let mocker;

const HttpRequestMock = require('http-request-mock');
mocker = HttpRequestMock.setup();
mocker.mock({
  url: '/api/create-user',
  method: 'POST',
  body: require('./user/create-user.js'),
  delay: 800,
  header: {
    'content-type': 'application/json',
  },
});
mocker.mock({
  url: '/api/delete-user',
  method: 'POST',
  body: require('./user/delete-user.js'),
  delay: 800,
  header: {
    'content-type': 'application/json',
  },
});
mocker.mock({
  url: '/api/get-user-list',
  method: 'GET',
  body: require('./user/get-user-list.js'),
  delay: 500,
  header: {
    'content-type': 'application/json',
  },
});
mocker.mock({
  url: '/api/update-user',
  method: 'POST',
  body: require('./user/update-user.js'),
  delay: 800,
  header: {
    'content-type': 'application/json',
  },
});

module.exports = mocker;
/* eslint-enable */
