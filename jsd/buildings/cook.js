(function() {
  let add_item = document.AlbionData.add_item;

  /* Novices Cook -> Food */
  add_item("Carrot Soup", { "Carrots" : 16 }, { tier: 1 , keywords: ['food']});
  add_item("Bean Salad",  { "Beans"   :  8, "Carrots" : 8 }, { tier: 2 , keywords: ['food']});

  add_item("Wheat Soup", { "Sheaf of Wheat": 48 }, { tier: 3, keywords: ['food'] } );
  add_item("Chicken Omelette", {"Raw Chicken": 8, "Sheaf of Wheat": 4, "Hen Eggs": 2 }, { tier: 3, keywords: ['food'] });
  add_item("Chicken Pie", {"Raw Chicken": 8, "Flour": 4, "Sheaf of Wheat": 2 }, { tier: 3, keywords: ['food']});
  add_item("Turnip Salad", {"Turnips": 24, "Sheaf of Wheat": 24}, {tier: 4, keywords: ['food']});
  add_item("Bread", {"Flour": 4 }, {tier: 4, keywords: ['food']});
  add_item("Goat Stew", {"Raw Goat": 8, "Bread": 4, "Turnips": 4}, {tier: 4, keywords: ['food']});
  add_item("Goat Sandwich", {"Raw Goat": 8, "Bread": 4, "Goats Butter": 2}, {tier: 4, keywords: ['food']});
})();
