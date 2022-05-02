<template>
  <div class="flex flex-col items-center h-full w-full">
    <TSearcher class="mt-7 mb-10 max-w-xl" />
    <TableList :pokemons="pokemons" class="max-w-xl" />
    <FixedButtons> </FixedButtons>
  </div>
</template>

<script>
import TSearcher from "@/components/lib/TSearcher";
import TableList from "@/components/TableList/index";
import FixedButtons from "@/components/FixedButtons";
import { mapActions, mapState } from "vuex";
export default {
  components: {
    TSearcher,
    TableList,
    FixedButtons,
  },
  computed: {
    ...mapState("pokemon", ["pokemons"]),
  },
  methods: {
    ...mapActions("pokemon", ["getPokemons"]),
  },
  created() {
    this.getPokemons();
  },
};
</script>
