<template>
  <div>
    <div class="font-semibold text-gray-700 text-xl mt-6 pl-6">
      Results: {{ totalMails }}
    </div>
    <hr class="mt-1 h-3 mx-6" v-if="show" />
    <div v-if="show" class="h-64 w-64 m-auto my-24 relative">
      <img
        class="absolute m-auto top-0 bottom-0 left-0 right-0 h-40"
        src="../assets/logo.png"
        alt="Mail Archiver"
      />
    </div>
    <div v-if="!show">
      <div class="hidden mx-6 md:block">
        <ListHeader :grid="true" />
        <GridList
          v-for="mail in mails"
          :key="mail.id"
          :formatDate="formatDate"
          :getTo="getTo"
          :mail="mail"
        />
      </div>
      <div class="md:hidden">
        <ListHeader :mobile="true" />
        <MobileList
          v-for="mail in mails"
          :key="mail.id"
          :formatDate="formatDate"
          :getTo="getTo"
          :mail="mail"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { formatTo } from "@/helpers/mail";
import { MailExtra } from "@/models/Mail";
import Badge from "@/components/Badge.vue";
import FlexList from "@/components/FlexList.vue";
import GridList from "@/components/GridList.vue";
import { formatDateTime } from "@/helpers/dateTime";
import MobileList from "@/components/MobileList.vue";
import ListHeader from "@/components/ListHeader.vue";

@Component({
  components: {
    Badge,
    GridList,
    FlexList,
    ListHeader,
    MobileList
  }
})
export default class Mails extends Vue {
  private info = {};
  @Prop({ required: true, type: Array }) readonly mails!: MailExtra[];

  get show() {
    return this.mails.length < 1;
  }

  get totalMails() {
    const totalMails = this.mails.length;
    return `${totalMails} mail${totalMails > 1 ? "s" : ""}`;
  }

  getTo(to: string) {
    return formatTo(to);
  }

  formatDate(date: string) {
    return formatDateTime(date);
  }
}
</script>
<style scoped>
.h-28 {
  height: 7rem;
}
</style>
