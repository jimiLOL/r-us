<template>
  <Price />
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

import Price from '~/components/price/price.vue';

@Component({
    components: {Price}
})
export default class Page extends Vue {}
</script>
