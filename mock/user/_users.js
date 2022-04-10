/* eslint-disable */

const faker = require('http-request-mock/plugin/faker.js');
const cache = require('http-request-mock/plugin/cache.js');

const users = [...Array(50)].map(() => ({
  id: faker.incrementId('users', 1),
  name: faker.name(),
  age: faker.integer(18, 30),
  email: faker.email(),
  phone: faker.phone('###-###-####'),
  gender: faker.chance.gender().toLowerCase(),
  createdTime: faker.datetime(),
}));
module.exports = cache('mock-users', users);
