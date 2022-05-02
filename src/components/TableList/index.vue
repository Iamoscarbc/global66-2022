<template>
  <div class="w-full flex flex-col gap-3 overflow-y-auto h-full mb-24">
    <ListItem
      v-for="(pokemon, index) in pokemons"
      :key="index"
      :pokemon="pokemon"
    />
  </div>
</template>

<script>
import ListItem from "./ListItem.vue";
export default {
  props: {
    pokemons: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    ListItem,
  },
};
</script>
