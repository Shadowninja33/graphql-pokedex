import { module, test } from 'qunit';
import { setupRenderingTest } from 'graphql-pokedex/tests/helpers';
import { render } from '@ember/test-helpers';
import PokemonSearch from 'graphql-pokedex/components/pokemon-search';

module('Integration | Component | pokemon-search', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Updating values is achieved using autotracking, just like in app code. For example:
    // class State { @tracked myProperty = 0; }; const state = new State();
    // and update using state.myProperty = 1; await rerender();
    // Handle any actions with function myAction(val) { ... };

    await render(<template><PokemonSearch /></template>);

    assert.dom().hasText('');

    // Template block usage:
    await render(<template>
      <PokemonSearch>
        template block text
      </PokemonSearch>
    </template>);

    assert.dom().hasText('template block text');
  });
});
