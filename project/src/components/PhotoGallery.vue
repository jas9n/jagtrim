<script setup>
import gsap from 'gsap'
</script>

<template>
    <div id="gallery" class="flex justify-center items-center relative">
        <div v-for="i in [currentIndex]" :key="i">
          <img :src="currentImg" class="h-[85vh] w-full"/>
        </div>
    <p id="prev" class="cursor-pointer absolute top-[50%] w-auto p-4 text-white text-2xl" @click="prev">&#10094;</p>
    <p id="next" class="cursor-pointer absolute top-[50%] w-auto p-4 text-white text-2xl" @click="next">&#10095;</p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            images: ["https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg",
            "https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg"],
            timer: null,
            currentIndex: 0,
        }
    },
    mounted() {
        this.start()
    },
    methods: {
        start() {
            this.timer = setInterval(this.next, 10000);
        },
        next() {
            this.currentIndex += 1;
        },
        prev() {
            this.currentIndex -= 1;
        }
    },
    computed: {
      currentImg() {
            return this.images[Math.abs(this.currentIndex) % this.images.length]
        }
    }

}
</script>

<style scoped>
#prev, #next {
    transition: 0.7s ease;
    border-radius: 0 4px 4px 0;
    text-decoration: none;
    user-select: none;
}

#next {
  right: 0;
}

#prev {
  left: 0;
}

#prev:hover, #next:hover {
  background-color: rgba(0,0,0,0.9);
}
</style>