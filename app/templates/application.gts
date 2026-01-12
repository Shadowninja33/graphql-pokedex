import { pageTitle } from 'ember-page-title';
import { Request } from '@warp-drive/ember';
import { findRecord } from '@warp-drive/utilities/rest';
import { on } from '@ember/modifier';
import { getPokemon } from 'graphql-pokedex/builders/getPokemon';
import { hash } from '@ember/helper';
import { tracked } from '@glimmer/tracking';
import PokemonSearch from 'graphql-pokedex/components/pokemon-search.gts';
<template>
  {{pageTitle "GraphqlPokedex"}}

  <PokemonSearch />

  {{!-- {{this.search}} --}}
  {{!-- <Request @query={{this.query}}>
    <:content as |result|>
      {{result.data.name}}
    </:content>

    <:loading>Loading...</:loading>

    <:error as |error state|>
      <div>
        <p>Error: {{error.message}}</p>
        <p><button type="button" {{on "click" state.retry}}>Try Again?</button></p>
      </div>
    </:error>
  </Request> --}}
  {{outlet}}
</template>
