Tinytest.add(
  'usage module',
  function function_name (test) {
    var usage = KadiraBinaryDeps.require('usage');
    test.equal(typeof usage.lookup, 'function');
  }
);