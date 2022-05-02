export const mutations = {
  SET_POKEMONS(state, payload) {
    state.pokemons = payload;
  },
  SET_LOADING_POKEMONS(state, payload) {
    state.loadingPokemons = payload;
  },
};
