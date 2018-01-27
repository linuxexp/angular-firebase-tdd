/**
 * Created by raja on 27/01/18.
 */
const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.addWelcome = functions.auth.user().onCreate(event => {
    const user = event.data;
    console.log('A new user signed in for the first time.');
    const fullName = user.displayName || 'Anonymous';

    return admin.database().ref('messages').push({
        name: 'CloudBot',
        text: `${fullName} signed in for the first time! Welcome!`
    }).then(() => console.log('Welcome message written to database.'));
});