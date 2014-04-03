require.config({
  "paths": {
    "jquery": "/bower_components/jquery/dist/jquery",
    "app": "/src/js/app",
    "autocomplete": "/src/js/my-autocomplete"
  },
  shim: {
    'jquery': {
      exports: '$'
    }
  }
});

require([ "jquery", "autocomplete"]);
