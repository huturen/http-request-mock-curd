/**
 * @url /api/delete-user
 * @header content-type: application/json
 * @delay 800
 * @method post
 */
/* eslint-disable */
const users = require('./_users.js');
module.exports = (request) => {
  const { id } = request.body;
  const index = users.findIndex((user) => user.id === +id);

  if (index === -1) {
    return { code: 100, msg: 'User does not exist', data: null };
  }

  users.splice(index, 1);
  return { code: 0, msg: 'ok', data: null };
};
