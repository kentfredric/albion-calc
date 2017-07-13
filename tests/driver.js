(function() {
  var output;

  
  window.note = function(msg) {
    let node = document.createElement("li");
    node.textContent = msg;
    node.className   = "note";
    output.appendChild(node);
    return node;
  };
  window.pass = function(msg) {
    let node = document.createElement("li");
    node.textContent = msg;
    node.className = "pass";
    output.appendChild(node);
    return node;
  };
  window.fail = function(msg) {
    let node = document.createElement("li");
    node.textContent = msg;
    node.className = "fail";
    output.failed = true;
    output.appendChild(node);
    return node;
  };
  window.ok = function( state, msg ) {
    if ( state ) {
      return window.pass(msg);
    }
    window.fail(msg);
  };
  window.is = function( got, ex, msg ) {
    if ( got == ex ) {
      return window.pass(msg);
    }
    let diag = document.createElement("ul");
    diag.className = "diag";
    let got_content = document.createElement("li");
    got_content.textContent = "got:" + got;
    got_content.className = "got";
    diag.appendChild(got_content);
    let exp_content = document.createElement("li");
    exp_content.textContent = "expected:" + ex;
    exp_content.className = "expected";
    diag.appendChild(exp_content);
    let fail = window.fail(msg);
    fail.appendChild( diag );
    return fail;
  };
  window.like = function( got, reg, msg ) {
    if ( ( " " + got ).match(reg) ) {
      return window.pass(msg);
    }
    let diag = document.createElement("ul");
    diag.className = "diag";
    let got_content = document.createElement("li");
    got_content.textContent = "got:" + got;
    got_content.className = "got";
    diag.appendChild(got_content);
    let exp_content = document.createElement("li");
    exp_content.textContent = "expected matching:" + reg;
    exp_content.className = "expected";
    diag.appendChild(exp_content);
    let fail = window.fail(msg);
    fail.appendChild( diag );
    return fail;

  };
  window.subtest = function( reason, callback ) {
    /* set up dom */
    var subtest_node = document.createElement("li");
    subtest_node.className = "subtest";
    subtest_node.textContent = reason;
    var new_output = document.createElement("ol");
    subtest_node.appendChild( new_output );
    /* Inject target now so failed tests will show progress */
    output.appendChild(subtest_node);
    /* Swap vars that tests call */
    var old_output = output;
    output = new_output;
    callback();
    if ( output.hasOwnProperty('failed') ) {
      old_output.failed = true;
      subtest_node.classList.add('fail');
      new_output.classList.add('fail');
    } else {
      subtest_node.classList.add('pass');
      new_output.classList.add('pass');

    }
    output = old_output;
    return subtest_node;
  };
  window.done_testing = function() {
    if ( output.hasOwnProperty('failed') ) {
      output.classList.add("fail");
    } else {
      output.classList.add("pass");
    }
  };
  let test_suites = [];
  let loaded = false;
  window.onload = function() {
    loaded = true;
    output = document.getElementById("output");
    let test_seq = 1;
    output.get_test_id = function() {
      let my_seq = test_seq;
      test_seq++;
      return my_seq;
    };
    for ( let test of test_suites ) {
      test();
    }
  };
  window.add_suite = function( callback ) {
    if ( loaded ) {
      callback();
    } else {
      test_suites.push(callback);
    }
  };
})();
