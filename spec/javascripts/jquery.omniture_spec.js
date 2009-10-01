require("spec_helper.js");
require("../../jquery.omniture.js");

Screw.Unit(function(){
  describe("Omniture.clickmaps", function(){
    before(function(){ 
      s_objectID = undefined; 
      omnitureClickmapSent = false;
      s = {}; // global. omniture fails epicly.
      });

    after(function() { teardownFixtures(); });

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

    it("should send the Omniture Clickmap(function) when an element which doesn't leave the page is clicked", function() {
      fixture($('<a href="#">baz</a>'));
      mock(s).should_receive("tl").with_arguments(true,'o','baz').at_least(1, "times");

      $('a').attachOmnitureClickMap(function() { return $(this).text(); }, {remote: true});
      expect(typeof s_objectID).to(equal, 'undefined');

      $('a').click();
      expect(s_objectID).to(equal, 'baz');
      });

    it("should send the Omniture Clickmap(string) when an element which doesn't leave the page is clicked", function() {
      fixture($('<a href="#">baz</a>'));
      mock(s).should_receive("tl").with_arguments(true,'o','boo').at_least(1, "times");

      $('a').attachOmnitureClickMap('boo', {remote: true});
      expect(typeof s_objectID).to(equal, 'undefined');

      $('a').click();
      expect(s_objectID).to(equal, 'boo');
      });
  });
});
