(function() {
  let add_item = document.AlbionData.add_item;

  /** For Ranged **/
  let adepts_melding = [ { "Adepts Rune": 50 }, { "Adepts Relic": 50 } ];
  let adepts_demon_melding = { "Adepts Soul": 50 };

  add_item("Adepts Druidic Inscriptions",     {}, {tier: 4, meld_from: adepts_melding });
  add_item("Adepts Ghastly Arrows",           {}, {tier: 4, meld_from: adepts_melding });
  add_item("Adepts Hardened Debole",          {}, {tier: 4, meld_from: adepts_melding });
  add_item("Adepts Keeper Spearhead",         {}, {tier: 4, meld_from: adepts_melding });
  add_item("Adepts Reinforced Morgana Pole",  {}, {tier: 4, meld_from: adepts_melding });
  add_item("Adepts Runed Horn",               {}, {tier: 4, meld_from: adepts_melding });

  add_item("Adepts Imbued Leather Folds",     {}, {tier: 4, meld_from: adepts_melding });
  add_item("Adepts Imbued Soles",             {}, {tier: 4, meld_from: adepts_melding });
  add_item("Adepts Imbued Visor",             {}, {tier: 4, meld_from: adepts_melding });

  add_item("Adepts Black Leather",            {}, {tier: 4, meld_from: adepts_demon_melding });
  add_item("Adepts Demonic Arrowheads",       {}, {tier: 4, meld_from: adepts_demon_melding });
  add_item("Adepts Hellish Handle",           {}, {tier: 4, meld_from: adepts_demon_melding });
  add_item("Adepts Hellish Sicklehead Pair",  {}, {tier: 4, meld_from: adepts_demon_melding });
  add_item("Adepts Infernal Harpoon Tip",     {}, {tier: 4, meld_from: adepts_demon_melding });
  add_item("Adepts Symbol of Blight",         {}, {tier: 4, meld_from: adepts_demon_melding });

  add_item("Adepts Demonhide Bindings",       {}, {tier: 4, meld_from: adepts_demon_melding });
  add_item("Adepts Demonhide Leather",        {}, {tier: 4, meld_from: adepts_demon_melding });
  add_item("Adepts Demonhide Padding",        {}, {tier: 4, meld_from: adepts_demon_melding });

  let experts_melding = [ { "Experts Rune": 50 }, { "Experts Relic": 50 } ];
  let experts_demon_melding = { "Experts Soul": 50 };

  add_item("Experts Druidic Inscriptions",     {}, {tier: 5, meld_from: experts_melding });
  add_item("Experts Ghastly Arrows",           {}, {tier: 5, meld_from: experts_melding });
  add_item("Experts Hardened Debole",          {}, {tier: 5, meld_from: experts_melding });
  add_item("Experts Keeper Spearhead",         {}, {tier: 5, meld_from: experts_melding });
  add_item("Experts Reinforced Morgana Pole",  {}, {tier: 5, meld_from: experts_melding });
  add_item("Experts Runed Horn",               {}, {tier: 5, meld_from: experts_melding });

  add_item("Experts Imbued Leather Folds",     {}, {tier: 5, meld_from: experts_melding });
  add_item("Experts Imbued Soles",             {}, {tier: 5, meld_from: experts_melding });
  add_item("Experts Imbued Visor",             {}, {tier: 5, meld_from: experts_melding });

  add_item("Experts Black Leather",            {}, {tier: 5, meld_from: experts_demon_melding });
  add_item("Experts Demonic Arrowheads",       {}, {tier: 5, meld_from: experts_demon_melding });
  add_item("Experts Hellish Handle",           {}, {tier: 5, meld_from: experts_demon_melding });
  add_item("Experts Hellish Sicklehead Pair",  {}, {tier: 5, meld_from: experts_demon_melding });
  add_item("Experts Infernal Harpoon Tip",     {}, {tier: 5, meld_from: experts_demon_melding });
  add_item("Experts Symbol of Blight",         {}, {tier: 5, meld_from: experts_demon_melding });

  add_item("Experts Demonhide Bindings",       {}, {tier: 5, meld_from: experts_demon_melding });
  add_item("Experts Demonhide Leather",        {}, {tier: 5, meld_from: experts_demon_melding });
  add_item("Experts Demonhide Padding",        {}, {tier: 5, meld_from: experts_demon_melding });

  let masters_melding = [ { "Masters Rune": 50 }, { "Masters Relic": 50 } ];
  let masters_demon_melding = { "Masters Soul": 50 };

  add_item("Masters Druidic Inscriptions",     {}, {tier: 6, meld_from: masters_melding });
  add_item("Masters Ghastly Arrows",           {}, {tier: 6, meld_from: masters_melding });
  add_item("Masters Hardened Debole",          {}, {tier: 6, meld_from: masters_melding });
  add_item("Masters Keeper Spearhead",         {}, {tier: 6, meld_from: masters_melding });
  add_item("Masters Reinforced Morgana Pole",  {}, {tier: 6, meld_from: masters_melding });
  add_item("Masters Runed Horn",               {}, {tier: 6, meld_from: masters_melding });

  add_item("Masters Imbued Leather Folds",     {}, {tier: 6, meld_from: masters_melding });
  add_item("Masters Imbued Soles",             {}, {tier: 6, meld_from: masters_melding });
  add_item("Masters Imbued Visor",             {}, {tier: 6, meld_from: masters_melding });

  add_item("Masters Black Leather",            {}, {tier: 6, meld_from: masters_demon_melding });
  add_item("Masters Demonic Arrowheads",       {}, {tier: 6, meld_from: masters_demon_melding });
  add_item("Masters Hellish Handle",           {}, {tier: 6, meld_from: masters_demon_melding });
  add_item("Masters Hellish Sicklehead Pair",  {}, {tier: 6, meld_from: masters_demon_melding });
  add_item("Masters Infernal Harpoon Tip",     {}, {tier: 6, meld_from: masters_demon_melding });
  add_item("Masters Symbol of Blight",         {}, {tier: 6, meld_from: masters_demon_melding });

  add_item("Masters Demonhide Bindings",       {}, {tier: 6, meld_from: masters_demon_melding });
  add_item("Masters Demonhide Leather",        {}, {tier: 6, meld_from: masters_demon_melding });
  add_item("Masters Demonhide Padding",        {}, {tier: 6, meld_from: masters_demon_melding });

  let grandmasters_melding = [ { "Grandmasters Rune": 50 }, { "Grandmasters Relic": 50 } ];
  let grandmasters_demon_melding = { "Grandmasters Soul": 50 };

  add_item("Grandmasters Druidic Inscriptions",     {}, {tier: 7, meld_from: grandmasters_melding });
  add_item("Grandmasters Ghastly Arrows",           {}, {tier: 7, meld_from: grandmasters_melding });
  add_item("Grandmasters Hardened Debole",          {}, {tier: 7, meld_from: grandmasters_melding });
  add_item("Grandmasters Keeper Spearhead",         {}, {tier: 7, meld_from: grandmasters_melding });
  add_item("Grandmasters Reinforced Morgana Pole",  {}, {tier: 7, meld_from: grandmasters_melding });
  add_item("Grandmasters Runed Horn",               {}, {tier: 7, meld_from: grandmasters_melding });

  add_item("Grandmasters Imbued Leather Folds",     {}, {tier: 7, meld_from: grandmasters_melding });
  add_item("Grandmasters Imbued Soles",             {}, {tier: 7, meld_from: grandmasters_melding });
  add_item("Grandmasters Imbued Visor",             {}, {tier: 7, meld_from: grandmasters_melding });

  add_item("Grandmasters Black Leather",            {}, {tier: 7, meld_from: grandmasters_demon_melding });
  add_item("Grandmasters Demonic Arrowheads",       {}, {tier: 7, meld_from: grandmasters_demon_melding });
  add_item("Grandmasters Hellish Handle",           {}, {tier: 7, meld_from: grandmasters_demon_melding });
  add_item("Grandmasters Hellish Sicklehead Pair",  {}, {tier: 7, meld_from: grandmasters_demon_melding });
  add_item("Grandmasters Infernal Harpoon Tip",     {}, {tier: 7, meld_from: grandmasters_demon_melding });
  add_item("Grandmasters Symbol of Blight",         {}, {tier: 7, meld_from: grandmasters_demon_melding });

  add_item("Grandmasters Demonhide Bindings",       {}, {tier: 7, meld_from: grandmasters_demon_melding });
  add_item("Grandmasters Demonhide Leather",        {}, {tier: 7, meld_from: grandmasters_demon_melding });
  add_item("Grandmasters Demonhide Padding",        {}, {tier: 7, meld_from: grandmasters_demon_melding });

  let elders_melding = [ { "Elders Rune": 50 }, { "Elders Relic": 50 } ];
  let elders_demon_melding = { "Elders Soul": 50 };

  add_item("Elders Druidic Inscriptions",     {}, {tier: 8, meld_from: elders_melding });
  add_item("Elders Ghastly Arrows",           {}, {tier: 8, meld_from: elders_melding });
  add_item("Elders Hardened Debole",          {}, {tier: 8, meld_from: elders_melding });
  add_item("Elders Keeper Spearhead",         {}, {tier: 8, meld_from: elders_melding });
  add_item("Elders Reinforced Morgana Pole",  {}, {tier: 8, meld_from: elders_melding });
  add_item("Elders Runed Horn",               {}, {tier: 8, meld_from: elders_melding });

  add_item("Elders Imbued Leather Folds",     {}, {tier: 8, meld_from: elders_melding });
  add_item("Elders Imbued Soles",             {}, {tier: 8, meld_from: elders_melding });
  add_item("Elders Imbued Visor",             {}, {tier: 8, meld_from: elders_melding });

  add_item("Elders Black Leather",            {}, {tier: 8, meld_from: elders_demon_melding });
  add_item("Elders Demonic Arrowheads",       {}, {tier: 8, meld_from: elders_demon_melding });
  add_item("Elders Hellish Handle",           {}, {tier: 8, meld_from: elders_demon_melding });
  add_item("Elders Hellish Sicklehead Pair",  {}, {tier: 8, meld_from: elders_demon_melding });
  add_item("Elders Infernal Harpoon Tip",     {}, {tier: 8, meld_from: elders_demon_melding });
  add_item("Elders Symbol of Blight",         {}, {tier: 8, meld_from: elders_demon_melding });

  add_item("Elders Demonhide Bindings",       {}, {tier: 8, meld_from: elders_demon_melding });
  add_item("Elders Demonhide Leather",        {}, {tier: 8, meld_from: elders_demon_melding });
  add_item("Elders Demonhide Padding",        {}, {tier: 8, meld_from: elders_demon_melding });


})();
