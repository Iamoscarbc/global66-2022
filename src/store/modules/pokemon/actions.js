import PokemonService from "@/api/services/pokemon.service";
import { SET_POKEMONS } from "@/constants/enums.mutations";

export const actions = {
  async getPokemons({ commit }) {
    const { results } = await PokemonService.getPokemons();
    commit(
      SET_POKEMONS,
      results.map((e) => {
        e.isFavorite = false;
        return e;
      })
    );
  },
};
