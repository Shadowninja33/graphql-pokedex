import { module, test } from 'qunit';
import { setupTest } from 'graphql-pokedex/tests/helpers';

module('Unit | Route | pokemon', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:pokemon');
    assert.ok(route);
  });
});
