(function() {
  let add_item = document.AlbionData.add_item;

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
})();
