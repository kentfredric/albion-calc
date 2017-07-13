window.add_suite(function(){
  subtest("AlbionItemAttributes", function() {

    let aia = AlbionItemAttributes;

    var return_exception = function (callback, okval) {
      return function() {
        let args = arguments;
        try {
          callback.apply(this, args);
          return okval ;
        } catch ( e ) {
          return e;
        }
      };
    };

    subtest("coerce_attribute_name", function() {
      is( aia.coerce_attribute_name("t"), "tier", "basic coercion from t" );
      is( aia.coerce_attribute_name("teir"), "tier", "basic coercion from teir" );
      is( aia.coerce_attribute_name("tier"), "tier", "basic coercion from tier" );
      is( aia.coerce_attribute_name("TiEr"), "tier", "basic case folding from tier" );
      is( aia.coerce_attribute_name("transmute-from"), "transmute_from", "basic hyphen folding in transmute_from" );
      is( aia.coerce_attribute_name("InVaLiD"), "InVaLiD", "unknown -> passthrough" );
    });

    var van_ex = return_exception(aia.validate_attribute_name, true);

    subtest("validate_attribute_name", function(){
      ok( aia.validate_attribute_name("tier"), "tier is valid" );
      ok( aia.validate_attribute_name("transmute_from"), "transmute_from is valid" );
      like( van_ex("InVaLiD"), /Invalid attribute name/, "InVaLiD is invalid" );
      like( van_ex("TiEr"), /Invalid attribute name/, "TiEr is invalid");
    });

    subtest("coerce_value", function() {
      is( aia.coerce_value("bogus", "value"), "value", "unknown values passthrough");
    });

    var vv_ex = return_exception(aia.validate_value, true);
    subtest("validate_value", function() {
      is(vv_ex("tier", 1 ), true, "tier 1 is legit");
      is(vv_ex("tier", 4 ), true, "tier 4 is legit");
      is(vv_ex("tier", 8 ), true, "tier 8 is legit");
      like(vv_ex("tier", 9 ), /Invalid tier/, "tier 9 is not legit");
      like(vv_ex("tier", 0 ), /Invalid tier/, "tier 0 is not legit");

      is(vv_ex("transmute_from", 0 ), true, "transmute_from chill a.f");

      like(vv_ex("InVaLiD", 9 ), /Invalid attribute name/, "InVaLiD not valid");
      like(vv_ex("TiEr", 0 ), /Invalid attribute name/, "TiEr not valid");

    });
  });
});
