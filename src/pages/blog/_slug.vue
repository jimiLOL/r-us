<template>
  <Blog />
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

import Blog from '~/components/blog/Main.vue';

@Component({
    components: {Blog}
})
export default class Page extends Vue {}
</script>
