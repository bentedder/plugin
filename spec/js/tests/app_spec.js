describe("A suite", function() {
  beforeEach(function() {
    new myThing();
  })
  it("contains spec with an expectation", function() {
    expect(helloworld).toBe("hi");
  });
});