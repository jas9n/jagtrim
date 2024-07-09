<template>
  <div id="draw meet" class="flex flex-col justify-center items-center w-48 h-48 bg-zinc-200 mx-8 my-4 rounded-2xl bg-none border-0 box-border ">
    <h3>{{ button }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    button: String,
  }
}
</script>

<style scoped>
#draw {
    transition: color 0.25s;
}

#draw::before, #draw::after {
    width: 0;
    height: 0;
}


#draw::after::before {
    top: 0;
    left: 0;
  }


  #draw::after {
    bottom: 0;
    right: 0;
  }
  
  #draw:hover {
    color: $cyan;
  }

  #draw:hover::before,
  #draw:hover::after {
    width: 100%;
    height: 100%;
  }

  #draw:hover::before {
    border-top-color: black; 
    border-right-color: black;
    transition:
      width 0.25s ease-out,
      height 0.25s ease-out 0.25s; 
  }

  #draw:hover::after {
    border-bottom-color: black; 
    border-left-color: black;
    transition:
      border-color 0s ease-out 0.5s,
      width 0.25s ease-out 0.5s, 
      height 0.25s ease-out 0.75s;
  }

/* // Inherits from .draw */
#meet:hover {
    color: black;
  }


  #meet::after {
    top: 0;
    left: 0;
  }

  
  #meet:hover::before {
    border-top-color: black;
    border-right-color: black;
  }

  #meet:hover::after {
    border-bottom-color: black;
    border-left-color: black;
    transition: 
      height 0.25s ease-out,
      width 0.25s ease-out 0.25s;
  }
</style>