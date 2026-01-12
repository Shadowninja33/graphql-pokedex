import Route from '@ember/routing/route';
import { getPokemon } from 'graphql-pokedex/builders/getPokemon';

interface Params {
  [key: string]: unknown;
  pokemon_name: string;
}
export default class PokemonRoute extends Route {
  model(params: Params) {
    console.log(params.pokemon_name);
    return getPokemon(params.pokemon_name);
  }
}
