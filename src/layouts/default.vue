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
export default class DefaultLayout extends Vue { 
    mounted() {
        this.$store.dispatch('city/ACTION_GET_DOMAIN', window.location.host)
        
    }
}

</script>
