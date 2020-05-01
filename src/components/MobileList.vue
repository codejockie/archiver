<template>
  <div class="border-b-2 font-medium">
    <div class="h-28 px-4" @click.prevent="active = !active">
      <div class="text-black mt-1 pt-3">
        <span class="float-left inline-block">
          <img
            class="h-8 w-8 mt-2"
            src="../assets/icon_mail_sp.svg"
            alt="Mail"
          />
        </span>
        <span class="inline-block">
          <span class="block font-bold text-black truncate mt-0">
            {{ mail.from }}
          </span>
          <span class="block text-black truncate mt-0">
            {{ getTo(mail.to) }}
          </span>
        </span>
        <span class="float-right relative">
          <img
            class="inline h-4 w-4 mr-1"
            src="../assets/icon_clip.svg"
            alt="Clip"
            v-if="mail.attachment"
          />
          {{ formatDate(mail.date) }}
          <img
            class="inline h-2 w-2"
            src="../assets/icon_arrow02.svg"
            alt="Arrow02"
          />
          <span
            id="badge-container"
            class="absolute right-0 top-30 ml-6"
            v-if="mail.count > 1"
          >
            <Badge>+{{ mail.count - 1 }}</Badge>
          </span>
        </span>
      </div>
      <div class="text-black text-lg truncate mt-1 pl-2 pb-2">
        {{ mail.subject }}
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
  name: "MobileList",
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
