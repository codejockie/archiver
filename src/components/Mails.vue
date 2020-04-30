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
        <table class="border-collapse w-full">
          <thead
            class="text-left bg-gray-200 border-b border-gray-400 border-t select-none"
          >
            <th class="border-b-2 border-gray-400 p-3">From</th>
            <th class="border-b-2 border-gray-400 p-3">To</th>
            <th class="border-b-2 border-gray-400 p-3">Subject</th>
            <th class="border-b-2 border-gray-400 p-3">
              <span class="text-black font-semibold">Date</span>
              <img
                class="inline h-3 w-3 ml-2"
                src="../assets/icon_arrow01.svg"
                alt="Sort Asc"
              />
            </th>
          </thead>
          <tbody class="cursor-pointer font-medium text-black text-left">
            <tr
              v-for="mail in mails"
              :key="mail.id"
              class="relative hover:bg-gray-100 hover:text-blue-800"
              v-on:mouseover="
                tooltipInfo = mail;
                showToolTip = true;
              "
              v-on:mouseleave="
                tooltipInfo = {};
                showToolTip = false;
              "
            >
              <td class="border-b-2 border-gray-400 truncate p-3">
                {{ mail.from }}
              </td>
              <td class="border-b-2 border-gray-400 truncate p-3">
                <span>{{ getTo(mail.to) }}</span>
                <span class="float-right mt-1" v-if="mail.count > 1">
                  <Badge>+{{ mail.count - 1 }}</Badge>
                </span>
              </td>
              <td class="border-b-2 border-gray-400 truncate p-3">
                {{ mail.subject }}
                <span v-if="mail.attachment">
                  <img
                    class="float-right h-4 w-4"
                    src="../assets/icon_clip.svg"
                    alt="Clip"
                  />
                </span>
              </td>
              <td class="border-b-2 border-gray-400 font-bold p-3">
                {{ formatDate(mail.date) }}
              </td>
            </tr>
            <Tooltip :mail="info" :show="showToolTip" />
          </tbody>
        </table>
      </div>
      <div class="md:hidden">
        <div
          class="divide-gray-400 bg-gray-200 border-b border-gray-400 border-t select-none h-12 p-3"
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
        <Accordion
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
import Tooltip from "@/components/Tooltip.vue";
import Accordion from "@/components/Accordion.vue";
import { formatDateTime } from "@/helpers/dateTime";

@Component({
  components: {
    Accordion,
    Badge,
    Tooltip
  }
})
export default class Mails extends Vue {
  private info = {};
  private showToolTip = false;
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

  get tooltipInfo() {
    return this.info;
  }

  set tooltipInfo(info: object) {
    this.info = info;
  }
}
</script>
<style scoped>
.h-28 {
  height: 7rem;
}
</style>
