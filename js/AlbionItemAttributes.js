window.AlbionItemAttributes = (function() {

  let fns = {};

  /* Note: identity records exist for case-folding
   *       and pass-through */
  let name_coercion_map = {
    "t"             : "tier",
    "teir"          : "tier",
    "tier"          : "tier",
    "transmute_from": "transmute_from",
    "transmute-from": "transmute_from"
  };

  fns.coerce_attribute_name = function( name ) {
    let lc = name.toLowerCase();
    return lc in name_coercion_map
      ? name_coercion_map[lc]
      : name;
  };

  fns.validate_attribute_name = function( name ) {
    if ( name in name_coercion_map ) return true;
    throw "Invalid attribute name: '" + name + "'";
  };

  let value_coercion_map = { }; /* todo */

  let value_validation_map = {
    tier: function( name, value ) {
      if ( value < 1 ) throw "Invalid tier '" + value + "', smaller than 1";
      if ( value > 8 ) throw "Invalid tier '" + value + "', greater than 8";
    },
    transmute_from: function( name, value ) {
      return true;
    },
  };

  fns.coerce_value = function( name, value ) {
    return name in value_coercion_map
      ? value_coercion_map[name](value)
      : value;
  };

  fns.validate_value = function( name, value ) {
    if ( name in value_validation_map ) return value_validation_map[name](name, value);
    throw "Invalid attribute name: '" + name + "'";
  };

  return fns;
})();
