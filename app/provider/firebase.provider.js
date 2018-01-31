/**
 * Created by raja on 25/01/18.
 */
const firebase = require("node_modules/firebase");
const firestore = require("@firebase/firestore");

angular.module("angular-common")
    .provider("Firebase", function () {

        return {
            config: function(config) {
                if (!firebase.apps.length) {
                    firebase.initializeApp(config);
                }
            },
            $get: function() {
                return firebase;
            }
        }
    });