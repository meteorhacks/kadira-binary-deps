Tinytest.add(
  'usage module',
  function function_name (test) {
    var usage = KadiraBinaryDeps.usage;
    test.equal(typeof usage.lookup, 'function');
  }
);