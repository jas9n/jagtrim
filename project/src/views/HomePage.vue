<script setup>
import GlobalBtn from '../components/GlobalBtn.vue'
import ProductDisplay from '@/components/ProductDisplay.vue';
import PhotoGallery from '@/components/PhotoGallery.vue';
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

</script>
<template>
  <div id="home">
    <div id="landing" class="w-screen h-screen flex justify-center items-center z-10">
      <img id="landing-img" src="../assets/images/landing.svg" alt="" class="absolute -z-10 top-0">
      <img id="monogram1" src="../assets/images/monogram-j.svg" class="absolute w-full top-0 " alt="">
      <img id="monogram2" src="../assets/images/monogram-t.svg" class="absolute w-full top-0 " alt="">
      <div class="flex justify-center items-start absolute right-40">
        <h1 id="title" class="flex flex-col items-end space-y-2 pb-2 font-serif text-7xl">
          <span>Elevating fashion, </span>
          <span>one button at a time.</span> 
        </h1>
      </div>
    </div>
    <div id="about" class="w-full h-[60vh] flex justify-center items-center z-20 bg-white">
      <div class="flex flex-col items-center justify-center w-1/2 space-y-2">
        <h2 class="font-serif text-4xl pb-2">Reimagining Button Freedom</h2>
      <p class="text-lg text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsum ad amet natus magni aperiam doloremque temporibus iure quae ullam placeat corporis tempora doloribus, nihil id. Tempore doloremque quaerat sed.
      </p>
      </div>
    </div>
    <div id="collection" class="w-full h-[90vh] flex flex-col justify-center items-center relative">
      <!-- <img id="monogram3" src="../assets/images/monogram-j.svg" class="absolute w-full top-0 opacity-10" alt="">
      <img id="monogram4" src="../assets/images/monogram-t.svg" class="absolute w-full top-0 opacity-10" alt=""> -->
      <div class="grid grid-flow-row grid-cols-3 justify-center items-center">
        <ProductDisplay id='product' v-for="(item, index) in collection" :key="index" :product="item"/>
      </div>
      <RouterLink to="/collection"><GlobalBtn>See More</GlobalBtn></RouterLink>
      
    </div>
    <div id="gallery" class="w-full h-screen flex justify-center items-center">
      <div id="flex justify-center items-center">
        <PhotoGallery />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
    data() {
        return {
            collection: ['button #1', 'button #2', 'button #3', 'button #4', 'lia li #5', 'amanda', ],
        }
    },
    mounted() {
      var inital = gsap.timeline()
      inital.to('#monogram1', {x: -1500,  opacity: 0.1, duration: 2.3}, 0.3)
      inital.to('#monogram2', {x: 1500, opacity: 0.1, duration: 2.3}, 0.3)
      inital.from('#title', {y: -50, opacity: 0.0, duration: 1}, 1.8)
      

      var parallax = gsap.timeline({
        scrollTrigger: {
          trigger: '#about',
          start: 'top bottom',
          end: 'center center',
          scrub: 0.2,
        }
      })
      parallax.fromTo('#landing', {y:0},{y: 175}, 0)
      parallax.fromTo('#about', {y:0}, {y:0}, 0)

      var collection = gsap.timeline({
        scrollTrigger: {
          trigger: '#collection',
          start: 'top bottom',
        }
      })

      collection.from('#product', {y: -30, opacity: 0.3, stagger: 0.1})
      
    },
    methods: {
      getImg(img) {
      return img ? require("@/assets/images/" + img) : "";
    }
    }
}
</script>