<script setup>
import gsap from 'gsap'
</script>

<template>
    <div id="sketch" class="w-full h-screen flex justify-center items-center">
        <img id="img" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="h-screen">
        <div id="mask" class="w-1/3 h-screen bg-black absolute left-0"></div>
    </div>
</template>

<script>
export default {
    mounted() {
    //     gsap.registerPlugin(ScrollTrigger);

    //     var parallax = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: '#sketch',
    //       start: 'top top',
    //       pin: true,
    //       scrub: 0.2,
    //     }
    //   })
    //   parallax.fromTo('#mask', {x:0},{x: 250}, 0)
    //   parallax.fromTo('#img', {x:0}, {x:0}, 0)


    }
}
</script>