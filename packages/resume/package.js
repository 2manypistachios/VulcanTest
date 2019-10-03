Package.describe({
  name: 'resume',
});

Package.onUse(function (api) {

  api.use([
    'promise',

    // SASS/SCSS support
    'fourseven:scss@4.5.0',

    // vulcan core
    'vulcan:core@1.13.1',

    // vulcan packages
    'vulcan:voting@1.13.1',
    'vulcan:forms@1.13.1',
    'vulcan:accounts@1.13.1',
    'vulcan:ui-bootstrap@1.13.1',
    
  ]);

  api.addFiles('lib/stylesheets/css/bulma.css');
  api.mainModule('lib/server/main.js', 'server');
  api.mainModule('lib/client/main.js', 'client');

});
