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
      <img src="../assets/images/monogram3.svg" alt="" class="fixed top-0 w-full">
      <div class="grid grid-cols-3 gap-8 place-items-center">
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