jQuery.fn.attachOmnitureClickMap = function(clickmap,options) {
  options = options || {};
  return this.live('click', function() {
    s_objectID = (typeof clickmap === 'function') ? clickmap.call(this) : clickmap
    if(options.remote === true) s.tl(true,'o');
  });
};

