(function() {
  let add_item = document.AlbionData.add_item;
  add_item( "Limestone Block", { "Limestone"   : 1 }, { tier: 2 });
  add_item( "Sandstone Block", { "Sandstone" :    2, "Limestone Block": 1 }, { tier: 3 });
  add_item( "Travertine Block", { "Travertine" : 2, "Sandstone Block" : 1 }, { tier: 4 });
  add_item( "Granite Block", { "Granite" : 3, "Travertine Block": 1 }, {tier: 5});
  add_item( "Slate Block",     { "Slate" : 4,        "Granite Block": 1 }, {tier: 6});
  add_item( "Basalt Block",     { "Basalt":         5, "Slate Block"     : 1 }, {tier: 7});
  add_item( "Marble Block",     { "Marble":         5, "Basalt Block"    : 1 }, {tier: 8});
})();
