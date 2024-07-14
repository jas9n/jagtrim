<script setup>
import gsap from 'gsap'
</script>

<template>
    <div id="gallery" class="flex justify-center items-center w-full h-screen">
        <div class="group flex justify-center items-center relative w-[80vw]">
          <img src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="item absolute transition duration-250"/>
          <img src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="item absolute transition duration-250"/>
          <img src="https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="item absolute transition duration-250"/>
          <img src="https://images.unsplash.com/photo-1458668383970-8ddd3927deed?q=80&w=2967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="item absolute transition duration-250"/>
          <p id="prev" class="opacity-0  cursor-pointer text-white absolute left-0 bg-black text-2xl p-3 rounded group-hover:opacity-70 transition duration-250" @click="prev()">&#10094;</p>
            <p id="next" class="opacity-0 cursor-pointer text-white absolute right-0 bg-black text-2xl p-3 rounded group-hover:opacity-70 transition duration-250" @click="next()">&#10095;</p>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            timer: null,
            index: 0,
            count: 4,
        }
    },
    mounted() {
        this.show(this.index)
    },
    methods: {
        show(n) {
            let items = document.querySelectorAll('.item')
            items.forEach((item, i) => {
                item.style.opacity = i === n ? 1 : 0;
                // gsap.from(item, {x: -200, duration: 0.1}, )
            })
        },

        next() {
            this.index += 1
            if (this.index >= this.count) this.index = 0;
            this.show(this.index);

        },

        prev() {
            this.index -= 1
            if (this.index < 0) this.index = this.count - 1;
            this.show(this.index);
        },

    },
}
</script>

<style scoped>

</style>