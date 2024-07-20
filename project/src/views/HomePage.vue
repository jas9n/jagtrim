<script setup>
import LandingView from '@/components/LandingView.vue'
import GlobalBtn from '@/components/GlobalBtn.vue'
import ProductItem from '@/components/ProductItem.vue';
import PhotoGallery from '@/components/PhotoGallery.vue';
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

// import { useItemStore } from '@/stores/ItemStore';
// const itemStore = useItemStore()

</script>


<template>
  <div id="home" :key="$route.fullPath">
    <div id="landing">
      <LandingView />
    </div>
    <div id="about" class="w-full h-[60vh] flex justify-center items-center z-20 bg-white">
      <div class="flex flex-col items-center justify-center w-1/2 space-y-2">
        <h2 class="font-serif text-3xl md:text-4xl lg:text-5xl pb-2 text-center">Reimagining Button Freedom</h2>
      <p class="text-md md:text-lg lg:text-xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsum ad amet natus magni aperiam doloremque temporibus iure quae ullam placeat corporis tempora doloribus, nihil id. Tempore doloremque quaerat sed.
      </p>
      </div>
    </div>
    <div id="sketch" class="w-full h-screen hidden justify-center items-center md:flex">
        <img id="img" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="h-screen w-full">
        <!-- <div id="mask" class="w-1/3 h-screen bg-black absolute left-0"></div> -->
    </div>
    <div id="collection" class="w-full md:h-screen flex flex-col justify-center items-center relative">  
      <img src="" alt="">
      <RouterLink :to="{ name: 'collection' }"><GlobalBtn>View Collection</GlobalBtn></RouterLink>
    </div>
    <div id="gallery" class="w-full md:h-screen flex justify-center items-center">
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
    mounted() {
      // location.reload()
      
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

      
    },
    methods: {
     
    }
}
</script>