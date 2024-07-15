<template>
  <div class="draw meet group flex flex-col justify-center items-center w-72 h-72  mx-8 my-4 rounded">
    <div class="bg-black w-full h-full absolute opacity-0 group-hover:opacity-10 transition duration-200 ease-out rounded"></div>
    <img :src="photo" alt="">
    <h3>{{ product }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    product: String,
    photo: String,
  }
}
</script>

<style scoped>
  .draw {
  background: none;
  border: 0;
  box-sizing: border-box;
  margin: 1em;
  padding: 1em 2em;
  box-shadow: inset 0 0 0 1.5px #fff;
  color: #000;
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
    color: #000;
  }

  .draw:hover::before,
  .draw:hover::after {
    width: 100%;
    height: 100%;
  }

  .draw:hover::before {
    border-top-color: #000; 
    border-right-color: #000;
    transition:
      width 0.25s ease-out, 
      height 0.25s ease-out 0.25s; 
  }

  .draw:hover::after {
    border-bottom-color: #000;
    border-left-color: #000;
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
    border-top-color: #000;
    border-right-color: #000;
  }

  .meet:hover::after {
    border-bottom-color: #000;
    border-left-color: #000;
    transition: 
      height 0.25s ease-out,
      width 0.25s ease-out 0.25s;
  }


</style>