<template>
  <div id="app" class="bg-app h-screen flex justify-center w-full">
    <router-view />
    <ModalLoading v-if="loadingPokemons" />
  </div>
</template>

<script>
import ModalLoading from "@/components/ModalLoading";
import { mapState } from "vuex";
export default {
  components: {
    ModalLoading,
  },
  computed: {
    ...mapState("pokemon", ["loadingPokemons"]),
  },
};
</script>
