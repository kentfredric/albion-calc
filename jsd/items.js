(function() {
  let add_item = document.AlbionData.add_item;

/* Drops / Uniques */
  add_item( "Explorers Anchor" , {}, { tier: 3 });

/* Warriors Forge */
  /* Novices Warriors Forge -> Weapons */
  add_item("Beginners Broadsword", { "Rough Stone"  :  6, "Rough Logs":    6 }, {tier: 1});
  add_item("Beginners Shield",     { "Rough Logs"   :  4                     }, {tier: 1});
  add_item("Novices Broadsword",   { "Copper Bar"   : 16, "Stiff Leather": 8 }, {tier: 2});
  add_item("Novices Shield",       { "Birch Planks" :  4, "Copper Bar"   : 4 }, {tier: 2});

  /* Journeyman Warriors Forge -> Weapons */
  add_item("Journeymans Broadsword",  { "Bronze Bar"   : 16, "Thick Leather"  : 8 }, {tier: 3});
  add_item("Journeymans Battleaxe",   { "Chestnut Planks" :  8, "Bronze Bar"  : 16 }, {tier: 3});
  add_item("Journeymans Mace",        { "Bronze Bar" :  16, "Neat Cloth"      : 8 }, {tier: 3});
  add_item("Journeymans Crossbow",    { "Chestnut Planks" :  20, "Bronze Bar" : 12 }, {tier: 3});
  add_item("Journeymans Hammer",      { "Bronze Bar" : 24 }, {tier: 3});
  add_item("Journeymans Shield",      { "Chestnut Planks": 4, "Bronze Bar" : 4 }, {tier: 3});

  /* Adepts Weapons */
  add_item("Adepts Broadsword",   { "Steel Bar" : 16, "Worked Leather"  : 8 }, {tier: 4});
  add_item("Adepts Claymore",     { "Steel Bar" : 20, "Worked Leather"  : 12 }, {tier: 4});
  add_item("Adepts Dual Swords",  { "Steel Bar" : 20, "Worked Leather"  : 12 }, {tier: 4});

  add_item("Adepts Battleaxe",   { "Pine Planks" :  8, "Steel Bar"  : 16 }, {tier: 4});
  add_item("Adepts Greataxe",   { "Pine Planks" :  12, "Steel Bar"  : 20 }, {tier: 4});
  add_item("Adepts Halberd",   { "Pine Planks" :  20, "Steel Bar"  : 12 }, {tier: 4});

  add_item("Adepts Mace",        { "Steel Bar" :  16, "Fine Cloth"      : 8 }, {tier: 4});
  add_item("Adepts Heavy Mace",        { "Steel Bar" :  20, "Fine Cloth"      : 12 }, {tier: 4});
  add_item("Adepts Morning Star",        { "Steel Bar" :  20, "Fine Cloth"      : 12 }, {tier: 4});

  add_item("Adepts Hammer",        { "Steel Bar" :  24 }, {tier: 4});
  add_item("Adepts Pole Hammer",        { "Steel Bar" :  20, "Fine Cloth"      : 12 }, {tier: 4});
  add_item("Adepts Great Hammer",        { "Steel Bar" :  20, "Fine Cloth"      : 12 }, {tier: 4});

  add_item("Adepts Crossbow",    { "Pine Planks" :  20, "Steel Bar" : 12 }, {tier: 4});
  add_item("Adepts Heavy Crossbow",    { "Pine Planks" :  20, "Steel Bar" : 12 }, {tier: 4});
  add_item("Adepts Light Crossbow",    { "Pine Planks" :  16, "Steel Bar" : 8 }, {tier: 4});

  add_item("Adepts Shield",      { "Pine Planks": 4, "Steel Bar" : 4 }, {tier: 4});

  add_item("Adepts Weeping Repeater", { "Pine Planks": 20, "Steel Bar" : 12, "Adepts Lost Crossbow Mechanism": 1 },
                                      {tier: 4, keywords: ['crossbow'] }
  );
  add_item("Adepts Carrioncaller",     { "Pine Planks": 20, "Steel Bar" : 12, "Adepts Morgana Halberd Head": 1 },
                                       {tier: 4, keywords: ['halberd']}
  );
  add_item("Adepts Clarent Blade",      { "Steel Bar" : 16, "Worked Leather": 8, "Adepts Bloodforged Blade": 1 },
                                        {tier: 4, keywords: ['broadsword']}
  );
  add_item("Adepts Tombhammer",      { "Steel Bar": 20, "Fine Cloth" : 12, "Adepts Ancient Hammer Head": 1 },
                                     {tier: 4, keywords: ['hammer']}
  );
  add_item("Adepts Sarcophagus",      { "Pine Planks": 4, "Steel Bar" : 4, "Adepts Ancient Shield Core": 1 },
                                      {tier: 4, keywords: ['shield'] }
  );
  add_item("Adepts Bedrock Mace",     { "Steel Bar": 16, "Fine Cloth" : 8, "Adepts Runed Rock": 1 },
                                      {tier: 4, keywords: ['mace']}
  );
  add_item("Adepts Infernal Scythe",  { "Pine Planks": 12, "Steel Bar": 20, "Adepts Hellish Sicklehead": 1 },
                                      {tier: 4, keywords: ['battleaxe'] }
  );
  add_item("Adepts Boltcasters",      { "Pine Planks": 20, "Steel Bar" : 12, "Adepts Hellish Bolts": 1 },
                                      {tier: 4, keywords: ['crossbow']}
  );
  add_item("Adepts Carving Sword",     { "Steel Bar": 20, "Worked Leather" : 12, "Adepts Demonic Blade": 1 },
                                       {tier: 4, keywords: ['broadsword'] }
  );
  add_item("Adepts Forge Hammers",     { "Steel Bar": 20, "Fine Cloth": 12, "Adepts Hellish Hammer Heads": 1 },
                                       {tier: 4, keywords: ['hammer']}
  );
  add_item("Adepts Incubus Mace",      { "Steel Bar": 16,  "Fine Cloth" : 8, "Adepts Infernal Mace Head": 1 },
                                       {tier: 4, keywords: ['mace']}
  );
  add_item("Adepts Caitiff Shield",    { "Pine Planks": 4, "Steel Bar" : 4, "Adepts Infernal Shield Core": 1 },
                                       {tier: 4}
  );
  /* Novices Warriors Forge -> Armor */
  add_item("Novices Soldier Helmet", { "Copper Bar" : 8  }, { tier: 2});
  add_item("Novices Soldier Armor",  { "Copper Bar" : 16 }, { tier: 2});
  add_item("Novices Soldier Boots",  { "Copper Bar" : 8  }, { tier: 2});

  /* Journeymans */
  add_item("Journeymans Soldier Helmet", { "Bronze Bar" : 8  }, { tier: 3});
  add_item("Journeymans Soldier Armor",  { "Bronze Bar" : 16 }, { tier: 3});
  add_item("Journeymans Soldier Boots",  { "Bronze Bar" : 8  }, { tier: 3});

  /* Adepts -> Armor */
  add_item("Adepts Knight Helmet", { "Steel Bar": 8 }, {tier: 4});
  add_item("Adepts Knight Armor", { "Steel Bar": 16 }, {tier: 4});
  add_item("Adepts Knight Boots", { "Steel Bar": 8 }, {tier: 4});

  add_item("Adepts Guardian Helmet", { "Steel Bar": 8 }, {tier: 4});
  add_item("Adepts Guardian Armor", { "Steel Bar": 16 }, {tier: 4});
  add_item("Adepts Guardian Boots", { "Steel Bar": 8 }, {tier: 4});

  add_item("Adepts Soldier Helmet", { "Steel Bar": 8 }, {tier: 4});
  add_item("Adepts Soldier Armor", { "Steel Bar": 16 }, {tier: 4});
  add_item("Adepts Soldier Boots", { "Steel Bar": 8 }, {tier: 4});

  /* TODO: Adepts Royal Helment/Armor/Boots, which have 3 recipies each
   */

  add_item("Adepts Graveguard Helmet", { "Steel Bar": 8, "Adepts Ancient Padding": 1 }, {tier: 4});
  add_item("Adepts Graveguard Armor", { "Steel Bar": 16, "Adepts Ancient Chain Rings": 1 }, {tier: 4});
  add_item("Adepts Graveguard Boots", { "Steel Bar": 8, "Adepts Ancient Bindings": 1 }, {tier: 4});

  add_item("Adepts Demon Armour", { "Steel Bar": 16, "Adepts Demonic Plates": 1}, {tier: 4});
  add_item("Adepts Demon Helmet", { "Steel Bar": 8, "Adepts Demonic Scraps": 1}, {tier: 4});
  add_item("Adepts Demon Boots",  { "Steel Bar": 8, "Adepts Demonic Filling": 1}, {tier: 4});

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

  /* Adepts */
  add_item("Adepts Bow", { "Pine Planks": 32 }, { tier: 4 });
  add_item("Adepts Warbow", { "Pine Planks": 32 }, { tier: 4 });
  add_item("Adepts Longbow", { "Pine Planks": 32 }, { tier: 4 });

  add_item("Adepts Spear", {"Pine Planks": 16, "Steel Bar": 8}, {tier : 4});
  add_item("Adepts Pike", { "Pine Planks": 20, "Steel Bar": 12}, { tier: 4 });
  add_item("Adepts Glaive", { "Pine Planks": 12, "Steel Bar": 20}, { tier: 4 });

  add_item("Adepts Dagger", { "Steel Bar": 12, "Worked Leather": 12 }, { tier: 4 });
  add_item("Adepts Dagger Pair", { "Steel Bar": 16, "Worked Leather": 16 }, { tier: 4 });
  add_item("Adepts Claws", { "Steel Bar": 12, "Worked Leather": 20 }, { tier: 4, keywords: ['dagger'] });

  add_item("Adepts Quarterstaff", {"Steel Bar": 12, "Worked Leather": 20}, { tier: 4 });
  add_item("Adepts Iron-clad Staff", {"Steel Bar": 12, "Worked Leather": 20}, { tier: 4, keywords: ['ironclad']  });
  add_item("Adepts Double Bladed Staff", {"Steel Bar": 12, "Worked Leather": 20}, { tier: 4 });

  add_item("Adepts Nature Staff", {"Pine Planks": 16, "Fine Cloth": 8}, { tier: 4 });
  add_item("Adepts Great Nature Staff", {"Pine Planks": 20, "Fine Cloth": 12}, { tier: 4 });
  add_item("Adepts Wild Staff", {"Pine Planks": 20, "Fine Cloth": 12}, { tier: 4 });
  add_item("Adepts Torch", {"Pine Planks": 4, "Fine Cloth": 4}, { tier: 4 });

  add_item("Adepts Whispering Bow", {"Pine Planks": 32, "Adepts Ghastly Arrows": 1}, { tier: 4 });
  add_item("Adepts Bloodletter",  {"Steel Bar": 16, "Worked Leather": 8, "Adepts Hardened Debole": 1},
                                  { tier: 4 , keywords: ['dagger']}
  );
  add_item("Adepts Black Monk Stave", {"Steel Bar": 12, "Worked Leather": 20, "Adepts Reinforced Morgana Pole": 1},
                                      { tier: 4, keywords: ['quarterstaff']}
  );
  add_item("Adepts Heron Spear", {"Pine Planks": 16, "Steel Bar": 8, "Adepts Keeper Spearhead": 1 },
                                 {tier: 4}
  );
  add_item("Adepts Druidic Staff", {"Pine Planks": 16, "Fine Cloth": 8, "Adepts Druidic Inscriptions": 1 }, { tier: 4 });
  add_item("Adepts Mistcaller", {"Pine Planks": 4, "Fine Cloth": 4, "Adepts Runed Horn": 1 }, { tier: 4 , keywords: ['torch'] });

  add_item("Adepts Black Hands",  {"Steel Bar": 12, "Worked Leather": 20, "Adepts Black Leather": 1 },
                                  { tier: 4, keywords: ['claws','dagger']}
  );
  add_item("Adepts Soulscythe", {"Steel Bar": 12, "Worked Leather": 20, "Adepts Hellish Sicklehead Pair": 1 },
                                { tier: 4, keywords: ['quarterstaff'] }
  );
  add_item("Adepts Spirithunter", {"Pine Planks": 20, "Steel Bar": 12, "Adepts Infernal Harpoon Tip": 1 },
                                  { tier: 4, keywords: ['spear'] }
  );
  add_item("Adepts Wailing Bow", {"Pine Planks": 32, "Adepts Demonic Arrowheads": 1 }, {tier: 4});
  add_item("Adepts Blight Staff", {"Pine Planks": 20, "Fine Cloth": 12, "Adepts Symbol of Blight": 1 }, { tier: 4 });
  add_item("Adepts Leering Cane", {"Pine Planks": 4, "Fine Cloth": 4, "Adepts Hellish Handle": 1 }, { tier: 4 });

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

  /* Adepts */
  add_item("Adepts Assassin Hood", { "Worked Leather": 8 }, {tier: 4});
  add_item("Adepts Assassin Jacket", { "Worked Leather": 16 }, {tier: 4});
  add_item("Adepts Assassin Shoes", { "Worked Leather": 8 }, {tier: 4});

  add_item("Adepts Mercenary Hood", { "Worked Leather": 8 }, {tier: 4});
  add_item("Adepts Mercenary Jacket", { "Worked Leather": 16 }, {tier: 4});
  add_item("Adepts Mercenary Shoes", { "Worked Leather": 8 }, {tier: 4});

  add_item("Adepts Hunter Hood", { "Worked Leather": 8 }, {tier: 4});
  add_item("Adepts Hunter Jacket", { "Worked Leather": 16 }, {tier: 4});
  add_item("Adepts Hunter Shoes", { "Worked Leather": 8 }, {tier: 4});

  /* Again, Royal Adepts TODO */
  add_item("Adepts Stalker Hood", { "Worked Leather": 8 , "Adepts Imbued Visor": 1 }, { tier: 4 });
  add_item("Adepts Stalker Jacket", { "Worked Leather": 16 , "Adepts Imbued Leather Folds": 1 }, { tier: 4 });
  add_item("Adepts Stalker Shoes", { "Worked Leather": 8 , "Adepts Imbued Soles": 1 }, { tier: 4 });

  add_item("Adepts Hellion Jacket", {"Worked Leather": 16, "Adepts Demonhide Leather": 1 }, { tier: 4 });
  add_item("Adepts Hellion Hood", { "Worked Leather": 8, "Adepts Demonhide Padding": 1 }, { tier: 4});
  add_item("Adepts Hellion Shoes", { "Worked Leather": 8, "Adepts Demonhide Bindings": 1 }, { tier: 4});

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
