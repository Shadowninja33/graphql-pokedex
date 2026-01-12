import { withDefaults } from '@warp-drive/core/reactive';
import { SpritesSchema } from './sprites';
export const PokemonSchema = withDefaults({
  type: 'pokemon',
  identity: { kind: '@id', name: 'id' },
  fields: [
    { kind: 'field', name: 'name', sourceKey: 'name' },
    { kind: 'field', name: 'weight', sourceKey: 'weight' },
    { kind: 'field', name: 'xp', sourceKey: 'base_experience' },
    {
      name: 'sprites',
      kind: 'schema-object',
      type: 'sprites',
    },
  ],
});
