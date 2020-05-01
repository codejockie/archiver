<template>
  <div class="border-b-2 font-medium">
    <div
      class="cursor-pointer font-medium grid grid-cols-8 gap-1 col-gap-1 row-gap-1 text-black text-left h-28 px-1"
      @click.prevent="active = !active"
    >
      <div class="col-span-2 py-2 m-2">
        {{ mail.from }}
      </div>
      <div class="col-span-2 py-2 m-2">
        <span>{{ getTo(mail.to) }}</span>
        <span class="float-right mt-1" v-if="mail.count > 1">
          <Badge>+{{ mail.count - 1 }}</Badge>
        </span>
      </div>
      <div class="col-span-3 py-2 m-2">
        {{ mail.subject }}
        <span v-if="mail.attachment">
          <img
            class="float-right h-4 w-4"
            src="../assets/icon_clip.svg"
            alt="Clip"
          />
        </span>
      </div>
      <div class="col-auto font-bold py-2 m-2">
        {{ formatDate(mail.date) }}
      </div>
    </div>
    <transition name="slide">
      <div class="bg-gray-400 border-t-4 border-gray p-2" v-show="active">
        <p class="px-4">{{ mail.from }}</p>
        <p class="pb-5 px-4">
          {{ mail.body }}
        </p>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Badge from "@/components/Badge.vue";

export default Vue.extend({
  name: "GridList",
  components: {
    Badge
  },
  data() {
    return {
      active: false
    };
  },
  props: {
    formatDate: Function,
    getTo: Function,
    mail: Object
  }
});
</script>

<style scoped>
#badge-container {
  top: 27px;
}
</style>
