/**
 * @url /api/get-user-list
 * @header content-type: application/json
 * @delay 500
 * @method get
 */
/* eslint-disable */
const users = require('./_users.js');
module.exports = (request) => {
  const page = +request.query.page || 1;
  const pageSize = 10;

  const offset = Math.max(page - 1, 0) * pageSize;
  const limit = offset + pageSize;

  users.sort((u1, u2) => u2.id - u1.id);
  return {
    code: 0,
    msg: 'ok',
    data: {
      list: users.slice(offset, limit),
      total: users.length,
    },
  };
};
