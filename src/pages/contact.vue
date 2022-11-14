<template>
  <Contact />
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

import Contact from '~/components/contact/Main.vue';

@Component({
    components: {Contact}
})
export default class Page extends Vue {}
</script>
