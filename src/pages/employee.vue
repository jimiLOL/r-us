<template>
  <Employee />
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

import Employee from '~/components/employee/Main.vue';

@Component({
    components: {Employee}
})
export default class Page extends Vue {}
</script>
