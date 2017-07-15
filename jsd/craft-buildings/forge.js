(function() {
  let add_item = document.AlbionData.add_item;

  add_item( "Copper Bar",           { "Copper Ore":     1                           }, {tier: 2});
  add_item( "Bronze Bar",           { "Tin Ore"   :     2, "Copper Bar":          1 }, {tier: 3});
  add_item( "Steel Bar",            { "Iron Ore":       2, "Bronze Bar" :         1 }, {tier: 4});
  add_item( "Titanium Steel Bar",   { "Titanium Ore":   3, "Steel Bar":           1 }, {tier: 5});
  add_item( "Runite Steel Bar",     { "Runite Ore":     4, "Titanium Steel Bar":  1 }, {tier: 6});
  add_item( "Meteorite Steel Bar",  { "Meteorite Ore":  5, "Runite Steel Bar":    1 }, {tier: 7});
  add_item( "Adamantium Steel Bar", { "Adamantium Ore": 5, "Meteorite Steel Bar": 1 }, {tier: 8});

  add_item( "Uncommon Steel Bar",     { "Uncommon Iron Ore":    2, "Bronze Bar" : 1 }, {tier: 4});
  add_item( "Rare Steel Bar",         { "Rare Iron Ore":        2, "Bronze Bar" : 1 }, {tier: 4});
  add_item( "Exceptional Steel Bar",  { "Exceptional Iron Ore": 2, "Bronze Bar" : 1 }, {tier: 4});

})();
