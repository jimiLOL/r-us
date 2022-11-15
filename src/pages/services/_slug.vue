<template>
  <Services v-if="!v"/>
  <ServicesPost v-else/>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

import Services from '~/components/services/Main.vue';
import ServicesPost from '~/components/services_post/Main.vue';


@Component({
    components: {Services, ServicesPost}
})
export default class Page extends Vue {
  v = 1;
}
</script>
