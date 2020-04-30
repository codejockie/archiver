<template>
  <div class="flex items-center justify-center">
    <span
      id="badge"
      class="inline bg-gray-600 font-semibold rounded text-center text-white text-xs z-5"
    >
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style scoped>
#badge {
  max-width: 2.5rem;
  min-width: 2rem;
}
</style>
