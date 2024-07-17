<script setup>
import ProductItem from '@/components/ProductItem.vue'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useItemStore } from '@/stores/ItemStore';
const itemStore = useItemStore()

gsap.registerPlugin(ScrollTrigger)
</script>

<template>
    <div id="collection" class="w-full mt-24 flex flex-col justify-center items-center relative">
      <div class="grid grid-flow-row grid-cols-3 justify-center items-center">
          <div id="product" v-for="item in itemStore.items">
              <ProductItem :item="item.name" :id="item.id" :photo="item.photo"/>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'collection',
    data() {
        return {
        }
    },
    mounted() {
      const collection = gsap.timeline({
        scrollTrigger: {
          trigger: '#collection',
          start: 'top bottom',
        }
      })

      collection.from('#product', {y: -30, opacity: 0.3, stagger: 0.1})
    },

}
</script>