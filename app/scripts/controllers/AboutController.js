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
