<template>
  <div
    class="bg-white rounded-md py-2 px-3 w-full flex justify-between items-center"
  >
    <span class="capitalize text-black-1 text-xl font-medium">{{
      pokemon.name
    }}</span>
    <div
      class="rounded-full bg-app w-11 h-11 flex justify-center items-center text-2xl"
    >
      <font-awesome-icon
        :icon="['fas', 'star']"
        :class="
          pokemon.isFavorite ? 'text-yellow-favorite' : 'text-gray-not-favorite'
        "
      ></font-awesome-icon>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pokemon: {
      type: Object,
      default: () => ({
        name: "",
        isFavorite: false,
      }),
    },
  },
};
</script>
