/**
 * Created by raja on 25/01/18.
 */

const fireConfig = require("conf/firebase.json");
const firebase = require("firebase/app");
require("firebase/messaging");

firebase.initializeApp({
    'messagingSenderId': fireConfig.messagingSenderId
});

const messaging = firebase.messaging();