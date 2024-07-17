<template>
  <div class="group flex w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 p-8 rounded bg-white">
    <RouterLink :to="{ name: 'product', params: {id: id }}" class="flex justify-center items-center">
      <div class="bg-black hidden md:flex md:w-72 md:h-72 lg:w-96 lg:h-96 absolute left-0 opacity-0 group-hover:opacity-10 transition duration-200 ease-out rounded justify-center items-center">
        <!-- <h3>{{ item }}</h3> -->
      </div>
      <img :src="getImg(photo)" alt="" class="h-64">
    </RouterLink>
  </div>
</template>

<script>
export default {
  props: {
    item: String,
    id: Number,
    photo: String,
  },
  methods: {
        getImg(img) {
            return new URL(`../assets/images/collection/${img}`,import.meta.url).href
        }
    }
}
</script>

<style scoped>
  /* .draw {
  background: none;
  border: 0;
  box-sizing: border-box;
  margin: 1em;
  padding: 1em 2em;
  box-shadow: inset 0 0 0 1.5px #fff;
  position: relative;
  vertical-align: middle;
  }

  .draw::before,
  .draw::after {
    box-sizing: inherit;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
  }

.draw {
    transition: color 0.25s;
}

  .draw::before,
  .draw::after {
    border: 2px solid transparent;
    width: 0;
    height: 0;
  }

  .draw::before {
    top: 0;
    left: 0;
  }

  .draw::after {
    bottom: 0;
    right: 0;
  }
  
  .draw:hover {
    color: #ddd;
  }

  .draw:hover::before,
  .draw:hover::after {
    width: 100%;
    height: 100%;
  }

  .draw:hover::before {
    border-top-color: #ddd; 
    border-right-color: #ddd;
    transition:
      width 0.25s ease-out, 
      height 0.25s ease-out 0.25s; 
  }

  .draw:hover::after {
    border-bottom-color: #ddd;
    border-left-color: #ddd;
    transition:
      border-color 0s ease-out 0.5s, 
      width 0.25s ease-out 0.5s, 
      height 0.25s ease-out 0.75s; 
  }

.meet:hover {
    color: #ddd;
  }

  .meet::after {
    top: 0;
    left: 0;
  }

  .meet:hover::before {
    border-top-color: #ddd;
    border-right-color: #ddd;
  }

  .meet:hover::after {
    border-bottom-color: #ddd;
    border-left-color: #ddd;
    transition: 
      height 0.25s ease-out,
      width 0.25s ease-out 0.25s;
  }
 */

</style>