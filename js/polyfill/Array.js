(function() {
  if ( Array.prototype.unique === undefined ) {
    Array.prototype.unique = function() {
      return Object.keys(this.reduce(function(acc,elem) {
          acc[elem] = true;
          return acc;
      },{}));
    };
  }
})();
