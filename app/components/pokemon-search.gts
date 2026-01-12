import Component from '@glimmer/component';
import type { TOC } from '@ember/component/template-only';
import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import { service } from '@ember/service';
import type RouterService from '@ember/routing/router-service';

type OnSearch = (pokemonName: string) => void;

export interface PokemonSearchSignature {
  // The arguments accepted by the component
  Args: {
    onSearch: OnSearch;
  };
  // Any blocks yielded by the component
  Blocks: {
    default: [];
  };
  // The element to which `...attributes` is applied in the component template
  Element: null;
}

export default class PokemonSearch extends Component<PokemonSearchSignature> {
  @service declare router: RouterService;

  handleSubmit = (event: Event) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const search = formData.get('name') as string;
    this.router.transitionTo(`/${search}`);
  };

  <template>
    <form {{on "submit" this.handleSubmit}}>
      <input id="name" name="name" type="string" />
    </form>
  </template>
}
