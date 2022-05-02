<template>
  <div class="flex flex-col items-center h-full w-full">
    <TSearcher class="mt-7 mb-10 max-w-xl" />
    <TableList :pokemons="pokemonsComputed" class="max-w-xl" />
    <FixedButtons>
      <TButton
        class="w-72 h-11 flex justify-center items-center gap-2"
        :class="filter == 'All' ? 'bg-red-1' : 'bg-gray-not-favorite'"
        @click="filter = 'All'"
      >
        <font-awesome-icon
          :icon="['fas', 'list-ul']"
          class="text-white"
        ></font-awesome-icon>
        All</TButton
      >
      <TButton
        class="w-72 h-11 flex justify-center items-center gap-2"
        :class="filter == 'Favorites' ? 'bg-red-1' : 'bg-gray-not-favorite'"
        @click="filter = 'Favorites'"
      >
        <font-awesome-icon
          :icon="['fas', 'star']"
          class="text-white"
        ></font-awesome-icon>
        Favorites
      </TButton>
    </FixedButtons>
  </div>
</template>

<script>
import TButton from "@/components/lib/TButton";
import TSearcher from "@/components/lib/TSearcher";
import TableList from "@/components/TableList/index";
import FixedButtons from "@/components/FixedButtons";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      filter: "All",
    };
  },
  components: {
    TButton,
    TSearcher,
    TableList,
    FixedButtons,
  },
  computed: {
    ...mapState("pokemon", ["pokemons"]),
    pokemonsComputed() {
      if (this.filter == "Favorites")
        return this.pokemons.filter((x) => x.isFavorite);
      return this.pokemons;
    },
  },
  methods: {
    ...mapActions("pokemon", ["getPokemons"]),
  },
  created() {
    this.getPokemons();
  },
};
</script>
