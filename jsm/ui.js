(function() {
  let dd  = document.getElementById("dd");
  let amt = document.getElementById("amt");
  var out = document.getElementById("out");
  var itemfilter = document.getElementById("itemfilter");
  var workbackwards = document.getElementById("workbackwards");
  let outtotals = document.getElementById("outtotals");

  let AlbionData = document.AlbionData;

  AlbionData.item_names.sort();

  let renderddopts = function(item_names) {
    dd.innerHTML = "";
    for ( let reso_name of item_names ) {
      let opt = document.createElement("option");
      opt.innerHTML = reso_name;

      let reso = AlbionData.get_resource(reso_name);
      if ( reso.has_tier ) {
        opt.className = "rlevel" +  reso.tier;
      }
      dd.appendChild(opt);
    }
  };

  let simple_names = AlbionData.filter_createable(AlbionData.item_names_copy());
  renderddopts(simple_names);

  let eat_whitespace = function(term) {
    term = term.replace(/^\s+/, "");
    term = term.replace(/\s+$/, "");
    term = term.replace(/\s+/g, " ");
    return term;
  };

  let calc_bom = undefined;

  let auto_change_input = function() {
    if( marker ) { window.clearTimeout(marker); }
    marker = window.setTimeout(function(){ marker = false;  calc_bom() }, 150);
  };

  let itemFilter_debounce = false;
  itemfilter.addEventListener("keyup", function() {
    if ( itemFilter_debounce ) { window.clearTimeout( itemFilter_debounce ) }
    itemFilter_debounce = window.setTimeout(function() {
      let search = eat_whitespace(itemfilter.value);
      AlbionData.log("Search", search);
      if ( search.length < 1 ) {
        return renderddopts(simple_names);
      }
      let res = search.match(/(?:^|\s)T(?:ier|eir|)(?:\s*)([0-8]+)(?:$|\s)/i);
      let out = AlbionData.filter_createable(AlbionData.item_names_copy());

      if ( res != null ){
        AlbionData.log("Teir Search", res[1]);
        out = AlbionData.filter_tier( out, res[1] );
        search = search.replace(/(?:^|\s)T(?:ier|eir|)(?:\s*)(?:[0-8]+)(?:$|\s)/i, "");
        search = eat_whitespace(search);
      }
      if ( search.length > 0 ) {
        /* Fallback search by term */
        AlbionData.log("Generic Search", search);
        for ( let subword of search.split(/\s+/) ) {
          out = AlbionData.filter_keyword( out, subword );
        }
      }
      if ( out.length < 1  ) {
        itemfilter.classList.add("invalid");
        return;
      } else {
        itemfilter.classList.remove("invalid");
        auto_change_input();
      }
      return renderddopts(out);

    }, 150);
  });


  let mkCostModel = function( resource, amt, depth ) {
    if ( typeof amt == "undefined" ) {
      amt = 1;
    }
    if ( typeof depth == "undefined" ) {
      depth = 1;
    }

    let model_data = {
      initial_amt: amt,
      resource: resource,
      have: 0,
      display_needed: amt,
      currently_needed: amt,
      resource_data: AlbionData.get_resource(resource),
      update_fns: [],
      is_transmutation: false,
    };

    if ( workbackwards.checked ) {
      model_data.have = model_data.initial_amt;
    }
    for ( let needed_resource of model_data.resource_data.resource_names ) {
      if ( typeof model_data['children'] == "undefined" ) {
        model_data.children = [];
      }
      let my_needed_resource = needed_resource;
      let chld = mkCostModel(
        needed_resource,
        model_data.resource_data.resources_needed(my_needed_resource, amt ),
        depth + 1
      );
      model_data.children.push( chld );
      model_data.update_fns.push( function() {
        chld.setNeeded(
          model_data.resource_data.resources_needed(my_needed_resource, model_data.display_needed)
        );
      });
    }
    if ( model_data.resource_data.can_transmute ) {
      for ( let needed_resource of model_data.resource_data.transmute_from_names ) {
        if ( typeof model_data['children'] == "undefined" ) {
          model_data.children = [];
        }
        let my_needed_resource = needed_resource;
        let chld = mkCostModel(
          needed_resource,
          model_data.resource_data.resources_needed(my_needed_resource, amt ),
          depth + 1
        );
        chld.is_transmutation = true;
        model_data.children.push( chld );
        model_data.update_fns.push( function() {
          chld.setNeeded(
            model_data.resource_data.resources_needed(my_needed_resource, model_data.display_needed)
          );
        });
      }
    }


    model_data.setNeeded = function( namt ) {
      AlbionData.log("[%s] setNeeded", depth, model_data.resource, namt );
      model_data.currently_needed = Number.parseInt( namt );
      model_data.update();
    };
    model_data.setHave = function( namt ) {
      model_data.have = Number.parseInt( namt );
      AlbionData.log("[%s] setHave", depth, model_data.resource, namt );
      model_data.update();
    };
    model_data.update = function() {
      model_data.display_needed = model_data.currently_needed - model_data.have;
      if ( model_data.display_needed < 1 ) {
        model_data.display_needed = 0;
      }
      for ( let child of model_data.update_fns ) {
        child();
      }
    };
    if ( depth == 1 ) {
      AlbionData.log(model_data);
    }

    return model_data;
  };
  let newTotal = function( ) {
    let me = {
      sequence_id: 0,
      items: { },
      update_hooks: [],
    };

    me.add_item = function ( item ) {
      let uuid = me.sequence_id;
      me.sequence_id++;
      me.items[uuid] = item;
      AlbionData.log("Add item", uuid, item );
      me.on_update();
      return uuid;
    };

    me.remove_item = function ( uuid ) {
      AlbionData.log("Remove item", uuid );
      delete me.items[uuid];
      me.on_update();
    };

    me.update_item = function( uuid, item ) {
      AlbionData.log("Update item", uuid, item );
      me.items[uuid] = item;
      me.on_update();
    };

    me.get_totals = function( ) {
      let totals = {};
      for ( let item_id in me.items ) {
        if ( !me.items.hasOwnProperty(item_id) ) {
          continue;
        }
        for ( let item_name in me.items[item_id] ) {
          if ( !me.items[item_id].hasOwnProperty(item_name) ) {
            continue;
          }
          if( !totals.hasOwnProperty(item_name) ) {
            totals[item_name] = 0;
          }
          totals[item_name] = totals[item_name] + me.items[item_id][item_name];
        }
      }
      for ( let total_name in totals ) {
        if( totals.hasOwnProperty(total_name) && totals[total_name] == 0 ) {
          delete totals[total_name];
        }
      }
      return totals;
    };

    me.on_update = function() {
      let totals = me.get_totals();
      console.log("totals", totals);
      for ( let callback of me.update_hooks ) {
        callback( totals );
      }
    };
    return me;
  };

  let gen_reso_line = function( model, totals, depth ) {
    if ( typeof depth == "undefined" ) {
      depth = 1;
    }

    let xdiv = document.createElement("div");
    xdiv.className = "resource_group resource_" + depth;
    if ( model.resource_data.has_tier  ) {
      xdiv.className = xdiv.className + " rlevel" + model.resource_data.tier;
    }
    if ( model.is_transmutation ) {
      xdiv.classList.add("transmutation");
    }

    let divname = document.createElement("span");
    divname.className = "resoname";
    divname.textContent = model.resource;
    xdiv.appendChild(divname);

    let divcnt = document.createElement("span");
    divcnt.className = "resocount";
    divcnt.textContent = model.initial_amt;
    xdiv.appendChild(divcnt);

    let have_amt_label = document.createElement("label");
    have_amt_label.textContent = "Have"
    have_amt_label.className = "have_label";
    xdiv.appendChild(have_amt_label);

    let have_amt = document.createElement("input");
    have_amt.type = "text"
    have_amt.className = "have_amt";
    xdiv.appendChild( have_amt );

    let include_total_label = document.createElement("label");
    include_total_label.textContent = "Include In Resource Totals"
    include_total_label.className = "include_total_label";
    xdiv.appendChild(include_total_label);

    let include_total = document.createElement("input");
    include_total.type = "checkbox";

    let my_total_id = false;
    let child_nodes = [];
    xdiv.AlbionData = {};

    xdiv.AlbionData.set_checked = function( checked ) {
      if ( checked == include_total.checked ) {
        return;
      }
      if ( checked ) {
        include_total.checked = true;
        xdiv.AlbionData.checked_trigger( true );
      };
      include_total.checked = false;
      xdiv.AlbionData.checked_trigger(false);
    };
    xdiv.AlbionData.set_checked_recursive = function( checked ) {
      xdiv.AlbionData.set_checked( checked );
      for ( let child of child_nodes ) {
            child.AlbionData.set_checked_recursive(false);
      }
    };

    xdiv.AlbionData.checked_trigger = function( checked ) {
      var ticket = {};
      ticket[model.resource] = model.display_needed;

      if ( my_total_id === false ) {
        if ( checked ) {
          my_total_id = totals.add_item(ticket);
          return;
        }
      } else {
        if ( checked ) {
          totals.update_item( my_total_id, ticket );
          return;
        } else {
          AlbionData.log("Unchecked, id: ", my_total_id );
          totals.remove_item(my_total_id);
          my_total_id = false;
        }
      }
    };

    if ( !model.is_transmutation && depth > 1 ) {
      include_total.checked = true;
      var ticket = {};
      ticket[model.resource] = model.initial_amt;
      my_total_id = totals.add_item(ticket);
    } else {
      totals.on_update();
    }

    include_total.className = "include_total";
    xdiv.appendChild(include_total);

    let timeout_debounce = false;
    have_amt.addEventListener("keyup", function() {
      if ( timeout_debounce ) { window.clearTimeout( timeout_debounce ); }
      timeout_debounce = window.setTimeout(function() {
        if ( have_amt.value == "" ) {
          return model.setHave( Number.parseInt( 0 ) );
        }
        let amtv = Number.parseInt( have_amt.value );
        if ( ( "" + amtv ) == "NaN" ) {
          return model.setHave( Number.parseInt( 0 ) );
        }
        model.setHave( amtv );
        if ( my_total_id !== false ) {
          var ticket = {};
          ticket[model.resource] = model.display_needed;
          totals.update_item( my_total_id, ticket );
        }
      }, 150);
    });

    include_total.addEventListener("change", function() {
      xdiv.AlbionData.checked_trigger( include_total.checked );
    });

    let child_node = false;


    if ( typeof model['children'] != "undefined" ) {
      child_node = document.createElement("div");
      child_node.className = "components";
      for( let child of model['children'] ) {
        var inner_child = gen_reso_line( child, totals, depth + 1 );
        child_nodes.push( inner_child );
        child_node.appendChild( inner_child );
      }
      xdiv.appendChild( child_node );
    }
    let autohide = function() {
      divcnt.textContent = model.display_needed;
      if ( model.display_needed < 1 && child_node ) {
        child_node.classList.add("hidden");
        xdiv.AlbionData.set_checked_recursive( false );
      } else if ( child_node ) {
        child_node.classList.remove("hidden");
      }
    };
    model.update_fns.push(autohide);
    if ( depth > 1 ) {
      have_amt.value = model.have;
      model.setHave(have_amt.value);
    } else {
      have_amt.value = 0;
      model.setHave(0);
    }

    return xdiv;
  };

  calc_bom = function() {
    let camt = Number.parseInt(amt.value);
    if ( "" + camt  == "NaN" ) {
      camt = 1;
      amt.value = "1";
    } else if ( ( "" + camt  ) != amt.value ) {
      amt.value = camt;
    }
    out.innerHTML = "";
    if ( camt < 1 ) {
      return;
    }

    let resource = dd.value;
    let resource_mats = AlbionData.get_resources(resource);
    AlbionData.costModel = mkCostModel( resource, camt );
    let totalCosts = newTotal();
    let draw_bounce = false;
    totalCosts.update_hooks.push(function(totals) {
      if ( draw_bounce !== false ) { window.clearTimeout(draw_bounce) }
      draw_bounce = window.setTimeout( function() {
        outtotals.innerHTML = "";
        let header = document.createElement("h2");
        header.textContent = "Totals";
        outtotals.appendChild(header);
        let ul = document.createElement('ul');
        let keys = [];
        for ( let key in totals ) {
          if ( totals.hasOwnProperty( key ) ) {
            keys.push(key);
          }
        }
        keys.sort();
        for ( let key of keys ) {
          if ( totals.hasOwnProperty( key ) ) {
            let resodata = AlbionData.get_resource( key );

            let container = document.createElement("li");
            container.className = "resource_group";
            if ( resodata.has_tier ) {
              container.classList.add("rlevel" + resodata.tier );
            }

            let obj  = document.createElement("span");
            obj.className ="resoname";
            obj.textContent = key;

            container.appendChild(obj);

            let num = document.createElement("span");
            num.className = "resocount";
            num.textContent = totals[key];

            container.appendChild(num);

            ul.appendChild(container);
          }
        }
        outtotals.appendChild(ul);
      }, 150 );
    });
    let header = document.createElement("h2");
    header.textContent = "Breakdown";
    out.appendChild(header);
    out.appendChild(gen_reso_line( AlbionData.costModel, totalCosts, 1 ));
  };
  let marker = false;
  dd.addEventListener("change", auto_change_input);
  dd.addEventListener("mouseup", auto_change_input);
  amt.addEventListener("keyup", auto_change_input);
  workbackwards.addEventListener("change", auto_change_input );
})();
