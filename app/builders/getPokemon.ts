import type { ReactiveDataDocument } from '@warp-drive/core/reactive';
import { withResponseType } from '@warp-drive/core/request';
import type { Pokemon } from 'graphql-pokedex/models/pokemon';

export function getPokemon(name: string) {
  const url = `/api/pokemon/${name}`;
  const cacheKey = `${url}`;
  const headers = new Headers();

  return withResponseType<ReactiveDataDocument<Pokemon>>({
    url,
    method: 'GET',
    // cacheOptions: {
    //   key: cacheKey,
    //   // invalidate this query if new companies are created
    //   types: ['pokemon'],
    // },
    headers,
  });
}
