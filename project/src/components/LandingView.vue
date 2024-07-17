<script setup>
import gsap from 'gsap'
</script>

<template>
    <div id="landing" class="w-screen h-screen flex justify-center items-center z-10">
      <img id="landing-img" src="@/assets/images/photos/landing.svg" alt="" class="h-screen absolute -z-10 top-0">
      <img id="monogram1" src="@/assets/images/monogram-j.svg" class="hidden absolute w-full top-0 md:block" alt="">
      <img id="monogram2" src="@/assets/images/monogram-t.svg" class="hidden absolute w-full top-0 md:block" alt="">
      <div class="flex justify-center items-start absolute right-40">
        <h1 class="flex flex-col items-end space-y-2 pb-2 font-serif text-xl lg:text-7xl">
          <span id="title">Design by passion.</span>
          <span id="title">Crafted with precision.</span> 
        </h1>
      </div>
    </div>
</template>

<script>
export default {
    name: 'LandingView',
    mounted() {
        const inital = gsap.timeline()
        inital.to('#monogram1', {x: -1500,  opacity: 0.1, duration: 2.3}, 0.3)
        inital.to('#monogram2', {x: 1500, opacity: 0.1, duration: 2.3}, 0.3)
        inital.from('#title', {y: -40, opacity: 0, duration: 1, stagger: 0.4}, 1.8)
    }
}
</script>