<script setup>
import { useItemStore } from '@/stores/ItemStore';
const itemStore = useItemStore()

</script>

<template>
    <div class="flex justify-center items-center w-full h-screen">
        <div>
            <img src="" alt="">
        </div>
        <div>
            <h1>{{ itemStore.items[id - 1] }}</h1>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        id: String,
    }
}
</script>