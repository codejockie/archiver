<template>
  <div>
    <!-- Flex List Header -->
    <div
      class="flex border-b border-gray-400 border-t font-medium bg-gray-200"
      v-if="flex"
    >
      <div class="flex-auto p-3">
        From
      </div>
      <div class="flex-auto p-3">
        To
      </div>
      <div class="flex-auto p-3">
        Subject
      </div>
      <div class="flex-initial p-3">
        <span class="text-black font-bold">Date</span>
        <img
          class="inline h-3 w-3 ml-2"
          src="../assets/icon_arrow01.svg"
          alt="Sort Asc"
        />
      </div>
    </div>

    <!-- Grid List Header -->
    <div
      class="bg-gray-200 border-b border-gray-400 border-t font-medium grid grid-cols-8 gap-0 col-gap-0 row-gap-0 text-left text-left select-none"
      v-if="grid"
    >
      <div class="col-span-2 p-3">From</div>
      <div class="col-span-2 p-3">To</div>
      <div class="col-span-3 p-3">Subject</div>
      <div class="p-3">
        <span class="text-black font-bold">Date</span>
        <img
          class="inline h-3 w-3 ml-2"
          src="../assets/icon_arrow01.svg"
          alt="Sort Asc"
        />
      </div>
    </div>

    <!-- Mobile List Header -->
    <div
      class="divide-gray-400 bg-gray-200 border-b border-gray-400 border-t select-none h-12 p-3"
      v-if="mobile"
    >
      <span class="text-black font-semibold">From</span>
      <img
        class="inline h-3 w-3 ml-2"
        src="../assets/icon_arrow01.svg"
        alt="Sort Asc"
      />
      <span class="border-gray-700 border-r-2 ml-2 mr-2"></span>
      <span class="font-semibold">To</span>
      <span class="border-gray-700 border-r-2 ml-2 mr-2"></span>
      <span class="font-semibold">Subject</span>
      <span class="border-gray-700 border-r-2 ml-2 mr-2"></span>
      <span class="font-semibold">Date</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ListHeader",
  props: {
    flex: {
      type: Boolean,
      default: false
    },
    grid: {
      type: Boolean,
      default: false
    },
    mobile: {
      type: Boolean,
      default: false
    }
  }
});
</script>

<style scoped>
#badge-container {
  top: 27px;
}
</style>
