<template>
    <Layout>
        <nuxt />
    </Layout>
</template>

<script>

import { Vue, Component } from 'vue-property-decorator'
import Layout from '~/components/layout.vue'

@Component({
    components: { Layout },
    head() {
    return  {
         script: []
    }
    }
})
export default class DefaultLayout extends Vue { }

</script>
