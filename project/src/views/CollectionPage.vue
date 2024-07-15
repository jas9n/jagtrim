<script setup>
import ProductItem from '@/components/ProductItem.vue'
import { useItemStore } from '@/stores/ItemStore';
const itemStore = useItemStore()
</script>

<template>
    <div id="collection" class="w-full mt-24 flex flex-col justify-center items-center">
      <div class="grid grid-flow-row grid-cols-3 justify-center items-center">
        <div v-for="item in itemStore.items">
          <RouterLink :to="{ name: 'product', params: {id: item.id }}">
            <ProductItem :product="item.name"/>
          </RouterLink>
          
        </div>
      </div>
    </div>
</template>

<script>
// import { useTaskStore } from '@/stores/ItemStore';
export default {
    name: 'collection',
    data() {
        return {
        }
    },
    setup() {
      // const taskStore = useTaskStore()

      // return { taskStore }
    }
}
</script>