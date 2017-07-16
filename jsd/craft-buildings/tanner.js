(function() {
  let add_item = document.AlbionData.add_item;

  add_item( "Stiff Leather",      { "Rugged Hide"   : 1                           }, { tier: 2 });
  add_item( "Thick Leather",      { "Thin Hide"     : 2, "Stiff Leather"      : 1 }, { tier: 3 });
  add_item( "Worked Leather",     { "Medium Hide"   : 2, "Thick Leather"      : 1 }, { tier: 4 });
  add_item( "Cured Leather",      { "Heavy Hide"    : 3, "Worked Leather"     : 1 }, { tier: 5 });
  add_item( "Hardened Leather",   { "Robust Hide"   : 4, "Cured Leather"      : 1 }, { tier: 6 });
  add_item( "Reinforced Leather", { "Thick Hide"    : 5, "Hardened Leather"   : 1 }, { tier: 7 });
  add_item( "Fortified Leather",  { "Resilient Hide": 5, "Reinforced Leather" : 1 }, { tier: 8 });

  add_item( "Uncommon Worked Leather",    { "Uncommon Medium Hide"    : 2, "Thick Leather" : 1 }, { tier: 4 });
  add_item( "Rare Worked Leather",        { "Rare Medium Hide"        : 2, "Thick Leather" : 1 }, { tier: 4 });
  add_item( "Exceptional Worked Leather", { "Exceptional Medium Hide" : 2, "Thick Leather" : 1 }, { tier: 4 });

})();
