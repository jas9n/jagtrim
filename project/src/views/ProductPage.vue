<script setup>
import { useItemStore } from '@/stores/ItemStore';
const itemStore = useItemStore()

</script>

<template>
    <div class="flex justify-center items-center w-full h-screen">
        <div >
            <img :src="getImg(itemStore.items[id - 1].photo)" alt="">
        </div>
        <div class="h-[40vh] w-[40vw] space-y-6">
            <h1 class="font-serif font-medium text-4xl">{{ itemStore.items[id - 1].name }}</h1>
            <p class="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam molestiae voluptas maiores eveniet tenetur eaque. Dicta debitis eligendi, odio, quidem veritatis dolor nemo cumque quisquam culpa quod enim aperiam? Reprehenderit?</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        id: String,
    },
    methods: {
        getImg(img) {
            return new URL(`../assets/images/collection/${img}`,import.meta.url).href
        }
    }
}
</script>