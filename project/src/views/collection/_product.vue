<template>
    <div class="flex justify-center items-center w-full h-screen">
        <div>
            <img src="" alt="">
        </div>
        <div>
            <h1>{{ product }}</h1>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        product: String,
    }
}
</script>