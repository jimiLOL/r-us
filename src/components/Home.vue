<template>
<div class="shadow-2xl shadow-gray-700">
    <BlockMenu />
    <CtaGeneral />
    <PriceBlock />
</div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import BlockMenu from '~/components/blockMenu.vue';
import CtaGeneral from '~/shared/ctaGeneral.vue'
import PriceBlock from '~/components/priceBlock.vue'

@Component({

    components: {BlockMenu, CtaGeneral, PriceBlock}
})
export default class Home extends Vue {}
</script>
