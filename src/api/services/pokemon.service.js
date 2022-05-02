import { pokemonService } from "@/api/config/config.service";

export default {
  getPokemons: async () => {
    try {
      let { data } = await pokemonService.get("/pokemon");
      return Promise.resolve(data);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  getPokemonByName: async (name) => {
    try {
      let { data } = await pokemonService.get(`/pokemon/${name}`);
      return Promise.resolve(data);
    } catch (error) {
      return Promise.reject(error);
    }
  },
};
