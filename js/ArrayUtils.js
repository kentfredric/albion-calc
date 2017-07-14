window.ArrayUtils = (function() {

  let utils  = {};

  utils.unique = function(array) {
      return Object.keys(array.reduce(function(acc,elem) {
          acc[elem] = true;
          return acc;
      },{}));
  };

  utils.extend = function(array_orig) {
    for ( let i = 1; i < arguments.length; i++ ) Array.prototype.push.apply( array_orig, arguments[i] );
    return array_orig;
  }

  return utils;
})();
