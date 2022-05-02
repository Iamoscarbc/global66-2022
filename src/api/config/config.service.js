import axios from "axios";

const pokemonService = axios.create({
  baseURL: process.env.VUE_APP_POKEMON_API_BASE_URL,
});

export { pokemonService };
