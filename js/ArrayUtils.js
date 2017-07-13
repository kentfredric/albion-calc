window.ArrayUtils = (function() {

  let utils  = {};

  utils.unique = function(array) {
      return Object.keys(array.reduce(function(acc,elem) {
          acc[elem] = true;
          return acc;
      },{}));
  };

  return utils;
})();
