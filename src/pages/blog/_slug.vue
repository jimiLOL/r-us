<template>
  <Blog v-if="!Object.keys(query).length" :category_en="category" />
  <Post v-else :postSlug="query.post" direction="blog" />
</template>

<script>
import { Vue, Component, Watch } from "vue-property-decorator";

import Blog from "~/components/blog/Main.vue";
import Post from "~/components/post/Main.vue";

@Component({
  components: { Blog, Post },
  asyncData({ store, params, query }) {
    store.commit("hover/switchHover", false);

    return {
      category: params?.slug || "all",
      query: query,
    };
  },
  
})
export default class Page extends Vue {
  category = this.$route.params.slug;
  query = this.$route.query;

  //   head() {
  //   return {
  //     title: 'asd',
  //   };
  // }

  @Watch("$route")
  switchRoute() {
    this.category = this.$route.params.slug;
    this.query = this.$route.query;
  }
}
</script>
