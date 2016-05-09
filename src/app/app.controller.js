angular.module("app")
.controller("AppController", ["$scope", AppController]);

function AppController($scope){
    $scope.greeting= "";
        
    $scope.greetMe = function(){
        $scope.greeting= "Hello World";
    }
}
    