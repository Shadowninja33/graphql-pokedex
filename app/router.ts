import EmberRouter from '@embroider/router';
import config from 'graphql-pokedex/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('pokemon', { path: '/:pokemon_name' });
});
