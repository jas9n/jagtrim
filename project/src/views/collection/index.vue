<script setup>
import ProductDisplay from '@/components/ProductItem.vue';
</script>

<template>
    <div id="collection" class="w-full mt-24 flex flex-col justify-center items-center">
      <div class="grid grid-flow-row grid-cols-3 justify-center items-center">
        <ProductDisplay v-for="(item, index) in collection" :key="index" :product="item"/>
      </div>
    </div>
</template>

<script>
export default {
    name: 'collection',
    data() {
        return {
            collection: ['button #1', 'button #2', 'button #3', 'button #4', 'button #5', 'lia li ', 'amanda', 'yair', 'jason' ],
        }
    },
}
</script>