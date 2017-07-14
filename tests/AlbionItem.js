window.add_suite(function(){
  subtest("AlbionItem", function() {
    subtest("No Reso/Attrs", function() {

      let item = new AlbionItem( "stone" );

      is( item.has_tier() , false , "No tier specified" );
      is( item.tier()     , 1     , "Fallback teir is 1");
      is( item.is_tier(1) , false , "Items without tier cant be == a tier" );
      is( item.has_attribute("invalid"), false    , "Invalid attributes don't exist");
      is( item.get_attribute("invalid"), undefined, "Invalid attributes return undef");

      ok( Array.isArray( item.crafting_resource_names()), "crafting resource names is an array");
      is( item.crafting_resource_names().length , 0     , "Array is empty" );
      is( item.crafting_requires("invalid")     , false , "Invalid resources can't be required" );
      is( item.get_crafting_cost("invalid")     , 0     , "Invalid resources have 0 crafting cost" );

      ok( Array.isArray( item.transmuting_resource_names()), "transmuting resource names is an array");
      is( item.transmuting_resource_names().length, 0     , "Array is empty" );
      is( item.transmuting_requires("invalid")    , false , "Invalid resources can't be required" );
      is( item.get_transmuting_cost("invalid")    , 0     , "Invalid resources have 0 transmuting cost" );
      is( item.transmutable()                     , false , "Not a transmutable item" );
      ok( Array.isArray( item.all_resource_names()),        "all resource names is an array"  );
      is( item.all_resource_names().length         , 0     , "Array is empty"                 );
      is( item.get_cost("invalid")                 , 0     , "Invalid resources have 0 cost"  );
    });

    subtest("Basic", function() {

      let item = new AlbionItem( "stone", { "pebbles" : 5 } );

      is( item.has_tier() , false , "No tier specified" );
      is( item.tier()     , 1     , "Fallback teir is 1");
      is( item.is_tier(1) , false , "Items without tier cant be == a tier" );
      is( item.has_attribute("invalid"), false    , "Invalid attributes don't exist");
      is( item.get_attribute("invalid"), undefined, "Invalid attributes return undef");

      ok( Array.isArray( item.crafting_resource_names()), "crafting resource names is an array");
      is( item.crafting_resource_names().length , 1     , "Array has 1 item" );
      is( item.crafting_requires("pebbles")     , true  , "Resource requires pebbles" );
      is( item.get_crafting_cost("pebbles")     , 5     , "Resource requires 5 pebbles each" );

      ok( Array.isArray( item.transmuting_resource_names()), "transmuting resource names is an array");
      is( item.transmuting_resource_names().length, 0     , "Array is empty" );
      is( item.transmuting_requires("invalid")    , false , "Invalid resources can't be required" );
      is( item.get_transmuting_cost("invalid")    , 0     , "Invalid resources have 0 transmuting cost" );
      is( item.transmutable()                     , false , "Not a transmutable item" );
      ok( Array.isArray( item.all_resource_names()),        "all resource names is an array"  );
      is( item.all_resource_names().length         , 1     , "Array has 1 item"               );
      is( item.get_cost("pebbles")                 , 5     , "Pebbles exposed to generic cost API"  );
    });

    subtest("Transmutable", function() {

      let item = new AlbionItem( "stone", { }, { transmute_from: { "pebbles" : 5 }} );

      is( item.has_tier() , false , "No tier specified" );
      is( item.tier()     , 1     , "Fallback teir is 1");
      is( item.is_tier(1) , false , "Items without tier cant be == a tier" );
      is( item.has_attribute("invalid"), false    , "Invalid attributes don't exist");
      is( item.get_attribute("invalid"), undefined, "Invalid attributes return undef");

      ok( Array.isArray( item.crafting_resource_names()), "crafting resource names is an array");
      is( item.crafting_resource_names().length , 0     , "Array has 1 item" );
      is( item.crafting_requires("pebbles")     , false  , "Resource does not requires pebbles" );
      is( item.get_crafting_cost("pebbles")     , 0      , "Resource requires 0 pebbles each" );

      ok( Array.isArray( item.transmuting_resource_names()), "transmuting resource names is an array");
      is( item.transmuting_resource_names().length, 1     , "Array has 1 item" );
      is( item.transmuting_requires("invalid")    , false , "Invalid resources can't be required" );
      is( item.get_transmuting_cost("invalid")    , 0     , "Invalid resources have 0 transmuting cost" );
      is( item.transmuting_requires("pebbles")    , true  , "Pebbles are required for transmute" );
      is( item.get_transmuting_cost("pebbles")    , 5     , "5 Pebbles needed for transmute" );


      is( item.transmutable()                      , true , "Is a transmutable item" );
      ok( Array.isArray( item.all_resource_names()),        "all resource names is an array"  );
      is( item.all_resource_names().length         , 1     , "Array has 1 item"               );
      is( item.get_cost("pebbles")                 , 5     , "Pebbles exposed to generic cost API"  );
    });
    subtest("Tiers/attributes", function() {
      let item = new AlbionItem( "stone", { }, { tier: 4 } );
      is( item.has_tier() , true  , "tier specified" );
      is( item.tier()     , 4     , "teir is 4");
      is( item.is_tier(1) , false , "tier 4 != teir 1" );
      is( item.is_tier(4) , true  , "tier 4 == teir 4" );
      is( item.has_attribute("tier"), true    , "teir attribute exists");
      is( item.get_attribute("tier"), 4       , "teir attribute has expected value");

    });

  });
  done_testing();
});
