import type { ReactiveDataDocument } from '@warp-drive/core/reactive';
import { withResponseType } from '@warp-drive/core/request';
import type { Pokemon } from 'graphql-pokedex/models/pokemon';

export function getPokemon(name: string) {
  const url = `/api/v2/pokemon/${name}`;
  const body = '';
  const cacheKey = `${url}::${body}`;
  const headers = new Headers();

  return withResponseType<ReactiveDataDocument<Pokemon>>({
    url,
    method: 'GET',
    cacheOptions: {
      key: cacheKey,
      // invalidate this query if new companies are created
      types: ['pokemon'],
    },
    headers,
  });
}
