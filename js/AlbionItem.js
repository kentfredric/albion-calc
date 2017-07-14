window.AlbionItem = (function(ArrayUtils) {

  function AlbionItem(  name, resources, attributes ) {
    this.name       = name;
    this.resources  = resources  || {};
    this.attributes = attributes || {};
  };

  AlbionItem.prototype.has_tier = function() {
    return this.attributes.hasOwnProperty('tier');
  };

  AlbionItem.prototype.tier = function() {
    return this.attributes.hasOwnProperty('tier')
      ? this.attributes.tier
      : 1;
  };

  AlbionItem.prototype.is_tier = function ( tier ) {
    return this.attributes.hasOwnProperty('tier')
      && this.attributes.tier == tier;
  };

  AlbionItem.prototype.has_attribute = function( attrname ) {
    return this.attributes.hasOwnProperty( attrname );
  };

  AlbionItem.prototype.get_attribute = function( attrname ) {
    return this.attributes.hasOwnProperty(attrname)
      ? this.attributes[attrname]
      : undefined;
  };

/* "Required" resources only apply to non-transmutation requirements */
  AlbionItem.prototype.crafting_resource_names = function() {
    let out = [];
    for ( let needed_resource in this.resources ) {
      if ( this.resources.hasOwnProperty(needed_resource) ) {
        out.push( needed_resource );
      }
    }
    out.sort();
    return out;
  };

  AlbionItem.prototype.crafting_requires = function (resource) {
    return this.resources.hasOwnProperty( resource );
  };

  AlbionItem.prototype.get_crafting_cost = function (resource) {
    return this.resources.hasOwnProperty( resource )
      ? this.resources[resource]
      : 0;
  };

  AlbionItem.prototype.transmuting_resource_names = function() {
    let out = [];
    if ( this.attributes.hasOwnProperty('transmute_from') ) {
      for ( let needed_resource in this.attributes.transmute_from ) {
        if ( this.attributes.transmute_from.hasOwnProperty(needed_resource) ) {
          out.push( needed_resource );
        }
      }
    }
    out.sort();
    return out;
  };

  AlbionItem.prototype.transmutable = function() {
    return this.attributes.hasOwnProperty('transmute_from');
  };
  AlbionItem.prototype.transmuting_requires = function (resource) {
    return this.attributes.hasOwnProperty('transmute_from')
      && this.attributes.transmute_from.hasOwnProperty(resource);
  };
  AlbionItem.prototype.get_transmuting_cost = function (resource) {
    return this.attributes.hasOwnProperty('transmute_from')
      && this.attributes.transmute_from.hasOwnProperty(resource)
      ? this.attributes.transmute_from[resource]
      : 0;
  };

  AlbionItem.prototype.all_resource_names = function() {
    return ArrayUtils.unique( ArrayUtils.extend( [], this.crafting_resource_names(), this.transmuting_resource_names() ) );
  }

  AlbionItem.prototype.get_cost = function (resource) {
    return this.resources.hasOwnProperty(resource)
      ? this.resources[resource]
      : this.attributes.hasOwnProperty('transmute_from') && this.attributes.transmute_from.hasOwnProperty(resource)
      ? this.attributes.transmute_from[resource]
      : 0;
  }

  return AlbionItem;
})(ArrayUtils);
