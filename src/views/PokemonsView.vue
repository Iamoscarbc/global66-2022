<template>
  <div class="flex flex-col items-center h-full w-full">
    <TSearcher
      class="mt-7 mb-10 max-w-xl"
      :search="search"
      @change="changeSearch($event)"
    />
    <TableList
      :pokemons="pokemonsComputed"
      class="max-w-xl"
      v-if="pokemonsComputed.length != 0"
    />
    <div v-else class="flex flex-col items-center">
      <h2 class="text-4xl font-bold mb-2 mt-2">Uh-oh!</h2>
      <p class="text-xl font-medium mb-6">You look lost on your journey!</p>
      <TButton
        class="w-40 h-11 flex justify-center items-center gap-2 bg-red-1"
        @click="goBack()"
      >
        Go back home
      </TButton>
    </div>
    <FixedButtons v-if="pokemonsComputed.length != 0">
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
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      filter: "All",
      search: "",
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
      let r = this.pokemons;
      if (this.filter == "Favorites")
        r = this.pokemons.filter((x) => x.isFavorite);
      return r.filter(
        (x) => x.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      );
    },
  },
  methods: {
    ...mapActions("pokemon", ["getPokemons"]),
    ...mapMutations("pokemon", ["SET_LOADING_POKEMONS"]),
    changeSearch(event) {
      this.search = event;
    },
    goBack() {
      this.$router.push("/");
    },
  },
  async created() {
    this.SET_LOADING_POKEMONS(true);
    await this.getPokemons();
    this.SET_LOADING_POKEMONS(false);
  },
};
</script>
