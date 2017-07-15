(function() {
  let add_item = document.AlbionData.add_item;

/* Novices Toolmaker -> Tools */
  add_item( "Beginners Pickaxe",         { "Rough Stone":   3, "Rough Logs": 3 }, {tier: 1});
  add_item( "Beginners Axe",             { "Rough Stone":   3, "Rough Logs": 3 }, {tier: 1});
  add_item( "Beginners Skinning Kinfe",  { "Rough Stone":   3, "Rough Logs": 3 }, {tier: 1});
  add_item( "Beginners Sickle",          { "Rough Stone":   3, "Rough Logs": 3 }, {tier: 1});
  add_item( "Beginners Stone Hammer",    { "Rough Stone":   3, "Rough Logs": 3 }, {tier: 1});

  add_item( "Novices Sickle",            { "Birch Planks":  6, "Copper Bar": 2 }, {tier: 2});
  add_item( "Novices Axe",            { "Birch Planks":  6, "Copper Bar": 2 }, {tier: 2});
  add_item( "Novices Pickaxe",           { "Birch Planks":  6, "Copper Bar": 2 }, {tier: 2});
  add_item( "Novices Skinning Kinfe",    { "Birch Planks":  6, "Copper Bar": 2 }, {tier: 2});
  add_item( "Novices Stone Hammer",      { "Birch Planks":  6, "Copper Bar": 2 }, {tier: 2});

  add_item( "Novices Demolition Hammer", { "Birch Planks": 12, "Copper Bar": 12}, {tier: 2});

  add_item( "Journeymans Sickle",            { "Chestnut Planks":  6, "Bronze Bar": 2 }, {tier: 3});
  add_item( "Journeymans Pickaxe",           { "Chestnut Planks":  6, "Bronze Bar": 2 }, {tier: 3});
  add_item( "Journeymans Axe",           { "Chestnut Planks":  6, "Bronze Bar": 2 }, {tier: 3});
  add_item( "Journeymans Skinning Kinfe",    { "Chestnut Planks":  6, "Bronze Bar": 2 }, {tier: 3});
  add_item( "Journeymans Stone Hammer",      { "Chestnut Planks":  6, "Bronze Bar": 2 }, {tier: 3});

  add_item( "Journeymans Demolition Hammer", { "Chestnut Planks":  8, "Bronze Bar": 8 }, {tier: 3});

  add_item( "Adepts Sickle",            { "Pine Planks":  6, "Steel Bar": 2 }, {tier: 4});
  add_item( "Adepts Pickaxe",           { "Pine Planks":  6, "Steel Bar": 2 }, {tier: 4});
  add_item( "Adepts Axe",               { "Pine Planks":  6, "Steel Bar": 2 }, {tier: 4});
  add_item( "Adepts Skinning Kinfe",    { "Pine Planks":  6, "Steel Bar": 2 }, {tier: 4});
  add_item( "Adepts Stone Hammer",      { "Pine Planks":  6, "Steel Bar": 2 }, {tier: 4});

  add_item( "Adepts Demolition Hammer", { "Pine Planks":  8, "Steel Bar": 8 }, {tier: 4});

  /* Novices Toolmaker -> Accessories */
  add_item( "Novices Bag",  { "Simple Cloth" : 12, "Stiff Leather" : 12 }, {tier: 2});
  add_item( "Novices Cape", { "Simple Cloth" :  4, "Stiff Leather" :  4 }, {tier: 2});

  add_item( "Journeymans Bag",  { "Neat Cloth" : 8, "Thick Leather" : 8 }, {tier: 3});
  add_item( "Journeymans Cape", { "Neat Cloth" : 4, "Thick Leather" : 4 }, {tier: 3});

  add_item( "Adepts Bag",  { "Fine Cloth" : 8, "Worked Leather" : 8 }, {tier: 4});
  add_item( "Adepts Cape", { "Fine Cloth" : 4, "Worked Leather" : 4 }, {tier: 4});

  add_item( "Adepts Harvester Backpack", { "Fine Cloth": 4, "Worked Leather": 4 }, { tier: 4, keywords: [ 'bag' ] } );
  add_item( "Adepts Skinner Backpack",   { "Fine Cloth": 4, "Worked Leather": 4 }, { tier: 4, keywords: [ 'bag' ] } );
  add_item( "Adepts Miner Backpack",     { "Fine Cloth": 4, "Worked Leather": 4 }, { tier: 4, keywords: [ 'bag' ] } );
  add_item( "Adepts Quarrier Backpack",  { "Fine Cloth": 4, "Worked Leather": 4 }, { tier: 4, keywords: [ 'bag' ] } );
  add_item( "Adepts Lumberjack Backpack",{ "Fine Cloth": 4, "Worked Leather": 4 }, { tier: 4, keywords: [ 'bag' ] } );

  /* Adepts Toolmaker -> Armour */
  add_item( "Adepts Harvester Cap", { "Fine Cloth": 8 }, { tier: 4 });
  add_item( "Adepts Harvester Garb", { "Fine Cloth": 8 }, { tier: 4 });
  add_item( "Adepts Harvester Workboots", { "Fine Cloth": 8 }, { tier: 4 });

  add_item( "Adepts Skinner Cap", { "Worked Leather": 8 }, { tier: 4 });
  add_item( "Adepts Skinner Garb", { "Worked Leather": 8 }, { tier: 4 });
  add_item( "Adepts Skinner Workboots", { "Worked Leather": 8 }, { tier: 4 });

  add_item( "Adepts Miner Cap", { "Steel Bar": 8 }, { tier: 4 });
  add_item( "Adepts Miner Garb", { "Steel Bar": 8 }, { tier: 4 });
  add_item( "Adepts Miner Workboots", { "Steel Bar": 8 }, { tier: 4 });

  add_item( "Adepts Quarrier Cap", { "Steel Bar": 8 }, { tier: 4 });
  add_item( "Adepts Quarrier Garb", { "Steel Bar": 8 }, { tier: 4 });
  add_item( "Adepts Quarrier Workboots", { "Steel Bar": 8 }, { tier: 4 });

  add_item( "Adepts Lumberjack Cap", { "Worked Leather": 8 }, { tier: 4 });
  add_item( "Adepts Lumberjack Garb", { "Worked Leather": 8 }, { tier: 4 });
  add_item( "Adepts Lumberjack Workboots", { "Worked Leather": 8 }, { tier: 4 });


  /* Novices Toolmaker -> Furniture */
  add_item( "Novices Chest", { "Birch Planks" : 20, "Copper Bar": 10 }, {tier: 2});
  add_item( "Novices Bed",   { "Birch Planks" : 10, "Simple Cloth": 20 }, {tier: 2});
  add_item( "Novices Table", { "Birch Planks" : 30, "Simple Cloth": 30 }, {tier: 2});

  add_item( "Journeymans Chest", { "Chestnut Planks" : 20, "Bronze Bar": 10 }, {tier: 3});
  add_item( "Journeymans Bed",   { "Chestnut Planks" : 10, "Neat Cloth": 20 }, {tier: 3});
  add_item( "Journeymans Table", { "Chestnut Planks" : 30, "Neat Cloth": 30 }, {tier: 3});

  add_item( "Adepts Chest", { "Pine Planks" : 20, "Steel Bar": 10 }, {tier: 4});
  add_item( "Adepts Bed",   { "Pine Planks" : 10, "Fine Cloth": 20 }, {tier: 4});
  add_item( "Adepts Table", { "Pine Planks" : 30, "Fine Cloth": 30 }, {tier: 4});

  /* Toolkits */
  add_item( "Adepts Repair Kit", { "Pine Planks": 8, "Steel Bar": 8 });

})();
