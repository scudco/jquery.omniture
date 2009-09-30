require("spec_helper.js");
require("../../jquery.omniture.js");

Screw.Unit(function(){
  describe("Omniture.clickmaps", function(){
    after(function(){ teardownFixtures(); s_objectID = undefined; });

    it("should attach the Omniture Clickmap with a string when an element is clicked", function() {
      fixture($('<a href="#">foo</a>'));
      $('a').attachOmnitureClickMap('foo')
      expect(typeof s_objectID).to(equal, 'undefined');
      $('a').click();
      expect(s_objectID).to(equal, 'foo');
      });

    it("should attach the Omniture Clickmap with a function when an element is clicked", function() {
      fixture($('<a href="#">bar</a>'));
      $('a').attachOmnitureClickMap(function() { return $(this).text(); });
      expect(typeof s_objectID).to(equal, 'undefined');
      $('a').click();
      expect(s_objectID).to(equal, 'bar');
      });
  });
});
