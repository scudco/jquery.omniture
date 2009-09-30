jQuery.fn.attachOmnitureClickMap = function(val) {
  return this.click(function() {
    if(typeof val === 'function'){
      s_objectID = val.call(this);
    } else {
      s_objectID = val;
    }
  });
};
