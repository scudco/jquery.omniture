jQuery.fn.attachOmnitureClickMap = function(clickmap,options) {
  options = options || {};
  if(typeof clickmap === 'function') clickmap = clickmap.call(this);
  return this.click(function() {
    s_objectID = clickmap;
    if(options.remote === true) s.tl();
  });
};

