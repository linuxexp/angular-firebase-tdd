[![Build Status](https://travis-ci.org/linuxexp/angular-firebase-tdd.svg?branch=master)](https://travis-ci.org/linuxexp/angular-firebase-tdd)

Boilerplate code to build TDD/BDD scalable infrastructure

## Sample app
https://angular-firebase-tdd.firebaseapp.com/

To Get Started
==

Clone my
https://github.com/linuxexp/firebase-functions-tdd
, `firebase-functions-tdd` as submodule

```
git submodule init
git submodule update
```

Install node dependencies for project & sub-modules 
```
npm run install
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

## Deploy 

Deploy entire infrastructure, like a pro!
```bash
npm run deploy
```

You can also run dry run infra configurations.

Continuous Integration & Continuous Integration
===
Travis CICD is integrated by default. Integrating with any other CICD is trivial.


In the box
===========
* Webpack 2
* Webpack loaders for CSS, SCSS, ngTemplate-loader, HTML, Font, file-loader (png, jpeg, gif), json-loaders, uglifier
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
* Firebase
* FCM and service workers
* Firebase-auth
* Firebase-storage
* Firebase-databse
* Firebase-functions

Best of infrastructure practices

* Infrastructure as code, `infrastructure/` defines the codified infrastructure.
* Multiple namespaces for infrastructure (staging, alpha, beta...), it couldn't get easier than this, 
change app level config in `app/conf/firebase.json` and deploy pointing to new projectId.

`firebase deploy --project <project-id>`


License
==
Released under creative commons license, Be sure to add credits for me!.


## Testing FCM send

You'll need Server API Token, get it from, `https://console.firebase.google.com/u/0/project/angular-firebase-tdd/settings/cloudmessaging/`

Change `angular-firebase-tdd` to your `projectId`

```bash
curl -H "Content-Type: application/json" \
     -H "Authorization: key=<server-key>" \
     -d '{
           "notification": {
             "title": "New chat message!",
             "body": "There is a new message",
             "click_action": "http://localhost:5000"
           },
           "to": "<fcm-token>"
         }' \
     https://fcm.googleapis.com/fcm/send
```
