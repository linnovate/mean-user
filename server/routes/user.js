'use strict';

// User routes use users controller
var users = require('../controllers/users');

module.exports = function(Auth, app, passport) {

    app.route('/users/me')
        .get(users.me);

    // Setting up the userId param
    app.param('userId', users.user);
};
