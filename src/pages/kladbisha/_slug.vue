<template>
  <KladbishaCategory v-if="!Object.keys(query).length" />
  <KladbishaPost v-else :postSlug="query" />
</template>

<script>
import { Vue, Component, Watch } from "vue-property-decorator";

import Services from '~/components/services/Main.vue';
import Post from '~/components/post/Main.vue';
import KladbishaCategory from '~/components/kladbisha.vue';
import KladbishaPost from '~/components/kladbishaPost.vue';


@Component({
    components: {KladbishaCategory, KladbishaPost},
      async asyncData({ store, params, query }) {
    

        return {
          category: params?.slug || 'all',
          query: query
        }
      },
      
})
export default class Page extends Vue {
  category = this.$route.params.slug;
  query = this.$route.query;
 

  @Watch('$route')
  switchRoute() {
    this.category = this.$route.params.slug;
    this.query = this.$route.query;
  }
 
 

 
}
</script>
