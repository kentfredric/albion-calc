(function() {
  let add_item = document.AlbionData.add_item;
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

})();
