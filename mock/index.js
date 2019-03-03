const global = require('./global');
const usersUser = require('./users/user');
const usersGroup = require('./users/group');
const operateActivity = require('./operate/activity');

module.exports = Object.assign(
    {},
    global,
    usersUser,
    usersGroup,
    operateActivity
);
