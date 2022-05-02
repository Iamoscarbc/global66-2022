<template>
  <div class="flex flex-col justify-center items-center h-full w-full max-w-xl">
    <img
      class="mb-14"
      alt="Vue logo"
      :src="require('../assets/images/pikachu.svg')"
    />
    <h2 class="text-2xl font-bold mb-8 text-black-1">Welcome to Pokédex</h2>
    <p class="mb-12 text-black-2 text-center text-lg">
      The digital encyclopedia created by Professor Oak is an invaluable tool to
      Trainers in the Pokémon world.
    </p>
    <TButton class="bg-red-1" @click="toPokemons()"> Get Started </TButton>
  </div>
</template>

<script>
import TButton from "@/components/lib/TButton.vue";
export default {
  name: "HomeView",
  components: {
    TButton,
  },
  methods: {
    toPokemons() {
      this.$router.push("/pokemons");
    },
  },
};
</script>
