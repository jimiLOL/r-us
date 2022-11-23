<template>
  <Home />
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component({
  asyncData({ store, route }) {
    store.commit("hover/switchHover", true);
  },
})
export default class Page extends Vue {}
</script>