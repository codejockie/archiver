<template>
  <div class="home">
    <div class="pl-6">
      <DatePicker :onDateChange="onDateChange" :search="searchArchive" />
    </div>
    <Mails :mails="mails" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Range from "@/models/Range";
import { getMails } from "@/helpers/mail";
import { MailExtra } from "@/models/Mail";
import Mails from "@/components/Mails.vue";
import { isBetween } from "@/helpers/dateTime";
import DatePicker from "@/components/DatePicker.vue";

interface Data {
  mails: MailExtra[];
}

export default Vue.extend({
  name: "Home",
  components: {
    DatePicker,
    Mails
  },
  data(): Data {
    return {
      mails: []
    };
  },
  methods: {
    onDateChange(/* date: Range */): void {
      // const { end, start } = date;
      // this.mails = data.filter((m: Mail) => isBetween(m.date, start, end));
    },
    searchArchive(date: Range): void {
      const { end, start } = date;
      this.mails = getMails().filter((m: MailExtra) =>
        isBetween(m.date, start, end)
      );
    }
  }
});
</script>
