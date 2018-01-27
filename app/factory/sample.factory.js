angular.module('angular-common')
    .factory('SampleFactory', function (Firebase) {
        console.log("firebase ",Firebase);
        // Stub obj for Unit Testing, check tests under root/tests/
        return {
            get: () => "get",
            set: () => "set"
        }
    });

require("provider/firebase.provider.js");