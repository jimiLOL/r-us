<template>
  <Nuxt />
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component({
  
})
export default class ErrorHandler extends Vue {
  mounted() {
    this.$store.dispatch("city/ACTION_GET_DOMAIN", window?.location?.host);
  }
}
</script>
