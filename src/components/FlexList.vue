<template>
  <div class="border-b-2 font-medium">
    <div
      class="flex cursor-pointer font-medium text-black text-left h-28 px-4"
      @click="active = !active"
    >
      <div class="flex-auto m-2 py-2">
        <div class="">
          {{ mail.from }}
        </div>
      </div>
      <div class="flex-auto m-2 py-2">
        <span>{{ getTo(mail.to) }}</span>
        <span class="float-right mt-1" v-if="mail.count > 1">
          <Badge>+{{ mail.count - 1 }}</Badge>
        </span>
      </div>
      <div class="flex-auto m-2 py-2">
        {{ mail.subject }}
        <span v-if="mail.attachment">
          <img
            class="float-right h-4 w-4"
            src="../assets/icon_clip.svg"
            alt="Clip"
          />
        </span>
      </div>
      <div class="flex-initial font-bold m-2 py-2">
        {{ formatDate(mail.date) }}
      </div>
    </div>
    <transition name="slide">
      <div class="bg-gray-400 border-t-4 border-gray p-2" v-show="active">
        <p class="font-bold px-4">{{ mail.from }}</p>
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
  name: "FlexList",
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
