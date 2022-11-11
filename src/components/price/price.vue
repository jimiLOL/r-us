<template>
    <div :class="['flex', $device.isMobile ? 'flex-col':'flex-row', 'justify-center', 'gap-6', 'px-4']">
        <div :class="[$device.isMobile ? '':'w-3/10 pt-20', 'basis-3/10']">
            <nav>
            <ul class="text-bold text-center whitespace-nowrap">
                <li class="py-4">Захоронение</li>
                <li class="py-4">Место на кладбище</li>
                <li class="py-4">Груз 200</li>
                <li class="py-4">Кремация</li>
                
            </ul>
         </nav>
        </div>
         
         <PriceBlock class="w-full mb-14"/>
        
    </div>
</template>



<script>
import { Vue, Component } from "vue-property-decorator";
import PriceBlock from '~/components/home/priceBlock.vue';
 

@Component({
    components: {PriceBlock}
})
export default class Price extends Vue {}
</script>
