import { useRecommendedStore } from '@warp-drive/core';
import { JSONAPICache } from '@warp-drive/json-api';
import { TransformResponse } from 'graphql-pokedex/handlers/TransformResponse';

const StoreService = useRecommendedStore({
  cache: JSONAPICache,
  handlers: [TransformResponse],
  schemas: [
    // -- your schemas here
    // {
    //   type: 'pokemon',
    //   identity: { kind: '@id', name: 'id' },
    //   fields: [
    //     { kind: 'field', name: 'name', sourceKey: 'name' },
    //     { kind: 'field', name: 'weight', sourceKey: 'weight' },
    //     { kind: 'field', name: 'xp', sourceKey: 'base_experience' },
    //     // {
    //     //   kind: 'field',
    //     //   name: 'lastSeen',
    //     //   sourceKey: 'last-seen',
    //     //   type: 'date-time',
    //     // },
    //     // {
    //     //   kind: 'resource',
    //     //   name: 'bestFriend',
    //     //   sourceKey: 'best-friend',
    //     //   options: { async: false, inverse: null },
    //     // },
    //     // {
    //     //   kind: 'collection',
    //     //   name: 'pets',
    //     //   options: { async: false, inverse: null, polymorphic: true },
    //     // },
    //   ],
    // },
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
