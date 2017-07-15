(function() {
  var AlbionData = {
    items:      {},
    item_names: [],
    log_items:  [],
    keep_logs:  false,
    print_logs: false
  };
  document.AlbionData = AlbionData;

  let legal_attributes = {
    tier: function(value) {
      if ( 1 > value  ) {
        throw "Invalid tier: " + value + " < 1";
      }
      if (value > 8 ) {
        throw "Invalid tier: " + value + " > 8";
      }
    },
    transmute_from: function( resource_map ) {
      for ( let key in resource_map ) {
        if ( !resource_map.hasOwnProperty(key) ) {
          continue;
        }
        if( typeof AlbionData.items[key] == "undefined" ) {
          throw "Resource " + key + " not already defined";
        }
      }
    },
    keywords: function( array ) {
      return true;
    }
  };

  AlbionData.item_names_copy = function() {
    let out = [];
    Array.prototype.push.apply(out, AlbionData.item_names);
    return out;
  };

  AlbionData.filter_itemlist = function( itemlist, callback ) {
    let out = [];
    for ( let item of itemlist ) {
      let itemdata = AlbionData.get_resource(item);
      if ( callback(itemdata, item) ) {
        out.push(item);
      }
    }
    return out;
  }

  AlbionData.filter_tier = function( itemlist, tier ) {
    return AlbionData.filter_itemlist( itemlist, function(item) {
      return item.has_tier && item.tier == tier;
    });
  }
  AlbionData.filter_craftable = function( itemlist ) {
    return AlbionData.filter_itemlist( itemlist, function(item) {
      return item.can_craft;
    });
  }
  AlbionData.filter_createable = function( itemlist ) {
    return AlbionData.filter_itemlist( itemlist, function(item) {
      return item.can_create;
    });
  }


  AlbionData.filter_keyword = function( itemlist, keyword ) {
    let sterm = keyword.toLowerCase();
    return AlbionData.filter_itemlist( itemlist, function(item, name) {
      if ( name.toLowerCase().indexOf(sterm) > -1 ) {
        return true;
      }
      if ( item.has_keywords ) {
        for ( let keyword of item.keywords ) {
          if ( keyword.indexOf(sterm) > -1 ) {
            return true;
          }
        }
      }
      return false;
    });
  }

  AlbionData.add_item = function( name, resources, attributes ) {
    if( typeof AlbionData.items[name] != "undefined" ) {
      throw "Field: " + name + " already defined";
    }
    if ( typeof resources == "undefined" ) {
      resources = {};
    }
    if ( typeof attributes == "undefined" ) {
      attributes = {};
    }

    let resource = {
      resources: {},
      attributes: {},
    };

    for ( let key in resources ) {
      if ( !resources.hasOwnProperty(key) ) {
        continue;
      }
      if( typeof AlbionData.items[key] == "undefined" ) {
        throw "Field: " + key + " of " + name + " not already defined";
      }
      resource.resources[key] = resources[key];
    }
    for ( let key in attributes ) {
      if ( !attributes.hasOwnProperty(key) ) {
        continue;
      }
      if( typeof legal_attributes[key] == "undefined" ) {
        throw "Attribute: " + key + " of " + name + " not legal";
      }
      legal_attributes[key]( attributes[key] );
      resource.attributes[key] = attributes[key];
    }
    AlbionData.items[name] = resource;
    AlbionData.item_names.push(name);
  };
  AlbionData.get_resources = function( name ) {
    if ( typeof AlbionData.items[name] == "undefined" ) {
      throw "Can't get costs for: " + resource;
    }
    return AlbionData.items[name].resources;
  };
  AlbionData.get_resource = function( name ) {
    if ( typeof AlbionData.items[name] == "undefined" ) {
      throw "No such resource: " + resource;
    }
    let data_internal = AlbionData.items[name];
    let data = {
      resources: data_internal.resources,
      attributes: data_internal.attributes,
      can_create: false,
      can_transmute: false,
      can_craft: false
    };

    data.has_tier   = ( typeof data.attributes['tier'] != "undefined" );

    if ( data.has_tier ) {
      data.tier = data.attributes["tier"];
    }
    data.is_tier    = function( tier ) {
      if ( data.has_tier ) { return data.tier == tier }
      return false;
    };
    data.resource_names = [];

    for ( let needed_resource in data.resources ) {
      if ( data.resources.hasOwnProperty(needed_resource) ) {
        data.resource_names.push(needed_resource);
        data.can_craft  =true;
        data.can_create =true;
      }
    }
    data.resource_names.sort();
    data.resources_needed = function( name, amt ) {
      if ( data.can_transmute && typeof data.transmute_from[name] != "undefined" ) {
        return data.transmute_from[name] * amt;
      }
      return data.resources[name] * amt;
    };

    if ( typeof data.attributes['transmute_from'] != "undefined" ) {
      data.can_transmute = true;
      data.can_create    = true;
      data.transmute_from_names = [];
      for ( let needed_resource in data.attributes['transmute_from'] ) {
        if ( data.attributes['transmute_from'].hasOwnProperty(needed_resource) ) {
         data.transmute_from_names.push(needed_resource);
        }
      }
      data.transmute_from = data.attributes['transmute_from'];
    }
    data.has_keywords = false;
    if ( typeof data.attributes['keywords'] != "undefined" ) {
      data.has_keywords = true;
      data.keywords = [];
      for ( let keyword of data.attributes['keywords'] ) {
        data.keywords.push( keyword.toLowerCase() );
      }
      data.keywords.sort();
    }
    return data;
  };
  AlbionData.log = function() {
    if( AlbionData.print_logs ) {
      return console.log.apply(console, arguments);
    }
    if ( AlbionData.keep_logs ) {
      AlbionData.log_items.push(arguments);
    }
  };
  AlbionData.print_log = function() {
    if ( !AlbionData.keep_logs ) {
      return;
    }
    for ( let row of AlbionData.log_items ) {
      console.log.apply(console, row);
    }
  };
})();
