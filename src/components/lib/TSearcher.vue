<template>
  <div class="bg-white rounded-md p-4 w-full flex items-center">
    <font-awesome-icon
      :icon="['fas', 'magnifying-glass']"
      class="text-gray-300 mr-3"
    ></font-awesome-icon>
    <input
      v-model="searchComputed"
      type="text"
      class="w-full text-gray-300 placeholder:text-gray-300 outline-transparent"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: "Search",
    },
    search: {
      type: String,
      default: "",
    },
  },
  computed: {
    searchComputed: {
      get() {
        return this.search;
      },
      set(value) {
        this.$emit("change", value);
      },
    },
  },
};
</script>
