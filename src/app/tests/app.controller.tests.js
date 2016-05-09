describe('Application Controller', function() {
    beforeEach(module("app"));
    
    var $controller;
    
     beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));
    
    describe('When calling GreetMe', function() {
        
        it("The Scope variable greeting is set to 'Hello World'", function() {
            var $scope = {};
            
            var controller = $controller("AppController", {$scope:$scope});
            
            $scope.greetMe();
            expect($scope.greeting).toBe("Hello World")
        });
    });
});
    
    