/**
 * Created by raja on 07/05/17.
 */

const fireConfig = require("conf/firebase.json");

var app = angular.module('angular-common', ['ui.router', 'ngMaterial']);
app.config(function($stateProvider, $urlRouterProvider, FirebaseProvider) {

    const config = fireConfig;

    FirebaseProvider.config(config);

    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/home/home.view.html',
            controller: 'HomeController'
        })
});

require("./index.html");
require("common/css/global.css");
require("views/home/home.controller.js");
require("factory/sample.factory.js");

require("provider/firebase.provider.js");