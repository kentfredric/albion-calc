(function() {
  let add_item = document.AlbionData.add_item;

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

  add_item("Adepts Arcane Staff", { "Pine Planks": 16, "Steel Bar": 8 }, { tier: 4 });
  add_item("Adepts Great Arcane Staff", { "Pine Planks": 20, "Steel Bar": 12 }, { tier: 4 });
  add_item("Adepts Enigmatic Staff", { "Pine Planks": 20, "Steel Bar": 12 }, { tier: 4, keywords: ['arcane'] } );

  add_item("Adepts Frost Staff", { "Pine Planks": 16, "Steel Bar": 8 }, { tier: 4 });
  add_item("Adepts Great Frost Staff", { "Pine Planks": 20, "Steel Bar": 12 }, { tier: 4 });
  add_item("Adepts Glacial Staff", { "Pine Planks": 20, "Steel Bar": 12 }, { tier: 4, keywords: ['frost'] });

  add_item("Adepts Fire Staff", { "Pine Planks": 16, "Steel Bar": 8 }, { tier: 4 });
  add_item("Adepts Great Fire Staff", { "Pine Planks": 20, "Steel Bar": 12 }, { tier: 4 });
  add_item("Adepts Infernal Staff", { "Pine Planks": 20, "Steel Bar": 12 }, { tier: 4, keywords: ['fire'] });

  add_item("Adepts Cursed Staff", { "Pine Planks": 16, "Steel Bar": 8 }, { tier: 4 });
  add_item("Adepts Great Cursed Staff", { "Pine Planks": 20, "Steel Bar": 12 }, { tier: 4 });
  add_item("Adepts Demonic Staff", { "Pine Planks": 20, "Steel Bar": 12 }, { tier: 4, keywords: ['cursed'] });

  add_item("Adepts Holy Staff", { "Pine Planks": 16, "Steel Bar": 8 }, { tier: 4 });
  add_item("Adepts Great Holy Staff", { "Pine Planks": 20, "Steel Bar": 12 }, { tier: 4 });
  add_item("Adepts Divine Staff", { "Pine Planks": 20, "Steel Bar": 12 }, { tier: 4, keywords: ['holy'] });

  add_item("Adepts Tome of Spells", { "Fine Cloth": 4, "Worked Leather": 4 }, { tier: 4 });

  add_item("Adepts Lifecurse Staff", { "Pine Planks": 16, "Steel Bar": 8, "Adepts Lost Cursed Crystal": 1 },
                                     { tier: 4, keywords: ['cursed'] }
  );

  add_item("Adepts Witchwork Staff", { "Pine Planks": 16, "Steel Bar": 8, "Adepts Lost Arcane Crystal": 1 },
                                     { tier: 4, keywords: ['arcane'] }
  );

  add_item("Adepts Lifetouch Staff", { "Pine Planks": 16, "Fine Cloth": 8, "Adepts Possessed Scroll": 1 },
                                     { tier: 4, keywords: ['holy'] }
  );
  add_item("Adepts Eye of Secrets", { "Fine Cloth": 4, "Worked Leather": 4, "Adepts Alluring Crystal": 1 },
                                    { tier: 4, keywords: ['tome'] }
  );
  add_item("Adepts Wildfire Staff", { "Pine Planks": 16, "Fine Cloth": 8, "Adepts Wildfire Orb": 1 },
                                     { tier: 4, keywords: ['fire'] }
  );
  add_item("Adepts Hoarfrost Staff", { "Pine Planks": 16, "Fine Cloth": 8, "Adepts Hoarfrost Orb": 1 },
                                     { tier: 4, keywords: ['frost'] }
  );
  add_item("Adepts Cursed Skull", { "Pine Planks": 20, "Steel Bar": 12, "Adepts Cursed Jawbone": 1 },
                                     { tier: 4, keywords: ['cursed'] }
  );
  add_item("Adepts Brimstone Staff", { "Pine Planks": 20, "Steel Bar": 12, "Adepts Burning Orb": 1 },
                                     { tier: 4, keywords: ['fire'] }
  );
  add_item("Adepts Icicle Staff", { "Pine Planks": 20, "Steel Bar": 12, "Adepts Icicle Orb": 1 },
                                     { tier: 4, keywords: ['frost'] }
  );
  add_item("Adepts Occult Staff", { "Pine Planks": 20, "Steel Bar": 12, "Adepts Occult Orb": 1 },
                                     { tier: 4, keywords: ['arcane'] }
  );
  add_item("Adepts Fallen Staff", { "Pine Planks": 20, "Fine Cloth": 12, "Adepts Infernal Scroll": 1 },
                                     { tier: 4, keywords: ['holy'] }
  );
  add_item("Adepts Muisak", { "Fine Cloth": 4, "Worked Leather": 4, "Adepts Demonic Jawbone": 1 },
                                    { tier: 4, keywords: ['tome'] }
  );


  /* Novics Mage Tower -> Armor */
  add_item("Novices Scholar Cowl",    { "Simple Cloth" :  8 }, {tier: 2 });
  add_item("Novices Scholar Robe",    { "Simple Cloth" : 16 }, {tier: 2 });
  add_item("Novices Scholar Sandals", { "Simple Cloth" :  8 }, {tier: 2 });

  add_item("Journeymans Scholar Cowl", { "Neat Cloth": 8 }, {tier: 3});
  add_item("Journeymans Scholar Robe", { "Neat Cloth": 16 }, {tier: 3});
  add_item("Journeymans Scholar Sandals", { "Neat Cloth": 8 }, {tier: 3});

})();
