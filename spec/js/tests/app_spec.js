require([ "jquery", "app" ], function($, App) {

  describe("A suite", function() {
    beforeEach(function() {
      new App();
    })
    it("contains spec with an expectation", function() {
      expect(helloworld).toBe("hi");
    });
  });

})