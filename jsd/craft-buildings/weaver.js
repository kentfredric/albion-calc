(function() {
  let add_item = document.AlbionData.add_item;

  add_item( "Simple Cloth",  { "Cotton"         : 1                     }, { tier: 2 });
  add_item( "Neat Cloth",    { "Flax"           : 2, "Simple Cloth" : 1 }, { tier: 3 });
  add_item( "Fine Cloth",    { "Hemp"           : 2, "Neat Cloth"   : 1 }, { tier: 4 });
  add_item( "Ornate Cloth",  { "Skyflower"      : 3, "Fine Cloth"   : 1 }, { tier: 5 });
  add_item( "Lavish Cloth",  { "Readleaf Cotton": 4, "Ornate Cloth" : 1 }, { tier: 6 });
  add_item( "Opulent Cloth", { "Sunflax"        : 5, "Lavish Cloth" : 1 }, { tier: 7 });
  add_item( "Baroque Cloth", { "Ghost Hemp"     : 5, "Opulent Cloth": 1 }, { tier: 8 });

  add_item( "Uncommon Fine Cloth",    { "Uncommon Medium Hide"    : 2, "Neat Cloth" : 1 }, { tier: 4 });
  add_item( "Rare Fine Cloth",        { "Rare Medium Hide"        : 2, "Neat Cloth" : 1 }, { tier: 4 });
  add_item( "Exceptional Fine Cloth", { "Exceptional Medium Hide" : 2, "Neat Cloth" : 1 }, { tier: 4 });

})();
