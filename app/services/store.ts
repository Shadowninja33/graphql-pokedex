import { useRecommendedStore } from '@warp-drive/core';
import { JSONAPICache } from '@warp-drive/json-api';
import { TransformResponse } from 'graphql-pokedex/handlers/TransformResponse';
import { PokemonSchema } from 'graphql-pokedex/schemas/pokemon';
import { SpritesSchema } from 'graphql-pokedex/schemas/sprites';

const StoreService = useRecommendedStore({
  cache: JSONAPICache,
  handlers: [TransformResponse],
  schemas: [
    // -- your schemas here
    SpritesSchema,
    PokemonSchema,
  ],
});

// id: string;
// name: string;
// weight: number;
// base_experience: number;

export default StoreService;

// Don't remove this declaration: this is what enables TypeScript to resolve
// this service using `Owner.lookup('service:store')`, as well
// as to check when you pass the service name as an argument to the decorator,
// like `@service('store') declare altName: StoreService;`.
declare module '@ember/service' {
  interface Registry {
    store: typeof StoreService;
  }
}
