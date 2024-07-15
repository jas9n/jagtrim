<script setup>
import { useItemStore } from '@/stores/ItemStore';
const itemStore = useItemStore()

</script>

<template>
    <div class="flex justify-center items-center w-full h-screen">
        <div>
            <img :src="getImg(itemStore.items[id - 1].photo)" alt="">
        </div>
        <div>
            <h1>{{ itemStore.items[id - 1].name }}</h1>
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