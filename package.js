Package.describe({
  "summary": "Binary Dependencies for Kadira",
  "version": "1.3.1",
  "git": "https://github.com/meteorhacks/kadira-binary-deps.git",
  "name": "meteorhacks:kadira-binary-deps"
});

Npm.depends({
  "usage": "0.5.0",
  "v8-profiler": "5.2.0"
});

Package.onUse(function(api) {
  configure(api);
  api.export(['KadiraBinaryDeps']);
});

Package.onTest(function(api) {
  configure(api);
  api.versionsFrom('METEOR@0.9.0');
  api.use('tinytest');
  api.add_files('test.js', 'server');
});

function configure(api) {
  api.add_files('index.js', 'server');
}
