(function() {
  let add_item = document.AlbionData.add_item;

  /* T1 Materials */
  add_item( "Rough Logs"  ,   {}, { tier: 1 });
  add_item( "Rough Stone" ,   {}, { tier: 1 });
  add_item( "Scraps of Hide", {}, { tier: 1 });

  /* T2 Materials */
  add_item( "Copper Ore"  , {}, { tier: 2 } );
  add_item( "Cotton"      , {}, { tier: 2, keywords: ['fibre'] } );
  add_item( "Rugged Hide" , {}, { tier: 2 } );
  add_item( "Limestone"   , {}, { tier: 2 } );
  add_item( "Birch Logs"  , {}, { tier: 2 } );

  /* T3 Materials */
  add_item( "Sandstone"      , { }, { tier: 3, transmute_from: { "Limestone":   3 } });
  add_item( "Chestnut Logs"  , { }, { tier: 3, transmute_from: { "Birch Logs":  3 } });
  add_item( "Thin Hide"      , { }, { tier: 3, transmute_from: { "Rugged Hide": 3 } });
  add_item( "Tin Ore"        , { }, { tier: 3, transmute_from: { "Copper Ore":  3 } });
  add_item( "Flax"           , { }, { tier: 3, transmute_from: { "Cotton":      3 }, keywords: ['fibre'] });

  /* T4 Materials */
  add_item( "Travertine"    , { }, { tier: 4, transmute_from: { "Sandstone": 6     }, keywords: ['stone'] });
  add_item( "Medium Hide"   , { }, { tier: 4, transmute_from: { "Thin Hide": 6     } });
  add_item( "Iron Ore"      , { }, { tier: 4, transmute_from: { "Tin Ore": 6       } });
  add_item( "Pine Logs"     , { }, { tier: 4, transmute_from: { "Chestnut Logs": 6 } });
  add_item( "Hemp"          , { }, { tier: 4, transmute_from: { "Flax": 6          }, keywords: ['fibre'] });

  add_item( "Uncommon Medium Hide",     { }, { tier: 4, transmute_from: { "Medium Hide" :          1, "Silver": 6000   } });
  add_item( "Rare Medium Hide",         { }, { tier: 4, transmute_from: { "Uncommon Medium Hide" : 1, "Silver": 12000  } });
  add_item( "Exceptional Medium Hide",  { }, { tier: 4, transmute_from: { "Rare Medium Hide" :     1, "Silver": 24000  } });

  add_item( "Uncommon Iron Ore",        { }, { tier: 4, transmute_from: { "Iron Ore" :              1, "Silver": 6000  } });
  add_item( "Rare Iron Ore",            { }, { tier: 4, transmute_from: { "Uncommon Iron Ore" :     1, "Silver": 12000 } });
  add_item( "Exceptional Iron Ore",     { }, { tier: 4, transmute_from: { "Rare Iron Ore" :         1, "Silver": 24000 } });

  add_item( "Uncommon Pine Logs",     { }, { tier: 4, transmute_from: { "Pine Logs" :          1, "Silver": 6000   } });
  add_item( "Rare Pine Logs",         { }, { tier: 4, transmute_from: { "Uncommon Pine Logs" : 1, "Silver": 12000  } });
  add_item( "Exceptional Pine Logs",  { }, { tier: 4, transmute_from: { "Rare Pine Logs" :     1, "Silver": 24000  } });

  add_item( "Uncommon Hemp",     { }, { tier: 4, transmute_from: { "Hemp" :          1, "Silver": 6000   } });
  add_item( "Rare Hemp",         { }, { tier: 4, transmute_from: { "Uncommon Hemp" : 1, "Silver": 12000  } });
  add_item( "Exceptional Hemp",  { }, { tier: 4, transmute_from: { "Rare Hemp" :     1, "Silver": 24000  } });

  /* T5 Materials */
  add_item( "Cedar Logs",   { }, { tier: 5, transmute_from: { "Pine Logs"  : 9 }});
  add_item( "Granite",      { }, { tier: 5, transmute_from: { "Travertine" : 9 }, keywords: ['stone'] });
  add_item( "Titanium Ore", { }, { tier: 5, transmute_from: { "Iron Ore"   : 9 }});
  add_item( "Heavy Hide",   { }, { tier: 5, transmute_from: { "Medium Hide" : 9}});
  add_item( "Skyflower",    { }, { tier: 5, transmute_from: { "Hemp": 9        }, keywords: ['fibre'] });

  /* T6 Materials */
  add_item( "Bloodoak Logs" , { }, { tier: 6, transmute_from: { "Cedar Logs"   : 15 }});
  add_item( "Slate",          { }, { tier: 6, transmute_from: { "Granite"      : 15 }, keywords: ['stone'] });
  add_item( "Runite Ore"    , { }, { tier: 6, transmute_from: { "Titanium Ore" : 15 }});
  add_item( "Robust Hide",    { }, { tier: 6, transmute_from: { "Heavy Hide"   : 15 }});
  add_item( "Readleaf Cotton",{ }, { tier: 6, transmute_from: { "Skyflower"    : 15 }, keywords: ['fibre'] });

  /* T7 Materials */
  add_item( "Ashenbark Logs", { }, { tier: 7, transmute_from: { "Bloodoak Logs"  : 25 }});
  add_item( "Basalt"        , { }, { tier: 7, transmute_from: { "Slate"          : 25 }, keywords: ['stone'] });
  add_item( "Meteorite Ore" , { }, { tier: 7, transmute_from: { "Runite Ore"     : 25 }});
  add_item( "Thick Hide",     { }, { tier: 7, transmute_from: { "Robust Hide"    : 25 }});
  add_item( "Sunflax",        { }, { tier: 7, transmute_from: { "Readleaf Cotton": 25 }, keywords: ['fibre'] });

  /* T8 Materials */
  add_item( "Marble"        , { }, { tier: 8, transmute_from: { "Basalt"        : 42 }, keywords: ['stone'] });
  add_item( "Resilient Hide", { }, { tier: 8, transmute_from: { "Thick Hide"    : 42 }});
  add_item( "Whitewood Logs", { }, { tier: 8, transmute_from: { "Ashenbark Logs": 42 }});
  add_item( "Ghost Hemp",     { }, { tier: 8, transmute_from: { "Sunflax":        42 }, keywords: ['fibre'] });
  add_item( "Adamantium Ore", { }, { tier: 8, transmute_from: { "Meteorite Ore":  42 }});

})();
