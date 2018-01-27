[![Build Status](https://travis-ci.org/linuxexp/angular-material-common.svg?branch=master)](https://travis-ci.org/linuxexp/angular-material-common)

Boilerplate code to build full-blown Test Driven apps using angular, angular-material, Travis CICD

To Get Started
==

Install node dependencies 
```
npm install
```

Install bower dependencies 
```
bower install
```

Start development server 
```
npm start
```

Development can be accessed at `http://localhost:8080/`

Build distribution package 
```
npm run build
```

You can preview the build locally using python's SimpleHTTPServer module like
```bash
cd dist/
python -m SimpleHTTPServer
```

Build can be accessed at `http://localhost:8000/`

Run Unit Tests
```
npm test
```

Continuous Integration & Continuous Integration
===
Travis CICD is integrated by default. Integrating with any other CICD is trivial.


In the box
===========
* Webpack 2
* Webpack loaders for CSS, SCSS, ngTemplate-loader, HTML, Font, file-loader (png, jpeg, gif)
* Babel ES6
* Webpack Development Server
* AngularJS
* Angular-ui-router
* Angular-material
* Material design icons
* Lodash
* Travis CICD
* Karma
* Mocha
* Chai
* Angular-mocks

License
========
Released under creative commons license


## FCM send

https://console.firebase.google.com/u/0/project/angular-firebase-tdd/settings/cloudmessaging/

```bash
curl -H "Content-Type: application/json" \
     -H "Authorization: key=AAAAXWadt5g:APA91bHrbEx3zowtH6pATes2Ey63GaDypSiFJ_yXT-9OOEYedu9NhWvSL4mp4DdMcEjhzYZ4cdh0AFD7ObLc4GSlPWH3QTMBYEIPTUcaACPfpJH9VW2hCq2KyeQsVwBHCPsW0amUVhfK" \
     -d '{
           "notification": {
             "title": "New chat message!",
             "body": "There is a new message in FriendlyChat",
             "icon": "/images/profile_placeholder.png",
             "click_action": "http://localhost:5000"
           },
           "to": "fmzdq2wnMLA:APA91bH-JEL0yZZhibH-_DnN2BskCicjinkcl6DzbPjPxH0egwF6itaEzRbz5SrjtBwsiP6QofB3icY5n0a2rPxUuXNZWYh8AeltIXoCA_20HHvfHwzKcSWhaVtbzi7XFiWScHUy0-kA"
         }' \
     https://fcm.googleapis.com/fcm/send
```

## Deploy database

```
firebase deploy --only database --project angular-firebase-tdd
```

## Node version > 6.11, 6.12.3
