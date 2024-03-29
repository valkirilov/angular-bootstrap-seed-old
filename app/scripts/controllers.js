'use strict';

var AppControllers = angular.module('myApp.controllers', []);

AppControllers.controller('AboutController', ['$scope', '$rootScope',
    function($scope, $rootScope) {

        $scope.login = function() {

            var email = $scope.login.email;
            var password = $scope.login.password;

            console.log($rootScope.auth);

            $rootScope.auth.login('password', {
                email: email,
                password: password
            });

        };

        $scope.logout = function() {
            $rootScope.auth.logout();
        };

        $scope.fridge = {
            name: "Fridge",
            level: 5
        };
        console.log($scope.fridge);

    }]);

AppControllers.controller('GlobalController', ['$scope', '$rootScope', '$location', 'gettextCatalog',
    function($scope, $rootScope, $location, gettextCatalog) {

        // $rootScope.firebaseRef = new Firebase('https://vivid-fire-2367.firebaseio.com');
        // $rootScope.auth = new FirebaseSimpleLogin($rootScope.firebaseRef, function(error, user) {
        //     if (error) {
        //         console.log('Authentication error: ', error);
        //     } else if (user) {
        //         console.log('User ' + user.id + '.' + user.email + ' is authenticated via the ' + user.provider + ' provider!');
        //
        //         var isNewUser = true; // For now
        //         if( isNewUser ) {
        //             $rootScope.firebaseRef.child('users').child(user.uid).set({
        //                 displayName: user.email,
        //                 provider: user.provider,
        //                 provider_id: user.id
        //             });
        //         }
        //
        //         $rootScope.$apply(function () {
        //             $rootScope.user = user;
        //             $location.path('/home');
        //         });
        //     } else {
        //         console.log("User is logged out.")
        //
        //         $rootScope.$apply(function () {
        //             $rootScope.user = user;
        //             //$location.path('/login');
        //         });
        //     }
        // });

      $scope.lang = "bg";

      $scope.setLanguage = function(language) {
          alert('Setting ' + language);
          gettextCatalog.currentLanguage = language;
      };


    }]);
