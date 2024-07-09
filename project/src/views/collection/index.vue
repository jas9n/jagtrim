<template>
    <div id="collection" class="w-full h-screen flex flex-col justify-center items-center">
      <div class="grid grid-flow-row grid-cols-3 justify-center items-center">
        <ProductDisplay v-for="(button, index) in buttons" :key="index" :button="button"/>
      </div>
      <GlobalBtn>See More</GlobalBtn>
    </div>
</template>