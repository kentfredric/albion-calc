window.ArrayUtils = (function() {

  let utils  = {};

  utils.unique = function(array) {
      return Object.keys(array.reduce(function(acc,elem) {
          acc[elem] = true;
          return acc;
      },{}));
  };

  utils.extend = function(array_orig, array_new) {
    Array.prototype.push.apply( array_orig, array_new );
    return array_orig;
  }

  return utils;
})();
