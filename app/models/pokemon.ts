export interface Pokemon {
  id: string;
  name: string;
  weight: number;
  xp: number;
  sprites: {
    back_default: string;
    // back_female: string | null;
    back_shiny: string;
    // back_shiny_female: string | null;
    front_default: string;
    // front_female: string | null;
    // front_shiny_female: string | null;
    front_shiny: string;
  };
}
