<template>
  <section class="pb-11 mt-4">
    <nav class="pt-2">
      <ul class="flex justify-center align-items-center mb-0 font-weight-600">
        <li :class="['flex', 'items-center', { disabled: current <= 1 }]">
          <button
            type="button"
            class="
              w-7
              h-9
              p-0
              justify-content-center
              align-items-center
              border-2
              rounded-l-lg
              border-theme-11 border-solid
            "
            aria-label="Previous"
            @click="setPage(current - 1)"
          >
            <ChevronsLeftIcon aria-hidden="true" />
          </button>
        </li>

        <li
          v-for="page in pages"
          :key="page"
          :class="['flex', 'items-center', { active: page === current }]"
        >
          <button
            type="button"
            class="
            w-7
              h-9
              p-0
              justify-content-center
              align-items-center
              border-2
              border-theme-11 border-solid
            "
            @click="setPage(page)"
          >
            {{ page }}
            <span v-if="page === current" class="sr-only">(current)</span>
          </button>
        </li>
        <li :class="['d-none', 'd-sm-block', { disabled: current >= total }]">
          <button
            type="button"
            class="
              w-7
              h-9
              p-0
              justify-content-center
              align-items-center
              border-2
              rounded-r-lg
              border-theme-11 border-solid
            "
            aria-label="Next"
            @click="setPage(current + 1)"
          >
            <ChevronsRightIcon aria-hidden="true" />
          </button>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";

@Component({})
export default class Pagination extends Vue {
  @Prop({ type: Number, default: () => 1 }) readonly siblings!: number;
  @Prop({ type: Number, default: () => 1 }) readonly current!: number;
  @Prop({ type: Number, default: () => 1 }) readonly total!: number;

  get pages() {
    const pages = [];
    const min = Math.max(
      1,
      this.current -
        this.siblings -
        Math.max(0, this.siblings - this.total + this.current)
    );
    const max = Math.min(this.total, min + this.siblings * 2);

    for (let i = min; i <= max; i += 1) {
      pages.push(i);
    }

    return pages;
  }

  @Emit("page-change")
  setPage(value: number) {
    if (value < 1 || value > this.total || value === this.current) {
      return;
    }

    return value;
  }
}
</script>
