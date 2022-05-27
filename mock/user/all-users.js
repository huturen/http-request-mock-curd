/* eslint-disable */

import faker from 'http-request-mock/plugin/faker.esm.mjs';
import cache from 'http-request-mock/plugin/cache.esm.mjs';

const users = [...Array(50)].map(() => ({
  id: faker.incrementId('users', 1),
  name: faker.name(),
  age: faker.integer(18, 30),
  email: faker.email(),
  phone: faker.phone('###-###-####'),
  gender: faker.gender(),
  createdTime: faker.datetime(),
}));
export default cache('mock-users', users);
