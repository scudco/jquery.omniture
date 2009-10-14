jQuery.fn.attachOmnitureClickMap = function(clickmap,options) {
  options = options || {};
  return this.click(function() {
    s_objectID = (typeof clickmap === 'function') ? clickmap.call(this) : clickmap
    if(options.prefix) s_objectID = options.prefix + s_objectID;
    if(options.remote === true) s.tl(true,'o',s_objectID);
  });
};

