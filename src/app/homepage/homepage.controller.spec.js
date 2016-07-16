describe('On the homepage', function() {
    beforeEach(module("app"));
    
    var $controller;
    
    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));
    
    describe('When clicking the greet me button', function() {
        it("A 'Hello User' message is displayed to the user", function() {
            // ARANGE
            var controller = $controller("HomepageController");
            
            // ACT
            controller.greetUser();

            // ASSERT
            expect(controller.greeting).toBe("Hello User")
        });
    });
});