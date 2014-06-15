'use strict';

/*
 * Defining the Package
 */

var mean = require('meanio');

var Module = mean.Module;
var User = new Module('mean-user');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
User.register(function(app, auth, database) {

    //We enable routing. By default the Package Object is passed to the routes
    User.routes(app, auth, database);

    return User;
});
