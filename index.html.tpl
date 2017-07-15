<html>
 <head>
   <title>Resource Computation</title>
   <style>
   html {
     font-family: sans-serif;
   }
   div.resource_group {
      border: 1px solid black;
      background-color: rgba( 0, 0, 0, 0.1 );
      padding-left: 10px;
      padding-bottom: 5px;
   }
   div.transmutation {
      background: linear-gradient(to bottom,rgba(255,255,0,0.5) 0%, rgba(0,0,0,0.1) 20%, rgba(0,0,0,0.1) 80% , rgba(0,0,0,0.1) 0%);
   }
   div.hidden {
     display: none;
   }
   span.resoname {
      font-weight: bold;
      padding-left: 10px;
      padding-right: 10px;
      border-right: 1px solid red;
      margin-right: 10px;
   }
   label {
     margin-left: 5px;
   }
   label.have_label, input.have_amt {
     color: black;
     font-style: italic;
     padding: 1px 5px;
     margin: 3px 5px;
     border: 1px cornflowerblue solid;
   }
   label.have_label {
     background-color: rgb( 200, 200, 200 );
     border-right: none;
     margin-right: 0;
   }
   input.have_amt {
     border-left: none;
     margin-left: 0;
     padding: 2px;
   }

   input.invalid {
     border: 1px solid #f00;
   }
  option.rlevel1, option.rlevel2, option.rlevel3, option.rlevel4,
  option.rlevel5, option.rlevel6, option.rlevel7, option.rlevel8 {
    background-color: #fff;
    font-weight: bold;
  }
  span.resoname,  strong.rlevel1, strong.rlevel2, strong.rlevel3,
  strong.rlevel4, strong.rlevel5, strong.rlevel6, strong.rlevel7, strong.rlevel8 {  color: #fff }

  option.rlevel1 {   color: #444a50;   }
  .rlevel1 > span.resoname, strong.rlevel1 {   background-color: #444a50 }

  option.rlevel2 { color: #7c6758 }
  .rlevel2 > span.resoname, strong.rlevel2 {   background-color: #7c6758;  }

  option.rlevel3 { color: #4c623c }
  .rlevel3 > span.resoname, strong.rlevel3 {  background-color: #4c623c;  }

  option.rlevel4 { color: #4c6f84;  }
  .rlevel4 > span.resoname, strong.rlevel4 { background-color: #4c6f84;  }

  option.rlevel5 { color: #833a34;  }
  .rlevel5 > span.resoname, strong.rlevel5 { background-color: #833a34;  }

  option.rlevel6 { color: #d47e3b;  }
  .rlevel6 > span.resoname, strong.rlevel6 { background-color: #d47e3b;  }

  option.rlevel7 { color: #d3b654; }
  .rlevel7 > span.resoname, strong.rlevel7 { background-color: #d3b654;  }


  option.rlevel8 {
    background-color: #000;
    color: #e9e9e9;
  }

  div.rlevel8 > span.resoname, strong.rlevel8 {
    color: #000;
    background-color: #e9e9e9;
  }

  div#halp {
    max-width: 500px;
    margin: 0px auto;
  }
  #halp p {
    font-size: 14px;
  }
  li.resource_group {
    background-color: rgba( 0, 0, 0, 0.1 );
    padding: 2px;
    display: inline-block;
    margin-right: 5px;
    margin-bottom: 3px;
  }

  </style>
 <script>
<!include_script "js/ArrayUtils.js">
<!include_script "js/AlbionItemAttributes.js">
<!include_script "js/AlbionItem.js">
<!include_script "js/AlbionData.js">

<!include_script "jsd/misc.js">
<!include_script "jsd/base_materials.js">
<!include_script "jsd/animals.js">
<!include_script "jsd/crops.js">
<!include_script "jsd/craft-buildings/lumbermill.js">
<!include_script "jsd/crafted_materials.js">
<!include_script "jsd/weapon_fragments.js">
<!include_script "jsd/buildings/toolmaker.js">
<!include_script "jsd/buildings/warriors-forge.js">
<!include_script "jsd/buildings/hunters-lodge.js">
<!include_script "jsd/buildings/alchemists-lab.js">
<!include_script "jsd/buildings/cook.js">
<!include_script "jsd/buildings/mage-tower.js">
<!include_script "jsd/buildings/saddler.js">
<!include_script "jsd/buildings.js">
 </script>
 </head>
 <body>
  <div id="in">
     <label>Item Search:</label><input id="itemfilter" type="text" value="" />
     <label>Item:</label><select id="dd"></select>
     <label>Amount:</label><input id="amt" type="text" value="" />
     <label>Assume Having Everything:</label><input id="workbackwards" type="checkbox" value="" />
  </div>
  <div id="outtotals">
  </div>
  <div id="out">

  </div>
  <div id="halp">
    <h4>Help:</h4>
    <h5>Working Out Resource Counts:</h5>
    <ol>
      <li>Pick an item from the drop down box you need</li>
      <li>Enter how many you need of it in "Amount"</li>
      <li>Breakdown of resources needed is displayed</li>
    </ol>
    <p>Each item displayed contains its nested components, and how many of those components are required
       to craft the indicated number of parent components</p>
    <p>Entering how much you have of a given component in the provided box updates the calculations
       all the way down, and shows you how much you have <em>left</em> to acquire</p>

    <p>So for example, if you picked <strong class="rlevel4">Travertine Block</strong> and indicated you needed <strong>100</strong>,
    the result would indicate you needed <strong class="rlevel4">200 Travertine</strong> and <strong class="rlevel3">100 Sandstone Block</strong>
    to craft <strong class="rlevel4">100 Travertine Block</strong>s</p>

    <p>If you didn't have <strong class="rlevel4">200 Travertine</strong> you could transmute it from <strong class="rlevel3">1200 Sandstone</strong>,
       which could in turn be transmuted from <strong class="rlevel2">3600 Limestone</strong></p>

    <p>If you didn't have <strong class="rlevel3">100 Standsone Block</strong>, you could craft it from <strong class="rlevel3">200 Sandstone</strong>
        and <strong class="rlevel2">100 Limestone Block</strong>( Transmutations are indicated by the yellow glow )</p>

    <p>With some rough mental addition, you could also realise that to build <strong class="rlevel4">100 Travertine Block</strong> exclusively
        from <strong class="rlevel2">Limestone</strong> you'd have to farm <code>3600 + 600 + 100 = </code><strong class="rlevel2">4300 Limestone</strong></p>

    <h5>Finding Items in the Drop Down</h5>
    <p>You can reduce the number of items to hunt through in the drop down if you know what you're looking for.</p>
    <ul>
      <li>A search term that can be found in your items name will show all items containing that term (eg: <em>stone</em>)</li>
      <li>Setting your search term to <code>T3</code> ( or any other Tier, <code>T1</code> to <code>T8</code> ) will
        filter the drop down list to show only items of that Tier</li>
      <li>Combining search terms like <code>T3 Cloth</code> will find all <strong class="rlevel3">Tier 3</strong> items that contain that term, (eg: <strong class="rlevel3">Neat Cloth</strong>)
      <li>Some search terms are special cased, and will match even though they're not in the name. For instance, <code>fibre</code>, <code>stone</code>, <code>food</code> and <code>crop</code> will trim the list down to show those things</li>
    </ul>

    <h5>Keeping the Clutter Down</h5>
    <p>Its worth mentioning that as soon as any resource hits <em>"0 needed"</em>, this tool will automatically hide the child resources.
    This means that if you're trying to spec a building at <strong class="rlevel8">level 8</strong> in advance, it will show a lot of data, which is probably what you want that far ahead.

    However, if you're specing a level 8 when you already have a <strong class="rlevel7">level 7</strong>, it will be easier to read once you state you already have the <strong class="rlevel7">level 7</strong> building.
    </p>
    <p>Alternatively, you can click the <strong>Assume Have Everything</strong> box before entering your initial figure, and it will pre-fill every layer with sufficient
      resources to craft the item above it, and you just have to progressively fix the <em>Have</em> fields that are wrong.</p>

    <h3>Stuff is wrong and broken bruv!</h3>
    <p>Like all software, there will be bugs, and the data might be missing/out of date. Everything you notice as being "out-of-place" is valuable information
       because it will help others with the same problems.</p>
    <p>So, please either tell me personally if something is missing that you were looking for, what you tried to do to find it, etc, or <a href="https://github.com/kentfredric/albion-calc/issues">file a bug on github</a></p>
    <p>If you're a smart cookie, you'll notice the data itself is <a href="https://github.com/kentfredric/albion-calc/blob/master/jsd"> reasonably well laid out</a> and you might know what it takes to fix it with a <a href="https://github.com/kentfredric/albion-calc/pulls">Pull Request</a></p>
  </div>
  <div><sub>Version: $Id: 34a17fe7b55ec18495c37c2fa7c17bb994d51960 $</sub><br />
       <sub>PS: If github are reading this, sorry, my contact request was wrong, I forgot git ID's
            are <em>document</em> SHA1s not repo commits. I'd have notified you earlier, but your
            contact system doesn't offer a way to follow up on requests before you reply. So I made
            this note instead</sub>
  </div>
  <script>
//<![CDATA[
<!include_script "jsm/ui.js">
// ]]>
  </script>
 </body>
</html>
