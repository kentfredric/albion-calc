(function() {
  let add_item = document.AlbionData.add_item;

  /** For Mages **/
  let adepts_mages_melding = [ { "Adepts Rune": 50 }, { "Adepts Relic": 50 } ];
  let adepts_mages_demon_melding = { "Adepts Soul": 50 };
  add_item("Adepts Alluring Crystal",     {}, {tier: 4, meld_from: adepts_mages_melding });
  add_item("Adepts Hoarfrost Orb",        {}, {tier: 4, meld_from: adepts_mages_melding });
  add_item("Adepts Lost Arcane Crystal",  {}, {tier: 4, meld_from: adepts_mages_melding });
  add_item("Adepts Lost Cursed Crystal",  {}, {tier: 4, meld_from: adepts_mages_melding });
  add_item("Adepts Possessed Scroll",     {}, {tier: 4, meld_from: adepts_mages_melding });
  add_item("Adepts Wildfire Orb",         {}, {tier: 4, meld_from: adepts_mages_melding });

  add_item("Adepts Druidic Feathers",       {}, {tier: 4, meld_from: adepts_mages_melding });
  add_item("Adepts Druidic Preserved Beak", {}, {tier: 4, meld_from: adepts_mages_melding });
  add_item("Adepts Druidic Bindings",       {}, {tier: 4, meld_from: adepts_mages_melding });

  add_item("Adepts Burning Orb",          {}, {tier: 4, meld_from: adepts_mages_demon_melding });
  add_item("Adepts Cursed Jawbone",       {}, {tier: 4, meld_from: adepts_mages_demon_melding });
  add_item("Adepts Demonic Jawbone",      {}, {tier: 4, meld_from: adepts_mages_demon_melding });
  add_item("Adepts Icicle Orb",           {}, {tier: 4, meld_from: adepts_mages_demon_melding });
  add_item("Adepts Infernal Scroll",      {}, {tier: 4, meld_from: adepts_mages_demon_melding });
  add_item("Adepts Occult Orb",           {}, {tier: 4, meld_from: adepts_mages_demon_melding });

  add_item("Adepts Infernal Cloth Folds",     {}, {tier: 4, meld_from: adepts_mages_demon_melding });
  add_item("Adepts Infernal Cloth Visor",     {}, {tier: 4, meld_from: adepts_mages_demon_melding });
  add_item("Adepts Infernal Cloth Bindings",  {}, {tier: 4, meld_from: adepts_mages_demon_melding });

})();
