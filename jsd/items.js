(function() {
  let add_item = document.AlbionData.add_item;

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
/* Saddler */
  /* Mounts */
  add_item("Journeymans Riding Horse", { "Journeymans Horse": 1, "Thick Leather": 20 }, { tier: 3 });
  add_item("Adepts Riding Horse", { "Adepts Horse": 1, "Worked Leather": 20 }, { tier: 4 });
  add_item("Journeymans Transport Ox", { "Journeymans Ox": 1, "Chestnut Planks": 30 }, { tier: 3 });
  add_item("Adepts Transport Ox", { "Adepts Ox": 1, "Pine Planks": 30 }, { tier: 4 });

  /* Rare Mounts */
  add_item("Adepts Giant Stag", { "Adepts Tame Giant Stag": 1, "Worked Leather": 20 }, { tier: 4 });


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
