/**
 * @url /api/create-user
 * @header content-type: application/json
 * @delay 800
 * @method post
 */
/* eslint-disable */
import users from './all-users.js';
import faker from 'http-request-mock/plugin/faker.esm.mjs';

export default (request) => {
  const { name, gender, age, email, phone } = request.body;

  if (!name) {
    return { code: 100, msg: 'Invalid name', data: null };
  }
  if (!['male', 'female'].includes(gender)) {
    return { code: 100, msg: 'Invalid gender', data: null };
  }
  if (age < 18 || age > 30) {
    return { code: 100, msg: 'Invalid age', data: null };
  }
  if (!/^[\w\.\+-]+@[\w\.\+-]+$/.test(email)) {
    return { code: 100, msg: 'Invalid email', data: null };
  }
  if (!/^\d{3}-\d{3}-\d{4}$/.test(phone)) {
    return { code: 100, msg: 'Invalid phone', data: null };
  }

  const user = {};
  user.id = Math.max(...users.map((u) => u.id)) + 1;
  user.name = name;
  user.gender = gender;
  user.age = +age;
  user.email = email;
  user.phone = phone;
  user.createdTime = faker.datetime(Date.now());
  users.push(user);

  return { code: 0, msg: 'ok', data: user };
};
