<template>
  <div class="w-full flex flex-col gap-3 overflow-y-auto h-full mb-24">
    <ListItem
      v-for="(pokemon, index) in pokemons"
      :key="index"
      :pokemon="pokemon"
      @openModal="openModal($event)"
    />
    <ModalPokemon
      :pokemon="pokemonSelected"
      v-if="showModal"
      @closeModal="closeModal"
    />
  </div>
</template>

<script>
import ListItem from "./ListItem.vue";
import ModalPokemon from "@/components/ModalPokemon.vue";
import PokemonService from "@/api/services/pokemon.service";
export default {
  components: {
    ListItem,
    ModalPokemon,
  },
  props: {
    pokemons: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      pokemonSelected: null,
      showModal: false,
    };
  },
  methods: {
    async openModal(pokemon) {
      let r = await PokemonService.getPokemonByName(pokemon.name);
      r.isFavorite = pokemon.isFavorite;
      this.pokemonSelected = r;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>
