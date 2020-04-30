<template>
  <div class="relative">
    <div class="relative">
      <div class="absolute inset-auto">
        <img src="../assets/icon_calender.svg" alt="Calendar" class="h-6 w-6" />
      </div>
      <div class="flex w-full">
        <v-date-picker
          mode="range"
          v-model="date"
          class="flex-grow-0"
          :columns="$screens({ lg: 2, sm: 1 })"
        >
          <!--Custom Input Slot-->
          <input
            id="date"
            slot-scope="{ inputProps, inputEvents, isDragging }"
            :class="[
              `appearance-none border font-medium rounded-l shadow text-base pl-12 h-12 w-64 py-2 px-3 ${
                isDragging ? 'text-gray-400' : 'text-gray-700'
              }`
            ]"
            placeholder="Please select a range"
            v-bind="inputProps"
            v-on="inputEvents"
          />
        </v-date-picker>
        <!--Search Button-->
        <div class="inline-block">
          <button
            class="flex items-center shadow-sm appearance-none border bg-gray-200 h-12 w-16 rounded-r-lg"
            @click.prevent="searchArchive()"
          >
            <img
              alt="Search"
              src="../assets/icon_search.svg"
              class="flex-1 h-6 w-6"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import Range from "@/models/Range";

@Component
export default class DatePicker extends Vue {
  private date: Range = { end: 0, start: 0 };
  @Prop({ required: true, type: Function }) private onDateChange: (
    date: Range
  ) => void;
  @Prop({ required: true, type: Function }) private search: (
    date: Range
  ) => void;

  @Watch("date")
  dateChanged(date: Range) {
    this.onDateChange({ start: date.start, end: date.end });
  }

  searchArchive() {
    const { end, start } = this.date;
    this.search({ end, start });
  }
}
</script>
<style scoped>
.inset-auto {
  top: 12px;
  right: auto;
  bottom: auto;
  left: 15px;
}

button:focus {
  outline: none;
}
</style>
