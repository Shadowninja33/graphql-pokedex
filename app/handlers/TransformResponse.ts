import type { Handler } from '@warp-drive/core/request';
import type { RequestContext } from '@warp-drive/core/types/request';
import { dasherize, singularize } from '@warp-drive/utilities/string';

export const TransformResponse: Handler = {
  request(context, next) {
    console.log('request made');
    console.log(context);

    return next(context.request).then(({ content }) => {
      console.log(context);

      return normalizeResponse(content);
    });
  },
};

function normalizeResponse(content: RequestContext) {
  const result = {
    data: [],
    included: [],
  };

  for (const key of Object.keys(content)) {
    const value = content[key];
    const type = dasherize(singularize(key.replace(/^_/, '')));

    for (const rawResource of value) {
      const resource = normalizeResource(type, rawResource);
      result.data.push(resource);
    }
  }

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
