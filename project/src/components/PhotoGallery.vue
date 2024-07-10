<template>
    <div id="gallery">
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" class="h-[80vh]"/>
      </div>
    </transition-group>
    <a id="prev" class="cursor-pointer absolute top-[40%] w-auto p-4 text-white" @click="prev" href="#">&#10094; Previous</a>
    <a id="next" class="cursor-pointer absolute top-[40%] w-auto p-4 text-white" @click="next" href="#">&#10095; Next</a>
  </div>
</template>

<script>
export default {
    name: "Gallery",
    data() {
        return {
            images: ['landing.svg'],
            timer: null,
            currentIndex: 0,
        }
    },
    mounted() {
        this.start()
    },
    methods: {
        start() {
            this.timer = setInterval(this.next, 5000);
        },
        next() {
            this.currentIndex += 1;
        },
        prev() {
            this.currentIndex -= 1;
        }
    },
    computed() {
        currentImg() {
            return this.images[Math.abs(this.currentIndex) % this.images.length]
        }
    }

}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

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