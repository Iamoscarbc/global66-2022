<template>
  <button
    type="button"
    class="text-white px-5 py-3 rounded-full text-lg font-bold select-none"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>
<script>
export default {
  name: "TButton",
};
</script>
