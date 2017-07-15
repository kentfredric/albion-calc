(function() {
  let add_item = document.AlbionData.add_item;

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

})();
