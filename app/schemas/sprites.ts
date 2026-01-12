export const SpritesSchema = {
  type: 'sprites',
  identity: null, // no @id, embedded
  fields: [
    { name: 'back_default', kind: 'field' },
    { name: 'back_shiny', kind: 'field' },
    { name: 'front_default', kind: 'field' },
    { name: 'front_shiny', kind: 'field' },
  ],
};
