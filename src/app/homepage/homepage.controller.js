(function(angular){

    angular.module("app")
        .controller("HomepageController", homepageController);

function homepageController(){
    var vm = this;

    vm.greeting = "";
    vm.greetUser = _greetUser

    function _greetUser(){
        vm.greeting= "Hello User";
    }
}
})(angular);