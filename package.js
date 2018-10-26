Package.describe({
  "summary": "Binary Dependencies for Kadira",
  "version": "1.6.0",
  "name": "pnyx:kadira-binary-deps"
});

Npm.depends({
  "v8-profiler": "5.7.0"
});

Package.onUse(function(api) {
  configure(api);
  api.export(['KadiraBinaryDeps']);
});

Package.onTest(function(api) {
  configure(api);
  api.versionsFrom('METEOR@1.4-beta.9');
  api.use('tinytest');
  api.add_files('test.js', 'server');
});

function configure(api) {
  api.add_files('index.js', 'server');
}
