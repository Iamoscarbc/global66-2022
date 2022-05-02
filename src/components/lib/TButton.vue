<template>
  <button
    class="bg-red-1 text-white px-5 py-3 rounded-full text-lg font-bold"
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
