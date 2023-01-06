<template>
  <Admin />
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import Admin from '~/components/Admin.vue';


@Component({
    components: {Admin}
})
export default class Page extends Vue {}
</script>
