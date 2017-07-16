(function() {
  let add_item = document.AlbionData.add_item;

   /* T2 Materials */
  add_item( "Stiff Leather",   { "Rugged Hide" : 1 }, { tier: 2 });
  add_item( "Limestone Block", { "Limestone"   : 1 }, { tier: 2 });

  /* T3 Materials */

  add_item( "Sandstone Block", { "Sandstone" :    2, "Limestone Block": 1 }, { tier: 3 });
  add_item( "Thick Leather",   { "Thin Hide" :    2, "Stiff Leather":   1 }, { tier: 3 });

  /* T4 Materials */
  add_item( "Travertine Block", { "Travertine" : 2, "Sandstone Block" : 1 }, { tier: 4 });
  add_item( "Worked Leather",  { "Medium Hide" :  2, "Thick Leather":   1 }, { tier: 4 });

  add_item( "Uncommon Worked Leather", { "Uncommon Medium Hide" : 2, "Thick Leather" : 1 }, { tier: 4 });
  add_item( "Rare Worked Leather", { "Rare Medium Hide" : 2, "Thick Leather" : 1 }, { tier: 4 });
  add_item( "Exceptional Worked Leather", { "Exceptional Medium Hide" : 2, "Thick Leather" : 1 }, { tier: 4 });



  /* T5 Materials */
  add_item( "Granite Block", { "Granite" : 3, "Travertine Block": 1 }, {tier: 5});
  add_item( "Cured Leather", { "Heavy Hide": 3, "Worked Leather": 1 }, { tier: 5 });

  /* T6 Materials */
  add_item( "Slate Block",     { "Slate" : 4,        "Granite Block": 1 }, {tier: 6});
  add_item( "Hardened Leather", { "Robust Hide": 4, "Cured Leather": 1 }, { tier: 6 });

  /* T7 Materials */
  add_item( "Basalt Block",     { "Basalt":         5, "Slate Block"     : 1 }, {tier: 7});
  add_item( "Reinforced Leather", { "Thick Hide": 5, "Hardened Leather": 1 }, { tier: 7 });

  /* T8 Materials */
  add_item( "Marble Block",     { "Marble":         5, "Basalt Block"    : 1 }, {tier: 8});
  add_item( "Fortified Leather",{ "Resilient Hide": 5, "Reinforced Leather": 1 }, {tier: 8});
})();
