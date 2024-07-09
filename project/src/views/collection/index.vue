<script setup>
import ProductDisplay from '@/components/ProductDisplay.vue';
</script>

<template>
    <div id="collection" class="w-full mt-24 flex flex-col justify-center items-center">
      <div class="grid grid-flow-row grid-cols-3 justify-center items-center">
        <ProductDisplay v-for="(button, index) in buttons" :key="index" :button="button"/>
      </div>
    </div>
</template>

<script>
export default {
    name: 'collection',
    data() {
        return {
            buttons: ['button #1', 'button #2', 'button #3', 'button #4', 'button #5', 'lia li ', 'amanda', 'yair', 'jason' ],
        }
    },
}
</script>