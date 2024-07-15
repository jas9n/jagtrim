<script setup>
import LandingView from '@/components/LandingView.vue'
import GlobalBtn from '@/components/GlobalBtn.vue'
import ProductItem from '@/components/ProductItem.vue';
import PhotoGallery from '@/components/PhotoGallery.vue';
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

import { useItemStore } from '@/stores/ItemStore';
const itemStore = useItemStore()
</script>


<template>
  <div id="home">
    <div id="landing">
      <LandingView />
    </div>
    <div id="about" class="w-full h-[60vh] flex justify-center items-center z-20 bg-white">
      <div class="flex flex-col items-center justify-center w-1/2 space-y-2">
        <h2 class="font-serif text-4xl pb-2">Reimagining Button Freedom</h2>
      <p class="text-lg text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsum ad amet natus magni aperiam doloremque temporibus iure quae ullam placeat corporis tempora doloribus, nihil id. Tempore doloremque quaerat sed.
      </p>
      </div>
    </div>
    <div id="sketch" class="w-full h-screen flex justify-center items-center">
        <img id="img" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="h-screen w-full">
        <div id="mask" class="w-1/3 h-screen bg-black absolute left-0"></div>
    </div>
    <div id="collection" class="w-full h-[120vh] flex flex-col justify-center items-center relative">
      <!-- <img id="monogram3" src="../assets/images/monogram-j.svg" class="absolute w-full top-0 opacity-10" alt="">
      <img id="monogram4" src="../assets/images/monogram-t.svg" class="absolute w-full top-0 opacity-10" alt=""> -->
      
        <div class="grid grid-flow-row grid-cols-3 justify-center items-center">
          <div id="product" v-for="item in itemStore.items">
            <RouterLink :to="{ name: 'product', params: {id: item.id }}">
              <ProductItem :item="item.name" :photo="item.photo"/>
            </RouterLink>
          </div>
      </div>
      <RouterLink to="/collection"><GlobalBtn>See More</GlobalBtn></RouterLink>
    </div>
    <div id="gallery" class="w-full h-screen flex justify-center items-center">
      <PhotoGallery />
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
    data() {
        return {
            
        }
    },
    setup() {
      
    },
    mounted() {
      gsap.registerPlugin(ScrollTrigger);
      
      const about = gsap.timeline({
        scrollTrigger: {
          trigger: '#about',
          start: 'top bottom',
          end: 'center center',
          scrub: 0.2,
        }
      })
      about.fromTo('#landing', {y:0},{y: 140}, 0)
      about.fromTo('#about', {y:0}, {y:0}, 0)

      const sketch = gsap.timeline({
        scrollTrigger: {
          trigger: '#sketch',
          start: 'top top',
          end: 'bottom 250vh',
          pin: '#sketch',
          scrub: 0.2,
        }
      })
      sketch.fromTo('#mask', {x:0},{x: 1000}, 0)
      sketch.fromTo('#img', {x:0}, {x:0}, 0)

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