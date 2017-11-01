Package.describe({
  "summary": "Binary Dependencies for Kadira",
  "version": "1.6.0",
  "git": "https://github.com/meteorhacks/kadira-binary-deps.git",
  "name": "meteorhacks:kadira-binary-deps"
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
  api.versionsFrom('1.6');
  api.use('tinytest');
  api.add_files('test.js', 'server');
});

function configure(api) {
  api.add_files('index.js', 'server');
}
