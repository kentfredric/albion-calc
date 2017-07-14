(function() {
  let add_item = document.AlbionData.add_item;
/* Core Materials */
  add_item("Silver");

  /* T1 Materials */
  add_item( "Rough Logs"  ,   {}, { tier: 1 });
  add_item( "Rough Stone" ,   {}, { tier: 1 });
  add_item( "Scraps of Hide", {}, { tier: 1 });

  /* T2 Materials */
  add_item( "Copper Ore"  , {}, { tier: 2 } );
  add_item( "Cotton"      , {}, { tier: 2, keywords: ['fibre'] } );
  add_item( "Rugged Hide" , {}, { tier: 2 } );
  add_item( "Limestone"   , {}, { tier: 2 } );
  add_item( "Birch Logs"  , {}, { tier: 2 } );

  /* T3 Materials */
  add_item( "Sandstone"      , { }, { tier: 3, transmute_from: { "Limestone":   3 } });
  add_item( "Chestnut Logs"  , { }, { tier: 3, transmute_from: { "Birch Logs":  3 } });
  add_item( "Thin Hide"      , { }, { tier: 3, transmute_from: { "Rugged Hide": 3 } });
  add_item( "Tin Ore"        , { }, { tier: 3, transmute_from: { "Copper Ore":  3 } });
  add_item( "Flax"           , { }, { tier: 3, transmute_from: { "Cotton":      3 }, keywords: ['fibre'] });

  /* T4 Materials */
  add_item( "Travertine"    , { }, { tier: 4, transmute_from: { "Sandstone": 6     }, keywords: ['stone'] });
  add_item( "Medium Hide"   , { }, { tier: 4, transmute_from: { "Thin Hide": 6     } });
  add_item( "Iron Ore"      , { }, { tier: 4, transmute_from: { "Tin Ore": 6       } });
  add_item( "Pine Logs"     , { }, { tier: 4, transmute_from: { "Chestnut Logs": 6 } });
  add_item( "Hemp"          , { }, { tier: 4, transmute_from: { "Flax": 6          }, keywords: ['fibre'] });

  add_item( "Uncommon Medium Hide",     { }, { tier: 4, transmute_from: { "Medium Hide" :          1, "Silver": 6000   } });
  add_item( "Rare Medium Hide",         { }, { tier: 4, transmute_from: { "Uncommon Medium Hide" : 1, "Silver": 12000  } });
  add_item( "Exceptional Medium Hide",  { }, { tier: 4, transmute_from: { "Rare Medium Hide" :     1, "Silver": 24000  } });

  add_item( "Uncommon Iron Ore",        { }, { tier: 4, transmute_from: { "Iron Ore" :              1, "Silver": 6000  } });
  add_item( "Rare Iron Ore",            { }, { tier: 4, transmute_from: { "Uncommon Iron Ore" :     1, "Silver": 12000 } });
  add_item( "Exceptional Iron Ore",     { }, { tier: 4, transmute_from: { "Rare Iron Ore" :         1, "Silver": 24000 } });

  /* T5 Materials */
  add_item( "Cedar Logs",   { }, { tier: 5, transmute_from: { "Pine Logs"  : 9 }});
  add_item( "Granite",      { }, { tier: 5, transmute_from: { "Travertine" : 9 }, keywords: ['stone'] });
  add_item( "Titanium Ore", { }, { tier: 5, transmute_from: { "Iron Ore"   : 9 }});
  add_item( "Heavy Hide",   { }, { tier: 5, transmute_from: { "Medium Hide" : 9}});
  add_item( "Skyflower",    { }, { tier: 5, transmute_from: { "Hemp": 9        }, keywords: ['fibre'] });

  /* T6 Materials */
  add_item( "Bloodoak Logs" , { }, { tier: 6, transmute_from: { "Cedar Logs"   : 15 }});
  add_item( "Slate",          { }, { tier: 6, transmute_from: { "Granite"      : 15 }, keywords: ['stone'] });
  add_item( "Runite Ore"    , { }, { tier: 6, transmute_from: { "Titanium Ore" : 15 }});
  add_item( "Robust Hide",    { }, { tier: 6, transmute_from: { "Heavy Hide"   : 15 }});
  add_item( "Readleaf Cotton",{ }, { tier: 6, transmute_from: { "Skyflower"    : 15 }, keywords: ['fibre'] });

  /* T7 Materials */
  add_item( "Ashenbark Logs", { }, { tier: 7, transmute_from: { "Bloodoak Logs"  : 25 }});
  add_item( "Basalt"        , { }, { tier: 7, transmute_from: { "Slate"          : 25 }, keywords: ['stone'] });
  add_item( "Meteorite Ore" , { }, { tier: 7, transmute_from: { "Runite Ore"     : 25 }});
  add_item( "Thick Hide",     { }, { tier: 7, transmute_from: { "Robust Hide"    : 25 }});
  add_item( "Sunflax",        { }, { tier: 7, transmute_from: { "Readleaf Cotton": 25 }, keywords: ['fibre'] });

  /* T8 Materials */
  add_item( "Marble"        , { }, { tier: 8, transmute_from: { "Basalt"        : 42 }, keywords: ['stone'] });
  add_item( "Resilient Hide", { }, { tier: 8, transmute_from: { "Thick Hide"    : 42 }});
  add_item( "Whitewood Logs", { }, { tier: 8, transmute_from: { "Ashenbark Logs": 42 }});
  add_item( "Ghost Hemp",     { }, { tier: 8, transmute_from: { "Sunflax":        42 }, keywords: ['fibre'] });
  add_item( "Adamantium Ore", { }, { tier: 8, transmute_from: { "Meteorite Ore":  42 }});

/* Crops */
  /* T2 Crops */
  add_item("Arcane Agaric" , {}, {tier: 2, keywords: ['crop']});
  add_item("Carrots", {}, { tier: 2, keywords: ['crop']});
  add_item("Beans", {}, {tier: 2, keywords: ['crop'] });

/* Drops / Uniques */
  add_item( "Explorers Anchor" , {}, { tier: 3 });

/* Crafted Materials */
  /* T2 Materials */
  add_item( "Birch Planks" ,   { "Birch Logs":   1 }, { tier: 2 });
  add_item( "Copper Bar",      { "Copper Ore":   1 }, { tier: 2 });
  add_item( "Simple Cloth",    { "Cotton" :      1 }, { tier: 2 });
  add_item( "Stiff Leather",   { "Rugged Hide" : 1 }, { tier: 2 });
  add_item( "Limestone Block", { "Limestone"   : 1 }, { tier: 2 });

  /* T3 Materials */
  add_item( "Chestnut Planks", { "Chestnut Logs": 2, "Birch Planks":    1 }, { tier: 3 });
  add_item( "Sandstone Block", { "Sandstone" :    2, "Limestone Block": 1 }, { tier: 3 });
  add_item( "Thick Leather",   { "Thin Hide" :    2, "Stiff Leather":   1 }, { tier: 3 });
  add_item( "Bronze Bar",      { "Tin Ore"   :    2, "Copper Bar":      1 }, { tier: 3 });
  add_item( "Neat Cloth",      { "Flax"      :    2, "Simple Cloth":    1 }, { tier: 3 });

  /* T4 Materials */
  add_item( "Travertine Block", { "Travertine" : 2, "Sandstone Block" : 1 }, { tier: 4 });
  add_item( "Worked Leather",  { "Medium Hide" :  2, "Thick Leather":   1 }, { tier: 4 });
  add_item( "Steel Bar", { "Iron Ore": 2, "Bronze Bar" : 1 }, { tier: 4 });
  add_item( "Pine Planks", { "Pine Logs": 2, "Chestnut Planks": 1 }, { tier: 4 });
  add_item( "Fine Cloth", { "Hemp" : 2, "Neat Cloth": 1 }, { tier: 4 });

  add_item( "Uncommon Worked Leather", { "Uncommon Medium Hide" : 2, "Thick Leather" : 1 }, { tier: 4 });
  add_item( "Rare Worked Leather", { "Rare Medium Hide" : 2, "Thick Leather" : 1 }, { tier: 4 });
  add_item( "Exceptional Worked Leather", { "Exceptional Medium Hide" : 2, "Thick Leather" : 1 }, { tier: 4 });
  add_item( "Uncommon Steel Bar", { "Uncommon Iron Ore": 2, "Bronze Bar" : 1 }, { tier: 4});
  add_item( "Rare Steel Bar", { "Rare Iron Ore": 2, "Bronze Bar" : 1 }, {tier: 4 });
  add_item( "Exceptional Steel Bar", { "Exceptional Iron Ore": 2, "Bronze Bar" : 1 }, {tier: 4});

  /* T5 Materials */
  add_item( "Cedar Planks",  { "Cedar Logs": 3, "Pine Planks" : 1   }, {tier: 5});
  add_item( "Granite Block", { "Granite" : 3, "Travertine Block": 1 }, {tier: 5});
  add_item( "Titanium Steel Bar", { "Titanium Ore": 3, "Steel Bar": 1 }, {tier: 5});
  add_item( "Ornate Cloth", { "Skyflower": 3, "Fine Cloth": 1 }, { tier: 5 });
  add_item( "Cured Leather", { "Heavy Hide": 3, "Worked Leather": 1 }, { tier: 5 });

  /* T6 Materials */
  add_item( "Bloodoak Planks", { "Bloodoak Logs": 4, "Cedar Planks": 1  }, {tier: 6});
  add_item( "Slate Block",     { "Slate" : 4,        "Granite Block": 1 }, {tier: 6});
  add_item( "Runite Steel Bar", { "Runite Ore": 4,        "Titanium Steel Bar": 1 }, {tier: 6});
  add_item( "Lavish Cloth", { "Readleaf Cotton": 4, "Ornate Cloth": 1 }, { tier: 6 });
  add_item( "Hardened Leather", { "Robust Hide": 4, "Cured Leather": 1 }, { tier: 6 });

  /* T7 Materials */
  add_item( "Ashenbark Planks", { "Ashenbark Logs": 5, "Bloodoak Planks" : 1 }, {tier: 7});
  add_item( "Basalt Block",     { "Basalt":         5, "Slate Block"     : 1 }, {tier: 7});
  add_item( "Meteorite Steel Bar", { "Meteorite Ore": 5, "Runite Steel Bar": 1 }, {tier: 7});
  add_item( "Opulent Cloth", { "Sunflax": 5, "Lavish Cloth": 1 }, { tier: 7 });
  add_item( "Reinforced Leather", { "Thick Hide": 5, "Hardened Leather": 1 }, { tier: 7 });

  /* T8 Materials */
  add_item( "Marble Block",     { "Marble":         5, "Basalt Block"    : 1 }, {tier: 8});
  add_item( "Baroque Cloth",    { "Ghost Hemp":     5, "Opulent Cloth"   : 1 }, {tier: 8});
  add_item( "Fortified Leather",{ "Resilient Hide": 5, "Reinforced Leather": 1 }, {tier: 8});
  add_item( "Adamantium Steel Bar", { "Adamantium Ore": 5, "Meteorite Steel Bar": 1}, {tier: 8});
  add_item( "Whitewood Planks", { "Whitewood Logs": 5, "Ashenbark Planks":1 }, {tier: 8});

/* Toolmaker */
  /* Novices Toolmaker -> Tools */
  add_item( "Beginners Pickaxe",         { "Rough Stone":   3, "Rough Logs": 3 }, {tier: 1});
  add_item( "Beginners Axe",             { "Rough Stone":   3, "Rough Logs": 3 }, {tier: 1});
  add_item( "Beginners Skinning Kinfe",  { "Rough Stone":   3, "Rough Logs": 3 }, {tier: 1});
  add_item( "Beginners Sickle",          { "Rough Stone":   3, "Rough Logs": 3 }, {tier: 1});
  add_item( "Beginners Stone Hammer",    { "Rough Stone":   3, "Rough Logs": 3 }, {tier: 1});

  add_item( "Novices Sickle",            { "Birch Planks":  6, "Copper Bar": 2 }, {tier: 2});
  add_item( "Novices Pickaxe",           { "Birch Planks":  6, "Copper Bar": 2 }, {tier: 2});
  add_item( "Novices Skinning Kinfe",    { "Birch Planks":  6, "Copper Bar": 2 }, {tier: 2});
  add_item( "Novices Stone Hammer",      { "Birch Planks":  6, "Copper Bar": 2 }, {tier: 2});
  add_item( "Novices Demolition Hammer", { "Birch Planks": 12, "Copper Bar": 12}, {tier: 2});

  add_item( "Journeymans Sickle",            { "Chestnut Planks":  6, "Bronze Bar": 2 }, {tier: 3});
  add_item( "Journeymans Pickaxe",           { "Chestnut Planks":  6, "Bronze Bar": 2 }, {tier: 3});
  add_item( "Journeymans Skinning Kinfe",    { "Chestnut Planks":  6, "Bronze Bar": 2 }, {tier: 3});
  add_item( "Journeymans Stone Hammer",      { "Chestnut Planks":  6, "Bronze Bar": 2 }, {tier: 3});
  add_item( "Journeymans Demolition Hammer", { "Chestnut Planks":  8, "Bronze Bar": 8 }, {tier: 3});


  /* Novices Toolmaker -> Accessories */
  add_item( "Novices Bag",  { "Simple Cloth" : 12, "Stiff Leather" : 12 }, {tier: 2});
  add_item( "Novices Cape", { "Simple Cloth" :  4, "Stiff Leather" :  4 }, {tier: 2});

  add_item( "Journeymans Bag",  { "Neat Cloth" : 8, "Thick Leather" : 8 }, {tier: 3});
  add_item( "Journeymans Cape", { "Neat Cloth" : 4, "Thick Leather" : 4 }, {tier: 3});

  /* Novices Toolmaker -> Furniture */
  add_item( "Novices Chest", { "Birch Planks" : 20, "Copper Bar": 10 }, {tier: 2});
  add_item( "Novices Bed",   { "Birch Planks" : 10, "Copper Bar": 20 }, {tier: 2});
  add_item( "Novices Table", { "Birch Planks" : 30, "Copper Bar": 30 }, {tier: 2});

  add_item( "Journeymans Chest", { "Chestnut Planks" : 20, "Bronze Bar": 10 }, {tier: 3});
  add_item( "Journeymans Bed",   { "Chestnut Planks" : 10, "Bronze Bar": 20 }, {tier: 3});
  add_item( "Journeymans Table", { "Chestnut Planks" : 30, "Bronze Bar": 30 }, {tier: 3});


/* Warriors Forge */
  /* Novices Warriors Forge -> Weapons */
  add_item("Beginners Broadsword", { "Rough Stone"  :  6, "Rough Logs":    6 }, {tier: 1});
  add_item("Beginners Shield",     { "Rough Logs"   :  4                     }, {tier: 1});
  add_item("Novices Broadsword",   { "Copper Bar"   : 16, "Stiff Leather": 8 }, {tier: 2});
  add_item("Novices Sheild",       { "Birch Planks" :  4, "Copper Bar"   : 4 }, {tier: 2});

  /* Novices Warriors Forge -> Armor */
  add_item("Novices Soldier Helmet", { "Copper Bar" : 8  }, { tier: 2});
  add_item("Novices Soldier Armor",  { "Copper Bar" : 16 }, { tier: 2});
  add_item("Novices Soldier Boots",  { "Copper Bar" : 8  }, { tier: 2});

/* Hunters Lodge */
  /* Novices Weapons */
  add_item("Novices Bow", { "Birch Planks" : 32 }, { tier: 2 });
  /* Journeymans Weapons */
  add_item("Journeymans Bow", { "Chestnut Planks": 32}, { tier: 3 });
  add_item("Journeymans Spear", { "Chestnut Planks": 16, "Bronze Bar" : 8 }, { tier: 3 });
  add_item("Journeymans Nature Staff", { "Chestnut Planks": 16, "Neat Cloth" : 8 }, { tier: 3 });
  add_item("Journeymans Dagger", { "Bronze Bar": 12, "Thick Leather": 12 }, { tier: 3 });
  add_item("Journeymans Quarterstaff", { "Bronze Bar": 12, "Thick Leather": 20 }, { tier: 3 });
  add_item("Journeymans Torch", { "Chestnut Planks": 4, "Neat Cloth": 4 }, { tier: 3 });

  /* Armour */
  add_item("Beginners Mercenary Hood", { "Scraps of Hide": 4 }, { tier: 1 });
  add_item("Beginners Mercenary Jacket", { "Scraps of Hide": 8 }, { tier: 1 });
  add_item("Beginners Mercenary Shoes", { "Scraps of Hide": 6 }, { tier: 1 });

  add_item("Novices Mercenary Hood", { "Stiff Leather": 8 }, { tier: 2 });
  add_item("Novices Mercenary Jacket", { "Stiff Leather": 16 }, { tier: 2 });
  add_item("Novices Mercenary Shoes", { "Stiff Leather": 8 }, { tier: 2 });

  add_item("Journeymans Mercenary Hood", { "Stiff Leather": 8 }, { tier: 3 });
  add_item("Journeymans Mercenary Jacket", { "Stiff Leather": 16 }, { tier: 3 });
  add_item("Journeymans Mercenary Shoes", { "Stiff Leather": 8 }, { tier: 3 });

/* Alchemists Lab */
  /* Novices Alchemists Lab -> Potions */
  add_item("Minor Healing Potion", { "Arcane Agaric" : 8 }, {tier: 2});
  add_item("Minor Energy Potion", { "Arcane Agaric" : 8 }, {tier: 2});

/* Cook */
  /* Novices Cook -> Food */
  add_item("Carrot Soup", { "Carrots" : 16 }, { tier: 1 , keywords: ['food']});
  add_item("Bean Salad",  { "Beans"   :  8, "Carrots" : 8 }, { tier: 2 , keywords: ['food']});

/* Mage Tower */
  /* Novices Mage Tower -> Weapons */
  add_item("Novices Fire Staff",      { "Birch Planks" : 16, "Copper Bar":    8 }, { tier: 2 });
  add_item("Novices Tome of Spells",  { "Simple Cloth" :  4, "Stiff Leather": 4 }, { tier: 2 });

  add_item("Journeymans Arcane Staff", { "Chestnut Planks" : 16, "Bronze Bar": 8 }, { tier: 3});
  add_item("Journeymans Fire Staff", { "Chestnut Planks" : 16, "Bronze Bar": 8 }, { tier: 3});
  add_item("Journeymans Holy Staff", { "Chestnut Planks" : 16, "Bronze Bar": 8 }, { tier: 3});
  add_item("Journeymans Cursed Staff", { "Chestnut Planks" : 16, "Bronze Bar": 8 }, { tier: 3});
  add_item("Journeymans Frost Staff", { "Chestnut Planks" : 16, "Bronze Bar": 8 }, { tier: 3});
  add_item("Journeymans Tome of Spells", { "Neat Cloth" : 4, "Thick Leather": 4 }, { tier: 3});

  /* Novics Mage Tower -> Armor */
  add_item("Novices Scholar Cowl",    { "Simple Cloth" :  8 }, {tier: 2 });
  add_item("Novices Scholar Robe",    { "Simple Cloth" : 16 }, {tier: 2 });
  add_item("Novices Scholar Sandals", { "Simple Cloth" :  8 }, {tier: 2 });

  add_item("Journeymans Scholar Cowl", { "Neat Cloth": 8 }, {tier: 3});
  add_item("Journeymans Scholar Robe", { "Neat Cloth": 16 }, {tier: 3});
  add_item("Journeymans Scholar Sandals", { "Neat Cloth": 8 }, {tier: 3});

/* Building Costs */
  /* Player Buildings */
  add_item("Novices Guild Hall",  { "Rough Logs": 150, "Rough Stone": 15, "Limestone Block" : 900 }, {tier: 2});
  add_item("Novices House",       { "Rough Logs":  30, "Rough Stone":  3, "Limestone Block" : 180 }, {tier: 2});

  add_item("Legendary Explorers Shelter", { "Explorers Anchor" : 1,
                                            "Rough Logs":  30, "Rough Stone":  3, "Limestone Block" : 180 }, {tier: 2});


  add_item("Journeymans Guild Hall", { "Novices Guild Hall": 1, "Rough Logs": 300, "Rough Stone": 30, "Sandstone Block": 900}, { tier: 3 });
  add_item("Journeymans House", { "Novices House": 1, "Rough Logs": 60, "Rough Stone": 6, "Sandstone Block": 180}, { tier: 3 });
  add_item("Legendary Explorers Hut", { "Legendary Explorers Shelter": 1, "Rough Logs": 60, "Rough Stone": 6, "Sandstone Block": 180 }, { tier: 3 });

  add_item("Adepts Guild Hall", { "Journeymans Guild Hall": 1, "Rough Logs": 600, "Rough Stone": 60, "Travertine Block": 900 }, { tier: 4 });
  add_item("Adepts House" ,  { "Journeymans House": 1, "Rough Logs": 120, "Rough Stone": 12, "Travertine Block": 180 } , { tier: 4 });
  add_item("Legendary Explorers House", { "Legendary Explorers Hut" : 1, "Rough Logs": 120, "Rough Stone": 12, "Travertine Block": 180 }, { tier: 4 });

  add_item("Experts Guild Hall", { "Adepts Guild Hall": 1, "Rough Logs": 1200, "Rough Stone": 120, "Granite Block": 900 }, { tier: 5 });
  add_item("Experts House" ,  { "Adepts House": 1, "Rough Logs": 240, "Rough Stone": 24, "Granite Block": 180 } , { tier: 5 });
  add_item("Legendary Explorers Residence", { "Legendary Explorers House" : 1, "Rough Logs": 240, "Rough Stone": 24, "Granite Block": 180 }, { tier: 5 });

  add_item("Masters Guild Hall", { "Experts Guild Hall": 1, "Rough Logs": 2400, "Rough Stone": 240, "Slate Block": 900 }, { tier: 6 });
  add_item("Masters House" ,  { "Experts House": 1, "Rough Logs": 480, "Rough Stone": 48, "Slate Block": 180 } , { tier: 6 });
  add_item("Legendary Explorers Villa", { "Legendary Explorers Residence" : 1, "Rough Logs": 480, "Rough Stone": 48, "Slate Block": 180 }, { tier: 6 });

  add_item("Grandmasters Guild Hall", { "Masters Guild Hall": 1, "Rough Logs": 4800, "Rough Stone": 480, "Basalt Block": 900 }, { tier: 7 });
  add_item("Grandmasters House" ,  { "Masters House": 1, "Rough Logs": 960, "Rough Stone": 96, "Basalt Block": 180 } , { tier: 7 });
  add_item("Legendary Explorers Manor", { "Legendary Explorers Villa" : 1, "Rough Logs": 960, "Rough Stone": 96, "Basalt Block": 180 }, { tier: 7 });

  add_item("Elders Guild Hall", { "Grandmasters Guild Hall": 1, "Rough Logs": 9600, "Rough Stone": 960, "Marble Block": 900 }, { tier: 8 });
  add_item("Elders House" ,  { "Grandmasters House": 1, "Rough Logs": 1920, "Rough Stone": 192, "Marble Block": 180 } , { tier: 8 });
  add_item("Legendary Explorers Palace", { "Legendary Explorers Manor" : 1, "Rough Logs": 1920, "Rough Stone": 192, "Marble Block": 180 }, { tier: 8 });

  /* Craft -> T1 */
  add_item("Workbench", { "Rough Logs" : 25, "Rough Stone" : 100 }, {tier: 1});

  /* Craft -> T2 */
  add_item("Novices Cook",          { "Rough Logs" : 50, "Rough Stone": 5, "Limestone Block" : 300 }, {tier: 2});
  add_item("Novice Warriors Forge", { "Rough Logs" : 50, "Rough Stone": 5, "Limestone Block" : 300 }, {tier: 2});
  add_item("Novice Alchemists Lab", { "Rough Logs" : 50, "Rough Stone": 5, "Limestone Block" : 300 }, {tier: 2});
  add_item("Novices Toolmaker",     { "Rough Logs" : 50, "Rough Stone": 5, "Limestone Block" : 300 }, {tier: 2});
  add_item("Novice Mages Tower",    { "Rough Logs" : 50, "Rough Stone": 5, "Limestone Block" : 300 }, {tier: 2});
  add_item("Novice Hunters Lodge",  { "Rough Logs" : 50, "Rough Stone": 5, "Limestone Block" : 300 }, {tier: 2});

  add_item("Novices Smelter",     { "Rough Logs" : 25 , "Rough Stone" : 3 , "Limestone Block" : 150 }, {tier: 2});
  add_item("Novices Tanner",      { "Rough Logs" : 25 , "Rough Stone" : 3 , "Limestone Block" : 150 }, {tier: 2});
  add_item("Novices Weaver",      { "Rough Logs" : 25 , "Rough Stone" : 3 , "Limestone Block" : 150 }, {tier: 2});
  add_item("Novices Lumbermill",  { "Rough Logs" : 25 , "Rough Stone" : 3 , "Limestone Block" : 150 }, {tier: 2});

  add_item("Novices Stonemason",  { "Rough Logs" : 25 , "Rough Stone" : 25, "Limestone"       : 150 }, {tier: 2});

  /* Craft -> T3 */
  add_item("Journeymans Mill",        { "Rough Logs" : 50, "Rough Stone" : 5, "Sandstone Block" : 150 }, {tier: 3});
  add_item("Journeymans Butcher",     { "Rough Logs" : 50, "Rough Stone" : 5, "Sandstone Block" : 150 }, {tier: 3});

  add_item("Journeymans Saddler",     { "Rough Logs" : 100, "Rough Stone" : 10, "Sandstone Block" : 300 }, {tier: 3});

  add_item("Journeymans Cook",          { "Novices Cook": 1,                "Rough Logs": 100, "Rough Stone": 10, "Sandstone Block": 300 }, {tier: 3});
  add_item("Journeyman Warriors Forge", { "Novice Warriors Forge":      1,  "Rough Logs": 100, "Rough Stone": 10, "Sandstone Block": 300 }, {tier: 3});
  add_item("Journeyman Alchemists Lab", { "Novice Alchemists Lab":      1,  "Rough Logs": 100, "Rough Stone":  10, "Sandstone Block" : 300 }, {tier: 3});
  add_item("Journeymans Toolmaker",     { "Novices Toolmaker":          1,  "Rough Logs": 100, "Rough Stone":  10, "Sandstone Block" : 300 }, {tier: 3});
  add_item("Journeyman Mages Tower",    { "Novice Mages Tower":         1,  "Rough Logs": 100, "Rough Stone":  10, "Sandstone Block" : 300 }, {tier: 3});
  add_item("Journeyman Hunters Lodge",  { "Novice Hunters Lodge":       1,  "Rough Logs": 100, "Rough Stone":  10, "Sandstone Block" : 300 }, {tier: 3});

  add_item("Journeymans Smelter",       { "Novices Smelter":            1,  "Rough Logs": 50, "Rough Stone":  5, "Sandstone Block" : 150 }, {tier: 3});
  add_item("Journeymans Tanner",        { "Novices Tanner":             1,  "Rough Logs": 50, "Rough Stone":  5, "Sandstone Block" : 150 }, {tier: 3});
  add_item("Journeymans Weaver",        { "Novices Weaver":             1,  "Rough Logs": 50, "Rough Stone":  5, "Sandstone Block" : 150 }, {tier: 3});
  add_item("Journeymans Lumbermill",    { "Novices Lumbermill":         1,  "Rough Logs": 50, "Rough Stone":  5, "Sandstone Block" : 150 }, {tier: 3});

  add_item("Journeymans Stonemason",    { "Novices Stonemason":         1, "Rough Logs": 50, "Rough Stone": 50, "Sandstone": 150 }, {tier: 3});

  add_item("Journeymans Transmutator",  { "Rough Logs": 60, "Rough Stone": 6, "Sandstone Block": 180}, { tier: 3 });

  /* Craft -> T4 */

  add_item("Adepts Saddler",       { "Journeymans Saddler" :           1,  "Rough Logs": 200, "Rough Stone":  20, "Travertine Block": 300 }, {tier: 4});
  add_item("Adepts Cook",          { "Journeymans Cook":               1,  "Rough Logs": 200, "Rough Stone":  20, "Travertine Block": 300 }, {tier: 4});
  add_item("Adept Warriors Forge", { "Journeyman Warriors Forge":      1,  "Rough Logs": 200, "Rough Stone":  20, "Travertine Block": 300 }, {tier: 4});
  add_item("Adept Alchemists Lab", { "Journeyman Alchemists Lab":      1,  "Rough Logs": 200, "Rough Stone":  20, "Travertine Block": 300 }, {tier: 4});
  add_item("Adepts Toolmaker",     { "Journeymans Toolmaker":          1,  "Rough Logs": 200, "Rough Stone":  20, "Travertine Block": 300 }, {tier: 4});
  add_item("Adept Mages Tower",    { "Journeyman Mages Tower":         1,  "Rough Logs": 200, "Rough Stone":  20, "Travertine Block": 300 }, {tier: 4});
  add_item("Adept Hunters Lodge",  { "Journeyman Hunters Lodge":       1,  "Rough Logs": 200, "Rough Stone":  20, "Travertine Block": 300 }, {tier: 4});

  add_item("Adepts Butcher",       { "Journeymans Butcher":            1, "Rough Logs" : 100, "Rough Stone" : 10, "Travertine Block" : 150 }, {tier: 4});
  add_item("Adepts Smelter",       { "Journeymans Smelter":            1,  "Rough Logs": 100, "Rough Stone":  10, "Travertine Block" : 150 }, {tier: 4});
  add_item("Adepts Tanner",        { "Journeymans Tanner":             1,  "Rough Logs": 100, "Rough Stone":  10, "Travertine Block" : 150 }, {tier: 4});
  add_item("Adepts Weaver",        { "Journeymans Weaver":             1,  "Rough Logs": 100, "Rough Stone":  10, "Travertine Block" : 150 }, {tier: 4});
  add_item("Adepts Lumbermill",    { "Journeymans Lumbermill":         1,  "Rough Logs": 100, "Rough Stone":  10, "Travertine Block" : 150 }, {tier: 4});

  add_item("Adepts Stonemason",    { "Journeymans Stonemason":         1, "Rough Logs": 100, "Rough Stone": 100, "Travertine": 150 }, {tier: 4});

  add_item("Adepts Transmutator",  { "Journeymans Transmutator":        1, "Rough Logs": 120, "Rough Stone": 12, "Travertine Block": 180}, { tier: 4 });

  /* Craft -> T5 */


  add_item("Experts Saddler",       { "Adepts Saddler" :           1,  "Rough Logs": 400, "Rough Stone":  40, "Granite Block": 300 }, {tier: 5});
  add_item("Experts Cook",          { "Adepts Cook":               1,  "Rough Logs": 400, "Rough Stone":  40, "Granite Block": 300 }, {tier: 5});
  add_item("Expert Warriors Forge", { "Adept Warriors Forge":      1,  "Rough Logs": 400, "Rough Stone":  40, "Granite Block": 300 }, {tier: 5});
  add_item("Expert Alchemists Lab", { "Adept Alchemists Lab":      1,  "Rough Logs": 400, "Rough Stone":  40, "Granite Block": 300 }, {tier: 5});
  add_item("Experts Toolmaker",     { "Adepts Toolmaker":          1,  "Rough Logs": 400, "Rough Stone":  40, "Granite Block": 300 }, {tier: 5});
  add_item("Expert Mages Tower",    { "Adept Mages Tower":         1,  "Rough Logs": 400, "Rough Stone":  40, "Granite Block": 300 }, {tier: 5});
  add_item("Expert Hunters Lodge",  { "Adept Hunters Lodge":       1,  "Rough Logs": 400, "Rough Stone":  40, "Granite Block": 300 }, {tier: 5});

  add_item("Experts Butcher",       { "Adepts Butcher":            1,  "Rough Logs": 200, "Rough Stone":  20, "Granite Block" : 150 }, {tier: 5});
  add_item("Experts Smelter",       { "Adepts Smelter":            1,  "Rough Logs": 200, "Rough Stone":  20, "Granite Block" : 150 }, {tier: 5});
  add_item("Experts Tanner",        { "Adepts Tanner":             1,  "Rough Logs": 200, "Rough Stone":  20, "Granite Block" : 150 }, {tier: 5});
  add_item("Experts Weaver",        { "Adepts Weaver":             1,  "Rough Logs": 200, "Rough Stone":  20, "Granite Block" : 150 }, {tier: 5});
  add_item("Experts Lumbermill",    { "Adepts Lumbermill":         1,  "Rough Logs": 200, "Rough Stone":  20, "Granite Block" : 150 }, {tier: 5});

  add_item("Experts Stonemason",    { "Adepts Stonemason":         1, "Rough Logs": 200, "Rough Stone": 200, "Granite": 150 }, {tier: 5});

  add_item("Experts Transmutator",  { "Adepts Transmutator":        1, "Rough Logs": 240, "Rough Stone": 24, "Granite Block": 180}, {tier: 5});

  add_item("Altar Of Nature", { "Rough Logs": 800, "Rough Stone": 400, "Cedar Planks": 200, "Granite Block": 100 }, {tier: 5});
  add_item("Altar Of Valor" , { "Rough Logs": 400, "Rough Stone": 800, "Cedar Planks": 100, "Granite Block": 200 }, {tier: 5});
  add_item("Altar Of Magic" , { "Rough Logs": 600, "Rough Stone": 600, "Cedar Planks": 150, "Granite Block": 150 }, {tier: 5});

  /* Craft -> T6 */

  add_item("Masters Saddler",       { "Experts Saddler" :           1,  "Rough Logs": 800, "Rough Stone":  80, "Slate Block": 300 }, {tier: 6});
  add_item("Masters Cook",          { "Experts Cook":               1,  "Rough Logs": 800, "Rough Stone":  80, "Slate Block": 300 }, {tier: 6});
  add_item("Master Warriors Forge", { "Expert Warriors Forge":      1,  "Rough Logs": 800, "Rough Stone":  80, "Slate Block": 300 }, {tier: 6});
  add_item("Master Alchemists Lab", { "Expert Alchemists Lab":      1,  "Rough Logs": 800, "Rough Stone":  80, "Slate Block": 300 }, {tier: 6});
  add_item("Masters Toolmaker",     { "Experts Toolmaker":          1,  "Rough Logs": 800, "Rough Stone":  80, "Slate Block": 300 }, {tier: 6});
  add_item("Master Mages Tower",    { "Expert Mages Tower":         1,  "Rough Logs": 800, "Rough Stone":  80, "Slate Block": 300 }, {tier: 6});
  add_item("Master Hunters Lodge",  { "Expert Hunters Lodge":       1,  "Rough Logs": 800, "Rough Stone":  80, "Slate Block": 300 }, {tier: 6});

  add_item("Masters Butcher",       { "Experts Butcher":            1,  "Rough Logs": 400, "Rough Stone":  40, "Slate Block" : 150 }, {tier: 6});
  add_item("Masters Smelter",       { "Experts Smelter":            1,  "Rough Logs": 400, "Rough Stone":  40, "Slate Block" : 150 }, {tier: 6});
  add_item("Masters Tanner",        { "Experts Tanner":             1,  "Rough Logs": 400, "Rough Stone":  40, "Slate Block" : 150 }, {tier: 6});
  add_item("Masters Weaver",        { "Experts Weaver":             1,  "Rough Logs": 400, "Rough Stone":  40, "Slate Block" : 150 }, {tier: 6});
  add_item("Masters Lumbermill",    { "Experts Lumbermill":         1,  "Rough Logs": 400, "Rough Stone":  40, "Slate Block" : 150 }, {tier: 6});

  add_item("Masters Stonemason",    { "Experts Stonemason":         1, "Rough Logs": 400, "Rough Stone": 400, "Slate": 150 }, {tier: 6});

  add_item("Masters Transmutator",  { "Experts Transmutator":        1, "Rough Logs": 480, "Rough Stone": 48, "Slate Block": 180}, {tier: 6});

  add_item("Shrine Of Nature", { "Rough Logs": 1600, "Rough Stone": 800, "Bloodoak Planks": 200, "Slate Block": 100 }, {tier: 6});
  add_item("Shrine Of Valor" , { "Rough Logs":  800, "Rough Stone": 1600, "Bloodoak Planks": 100, "Slate Block": 200 }, {tier: 6});
  add_item("Shrine Of Magic" , { "Rough Logs": 1200, "Rough Stone": 1200, "Bloodoak Planks": 150, "Slate Block": 150 }, {tier: 6});

  /* Craft -> T7 */

  add_item("Grandmasters Saddler",       { "Masters Saddler" :           1,  "Rough Logs": 1600, "Rough Stone":  160, "Basalt Block": 300 }, {tier: 7});
  add_item("Grandmasters Cook",          { "Masters Cook":               1,  "Rough Logs": 1600, "Rough Stone":  160, "Basalt Block": 300 }, {tier: 7});
  add_item("Grandmaster Warriors Forge", { "Master Warriors Forge":      1,  "Rough Logs": 1600, "Rough Stone":  160, "Basalt Block": 300 }, {tier: 7});
  add_item("Grandmaster Alchemists Lab", { "Master Alchemists Lab":      1,  "Rough Logs": 1600, "Rough Stone":  160, "Basalt Block": 300 }, {tier: 7});
  add_item("Grandmasters Toolmaker",     { "Masters Toolmaker":          1,  "Rough Logs": 1600, "Rough Stone":  160, "Basalt Block": 300 }, {tier: 7});
  add_item("Grandmaster Mages Tower",    { "Master Mages Tower":         1,  "Rough Logs": 1600, "Rough Stone":  160, "Basalt Block": 300 }, {tier: 7});
  add_item("Grandmaster Hunters Lodge",  { "Master Hunters Lodge":       1,  "Rough Logs": 1600, "Rough Stone":  160, "Basalt Block": 300 }, {tier: 7});

  add_item("Grandmasters Butcher",       { "Masters Butcher":            1,  "Rough Logs": 800, "Rough Stone":  80, "Basalt Block" : 150 }, {tier: 7});
  add_item("Grandmasters Smelter",       { "Masters Smelter":            1,  "Rough Logs": 800, "Rough Stone":  80, "Basalt Block" : 150 }, {tier: 7});
  add_item("Grandmasters Tanner",        { "Masters Tanner":             1,  "Rough Logs": 800, "Rough Stone":  80, "Basalt Block" : 150 }, {tier: 7});
  add_item("Grandmasters Weaver",        { "Masters Weaver":             1,  "Rough Logs": 800, "Rough Stone":  80, "Basalt Block" : 150 }, {tier: 7});
  add_item("Grandmasters Lumbermill",    { "Masters Lumbermill":         1,  "Rough Logs": 800, "Rough Stone":  80, "Basalt Block" : 150 }, {tier: 7});

  add_item("Grandmasters Stonemason",    { "Masters Stonemason":         1, "Rough Logs": 800, "Rough Stone": 800, "Basalt": 150 }, {tier: 7});

  add_item("Grandmasters Transmutator",  { "Masters Transmutator":        1, "Rough Logs": 960, "Rough Stone": 96, "Basalt Block": 180}, {tier: 7});

  add_item("Temple Of Nature", { "Rough Logs": 3200, "Rough Stone": 1600, "Ashenbark Planks": 200, "Basalt Block": 100 }, {tier: 7}); // Bug in Albion2d? Thinks this is slate
  add_item("Temple Of Valor" , { "Rough Logs": 1600, "Rough Stone": 3200, "Ashenbark Planks": 100, "Basalt Block": 200 }, {tier: 7});
  add_item("Temple Of Magic" , { "Rough Logs": 2400, "Rough Stone": 2400, "Ashenbark Planks": 150, "Basalt Block": 150 }, {tier: 7});

  /* Craft -> T8 */
  add_item("Elders Saddler",       { "Grandmasters Saddler" :           1,  "Rough Logs": 3200, "Rough Stone":  320, "Marble Block": 300 }, {tier: 8});
  add_item("Elders Cook",          { "Grandmasters Cook":               1,  "Rough Logs": 3200, "Rough Stone":  320, "Marble Block": 300 }, {tier: 8});
  add_item("Elder Warriors Forge", { "Grandmaster Warriors Forge":      1,  "Rough Logs": 3200, "Rough Stone":  320, "Marble Block": 300 }, {tier: 8});
  add_item("Elder Alchemists Lab", { "Grandmaster Alchemists Lab":      1,  "Rough Logs": 3200, "Rough Stone":  320, "Marble Block": 300 }, {tier: 8});
  add_item("Elders Toolmaker",     { "Grandmasters Toolmaker":          1,  "Rough Logs": 3200, "Rough Stone":  320, "Marble Block": 300 }, {tier: 8});
  add_item("Elder Mages Tower",    { "Grandmaster Mages Tower":         1,  "Rough Logs": 3200, "Rough Stone":  320, "Marble Block": 300 }, {tier: 8});
  add_item("Elder Hunters Lodge",  { "Grandmaster Hunters Lodge":       1,  "Rough Logs": 3200, "Rough Stone":  320, "Marble Block": 300 }, {tier: 8});

  add_item("Elders Butcher",       { "Grandmasters Butcher":            1,  "Rough Logs": 1600, "Rough Stone":  160, "Marble Block" : 150 }, {tier: 8});
  add_item("Elders Smelter",       { "Grandmasters Smelter":            1,  "Rough Logs": 1600, "Rough Stone":  160, "Marble Block" : 150 }, {tier: 8});
  add_item("Elders Tanner",        { "Grandmasters Tanner":             1,  "Rough Logs": 1600, "Rough Stone":  160, "Marble Block" : 150 }, {tier: 8});
  add_item("Elders Weaver",        { "Grandmasters Weaver":             1,  "Rough Logs": 1600, "Rough Stone":  160, "Marble Block" : 150 }, {tier: 8});
  add_item("Elders Lumbermill",    { "Grandmasters Lumbermill":         1,  "Rough Logs": 1600, "Rough Stone":  160, "Marble Block" : 150 }, {tier: 8});

  add_item("Elders Stonemason",    { "Grandmasters Stonemason":         1, "Rough Logs": 1600, "Rough Stone": 1600, "Marble": 150 }, {tier: 8});

  add_item("Elders Transmutator",  { "Grandmasters Transmutator":        1, "Rough Logs": 1920, "Rough Stone": 192, "Marble Block": 180}, {tier: 8});

  /* Farm */

  add_item("Farm",          { "Rough Logs" : 15, "Rough Stone" : 15 }, {tier: 1});

  add_item("Herb Garden",   { "Rough Logs" : 25, "Rough Stone" : 25, "Birch Planks": 25, "Limestone Block": 25 }, {tier: 2});

  add_item("Pasture",  { "Rough Logs" : 30, "Rough Stone" : 30, "Chestnut Planks": 30, "Sandstone Block": 30 }, {tier: 3});

  add_item("Kennel",   { "Bloodoak Logs" : 50, "Slate" : 50, "Runite Steel Bar" : 10 }, {tier: 6});

  /* Meld */
  add_item("Artifact Foundry", { "Rough Logs": 3200, "Marble Block": 300 }, { tier: 8 });

  /* Repair */
  add_item("Novices Repair Station",  { "Rough Logs"   : 90 , "Rough Stone"     : 90,
                                        "Birch Planks" : 90 , "Limestone Block" : 90  }, {tier: 2});

  add_item("Journeymans Repair Station",  {  "Novices Repair Station": 1,   "Rough Logs"   : 90 , "Rough Stone"     : 90,   "Chestnut Planks" : 90 , "Sandstone Block" : 90  }, {tier: 3});
  add_item("Adepts Repair Station",  {  "Journeymans Repair Station": 1,   "Rough Logs"   : 90 , "Rough Stone"     : 90,   "Pine Planks" : 90 , "Travertine Block" : 90  }, {tier: 4});
  add_item("Experts Repair Station",  {  "Adepts Repair Station": 1,   "Rough Logs"   : 90 , "Rough Stone"     : 90,   "Cedar Planks" : 90 , "Granite Block" : 90  }, {tier: 5});
  add_item("Masters Repair Station",  {  "Experts Repair Station": 1,   "Rough Logs"   : 90 , "Rough Stone"     : 90,   "Bloodoak Planks" : 90 , "Slate Block" : 90  }, {tier: 6});
  add_item("Grandmasters Repair Station",  {  "Masters Repair Station": 1,   "Rough Logs"   : 90 , "Rough Stone"     : 90,   "Ashenbark Planks" : 90 , "Basalt Block" : 90  }, {tier: 7});
  add_item("Elders Repair Station",  {  "Grandmasters Repair Station": 1,   "Rough Logs"   : 90 , "Rough Stone"     : 90,   "Whitewood Planks" : 90 , "Marble Block" : 90  }, {tier: 8});



})();
