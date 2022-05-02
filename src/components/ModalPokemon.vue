<template>
  <div class="modal-overlay">
    <div class="modal">
      <img
        alt="Vue logo"
        :src="require('../assets/images/background-pokemon.svg')"
      />
      <img
        :src="imgPokemon"
        width="180"
        style="position: absolute; top: 20px; right: 0; left: 190px"
      />
      <div class="flex flex-col items-start py-5 px-7 w-full">
        <div class="characteristic">
          <span>Name:</span>
          <span class="capitalize">{{ pokemon.name }}</span>
        </div>
        <div class="characteristic">
          <span>Weight:</span>
          <span>{{ pokemon.weight }}</span>
        </div>
        <div class="characteristic">
          <span>Height:</span>
          <span>{{ pokemon.height }}</span>
        </div>
        <div class="characteristic">
          <span>Types:</span>
          <span class="capitalize">{{ pokemonTypes }}</span>
        </div>
        <div class="flex flex-row justify-between mt-5 w-full">
          <TButton class="w-52 h-11 flex justify-center items-center bg-red-1">
            Share to my friends
          </TButton>
          <div
            class="rounded-full bg-app w-11 h-11 flex justify-center items-center text-2xl"
          >
            <font-awesome-icon
              :icon="['fas', 'star']"
              :class="
                pokemon.isFavorite
                  ? 'text-yellow-favorite'
                  : 'text-gray-not-favorite'
              "
            ></font-awesome-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TButton from "@/components/lib/TButton";
export default {
  props: {
    pokemon: {
      type: Object,
    },
  },
  components: {
    TButton,
  },
  computed: {
    pokemonTypes() {
      return this.pokemon.types
        .map((v) => {
          return v.type.name;
        })
        .join(", ");
    },
    imgPokemon() {
      return this.pokemon.sprites.other["official-artwork"].front_default;
    },
  },
};
</script>

<style scoped>
.characteristic {
  padding: 10px 0px;
  border-bottom: 1px solid #e8e8e8;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
  z-index: 3000;
}

.modal {
  text-align: center;
  background-color: white;
  height: 506px;
  max-width: 570px;
  width: 100%;
  margin-top: 7%;
  padding: 0;
  border-radius: 5px;
  position: relative;
}
.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

.check {
  width: 150px;
}
</style>
