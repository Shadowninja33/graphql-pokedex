import type { TOC } from '@ember/component/template-only';
import { on } from '@ember/modifier';
import { pageTitle } from 'ember-page-title';
import { Request } from '@warp-drive/ember';

interface PokemonSignature {
  Args: {
    model: unknown;
    controller: unknown;
  };
}

<template>
  {{pageTitle "Pokemon"}}
  <Request @query={{@model}}>
    <:content as |result|>
      {{result.data.name}}
      {{result.data.xp}}
      {{log result.data}}

      <img src={{result.data.sprites.front_default}} alt="front sprite" />
    </:content>

    <:loading>Loading...</:loading>

    <:error as |error state|>
      <div>
        <p>Error: {{error.message}}</p>
        <p><button type="button" {{on "click" state.retry}}>Try Again?</button></p>
      </div>
    </:error>
  </Request>
  {{outlet}}
</template> satisfies TOC<PokemonSignature>;
