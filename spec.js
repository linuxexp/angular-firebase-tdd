/**
 * Created by raja on 16/01/18.
 */
require("./app/libraries");
require('./app/app');
require('angular-mocks');

const context = require.context('./tests', true, /\.spec\.js/);
context.keys().forEach(context);

const cloud = require.context('./infrastructure/functions/tests', true, /\.spec\.js/);
cloud.keys().forEach(cloud);