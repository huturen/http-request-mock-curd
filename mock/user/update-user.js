/**
 * @url /api/update-user
 * @header content-type: application/json
 * @delay 800
 * @method post
 */
/* eslint-disable */
const users = require('./_users.js');
module.exports = (request) => {
  const { id, name, gender, age, email, phone } = request.body;
  const user = users.find((user) => user.id === +id);

  if (!user) {
    return { code: 100, msg: 'User does not exist', data: null };
  }
  if (!name) {
    return { code: 100, msg: 'Invalid name', data: null };
  }
  if (!['male', 'female'].includes(gender)) {
    return { code: 100, msg: 'Invalid gender', data: null };
  }
  if (age < 18 || age > 30) {
    return { code: 100, msg: 'Invalid age', data: null };
  }
  if (!/^[\w\.]+@[\w\.]+$/.test(email)) {
    return { code: 100, msg: 'Invalid email', data: null };
  }
  if (!/^\d{3}-\d{3}-\d{4}$/.test(phone)) {
    return { code: 100, msg: 'Invalid phone', data: null };
  }

  user.name = name;
  user.gender = gender;
  user.age = +age;
  user.email = email;
  user.phone = phone;
  return { code: 0, msg: 'ok', data: user };
};
