import type { Handler } from '@warp-drive/core/request';
import type { RequestContext } from '@warp-drive/core/types/request';
import { dasherize, singularize } from '@warp-drive/utilities/string';
import type { Pokemon } from 'graphql-pokedex/models/pokemon';

export const TransformResponse: Handler = {
  async request(context, next) {
    console.log('request made');
    console.log(context);

    return next(context.request).then(({ content }) => {
      console.log(context);

      return normalizeResponse(content);
    });
  },
};

function normalizeResponse(content) {
  const result = {
    data: [],
    included: [],
  };

  debugger;

  for (const key of Object.keys(content)) {
    const value = content[key];
    const isPrimary = !key.startsWith('_');
    const type = dasherize(singularize(key.replace(/^_/, '')));

    for (const rawResource of value) {
      const resource = normalizeResource(type, rawResource);

      if (isPrimary) {
        result.data.push(resource);
      } else {
        result.included.push(resource);
      }
    }
  }

  debugger;

  return result;
}

function normalizeResource(type, rawResource) {
  const resource = {
    type,
    id: String(rawResource.id),
    attributes: {
      ...rawResource,
    },
  };

  // remove id from remaining attributes
  delete resource.attributes.id;

  return resource;
}
