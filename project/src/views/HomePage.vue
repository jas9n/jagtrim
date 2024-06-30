<template>
  <div id="home">
    <div id="landing" class="w-full h-screen flex justify-center items-center">
      <img src="../assets/images/landing.svg" alt="" class="absolute -z-10">
      <div class="flex justify-center items-start absolute right-40">
        <h1 class="flex flex-col items-end space-y-2 pb-2 font-serif text-7xl">
          <!-- <span>Elevating fashion, </span>
          <span>one button at a time.</span>  -->
        </h1>
      </div>
    </div>
    <div id="about" class="w-full h-[60vh] flex justify-center items-center">
      <div class="flex flex-col items-center justify-center w-1/2 space-y-2">
        <h2 class="font-serif text-4xl pb-2">Reimagining Button Freedom</h2>
      <p class="text-lg text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsum ad amet natus magni aperiam doloremque temporibus iure quae ullam placeat corporis tempora doloribus, nihil id. Tempore doloremque quaerat sed.
      </p>
      </div>
    </div>
    <div id="collection" class="w-full h-[80vh] flex flex-col justify-center items-center">
      <h2 class="font-serif text-3xl pb-2">Collection</h2>
      <div class="grid grid-flow-row grid-cols-3 justify-center items-center">
        <div v-for="(button, index) in buttons" :key="index" class="flex flex-col justify-center items-center w-48 h-48 bg-zinc-200 mx-8 my-4 rounded-2xl">
          <h3>{{ button }}</h3>
        </div>
       
      </div>
      <button>View Full Collection</button>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "HomePage",
    data() {
        return {
            buttons: ['button #1', 'button #2', 'button #3', 'button #4', 'button #5'],
        }
    },
    created() {
        window.addEventListener("scroll", this.scroll)
    },
    methods: {
        scroll() {
            if (window.scrollY > 0) {
                this.nav = true
            } else {
                this.nav = false
            }
        },
    }
}
</script>