<template>
  <div
    id="info"
    role="alert"
    class="absolute bg-gray-300 border-t-4 border-gray rounded-b shadow-md text-gray-darkest h-auto mt-3 px-4 py-3 w-px-200 z-10"
    v-show="show"
  >
    <div class="flex">
      <div class="py-1">
        <svg
          class="fill-current h-6 w-6 text-teal mr-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
          />
        </svg>
      </div>
      <div v-if="mail.from">
        <p class="font-bold">{{ mail.from }}</p>
        <slot></slot>
        <p class="text-sm">{{ mail.body }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    mail: {
      type: Object,
      required: true
    },
    show: {
      type: Boolean,
      required: true
    }
  }
});
</script>
<style scoped>
#info::after {
  content: "";
  position: absolute;
  bottom: 104%;
  left: 5%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent #e2e8f0 transparent;
}
</style>
