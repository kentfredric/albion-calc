(function() {
  let add_item = document.AlbionData.add_item;

  add_item( "Birch Planks" ,    { "Birch Logs":     1                         }, {tier: 2});
  add_item( "Chestnut Planks",  { "Chestnut Logs":  2, "Birch Planks":      1 }, {tier: 3});
  add_item( "Pine Planks",      { "Pine Logs":      2, "Chestnut Planks":   1 }, {tier: 4});
  add_item( "Cedar Planks",     { "Cedar Logs":     3, "Pine Planks" :      1 }, {tier: 5});
  add_item( "Bloodoak Planks",  { "Bloodoak Logs":  4, "Cedar Planks":      1 }, {tier: 6});
  add_item( "Ashenbark Planks", { "Ashenbark Logs": 5, "Bloodoak Planks" :  1 }, {tier: 7});
  add_item( "Whitewood Planks", { "Whitewood Logs": 5, "Ashenbark Planks":  1 }, {tier: 8});
})();
