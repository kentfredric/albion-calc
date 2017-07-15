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

  /* Novics Mage Tower -> Armor */
  add_item("Novices Scholar Cowl",    { "Simple Cloth" :  8 }, {tier: 2 });
  add_item("Novices Scholar Robe",    { "Simple Cloth" : 16 }, {tier: 2 });
  add_item("Novices Scholar Sandals", { "Simple Cloth" :  8 }, {tier: 2 });

  add_item("Journeymans Scholar Cowl", { "Neat Cloth": 8 }, {tier: 3});
  add_item("Journeymans Scholar Robe", { "Neat Cloth": 16 }, {tier: 3});
  add_item("Journeymans Scholar Sandals", { "Neat Cloth": 8 }, {tier: 3});

})();
