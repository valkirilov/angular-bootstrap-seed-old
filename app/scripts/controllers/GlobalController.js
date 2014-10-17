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
