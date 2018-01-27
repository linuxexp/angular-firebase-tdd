angular.module("angular-common")
    .controller("HomeController", function($scope, $mdBottomSheet, Firebase) {

        const fireAuth = Firebase.auth();
        const fireDatabase = Firebase.database();
        const fireMessaging = Firebase.messaging();

        const saveFCM = function() {

            fireMessaging.getToken().then(function(currentToken) {
                if (currentToken) {
                    console.log('Got FCM device token:', currentToken);
                    fireDatabase.ref('/fcmTokens').child(currentToken)
                        .set(fireAuth.currentUser.uid);
                } else {
                    requestNotificationPerms();
                }
            }).catch(function () {
                console.log("Unable to get FCM for device");
            })
        };

        const requestNotificationPerms = function() {
            fireMessaging.requestPermission()
                .then(function() {
                    saveFCM();
                })
        };

        $scope.onAuthChange = function(user) {
            $scope.user = user;
            console.log("user ", fireAuth.currentUser);
            if (user) {
                requestNotificationPerms();
            }
        };

        fireAuth.onAuthStateChanged($scope.onAuthChange);

        $scope.login = function() {
          const loginProvider = new Firebase.auth.GoogleAuthProvider();
          fireAuth.signInWithPopup(loginProvider);
        };

        $scope.logout = function() {
          fireAuth.signOut();
        };

        let messageDb;

        $scope.$watch("user", function(user) {
           $scope.messages = $scope.messages || {};
           if (user) {
               messageDb = fireDatabase.ref("messages");

               messageDb.off();

               const setMessage = function (data) {
                   const val = data.val();
                   $scope.$evalAsync(function () {
                       $scope.messages[data.key] = val;
                   });
                   console.log("Data ", val);
               };

               messageDb.limitToLast(12).on("child_added", setMessage);
               messageDb.limitToLast(12).on("child_changed", setMessage);
           } else {
               $scope.messages = {};
           }
        });

        $scope.sendMessage = function() {
          if ($scope.message && $scope.message.text && messageDb) {
              console.log("Saving ... ", $scope.message);
              if ($scope.user) {

                  let messageRecord = {
                      name: $scope.user.displayName,
                      text: $scope.message.text,
                      photoUrl: $scope.user.photoURL || 'http://i.pravatar.cc/300'
                  };

                  if ($scope.file) {
                      messageRecord.imageUrl = "http://via.placeholder.com/350x150"
                  }

                  messageDb.push(messageRecord).then(function(data) {
                     $scope.message.text = "";

                     if($scope.file) {
                         var filePath = $scope.user.uid + '/' + data.key + '/' + $scope.file.name;
                         return Firebase.storage().ref(filePath).put($scope.file).then(function(snapshot) {
                            console.log("IMG snapshot ", snapshot);
                            return data.update({
                                imageUrl: snapshot.metadata.downloadURLs[0]
                            });
                         });
                     }

                     return;
                  });
              }
          }
        };

        $scope.addImage = function() {
          document.querySelector("#imgFile").click();
        };

        document.querySelector("#imgFile").onchange = function(event) {
          var file = event.target.files[0];
          $scope.file = file;
          console.log("FILE ", file);
            if (!file.type.match('image.*')) {
                alert("Can only add images");
            }
        };

    });

require("./home.view.html");
require("./home.scss");
require("provider/firebase.provider.js");