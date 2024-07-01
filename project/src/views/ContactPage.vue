<script setup>
import FormInput from "../components/FormInput.vue"
import GlobalBtn from "../components/GlobalBtn.vue"
</script>
<template>
  <div id="contact">
    <div class="w-full h-screen flex justify-center items-center">
      <div class="flex justify-center items-center space-x-8 mt-10">
        <img src="../assets/images/button.svg" alt="Big Yellow Button" class="h-[70vh]">
        <div class="flex flex-col justify-center items-start">
          <h2 class="font-serif text-3xl mb-2">Interested in partnering with us?</h2>
          <p>Get in touch with our team to learn more.</p>
          <form class="w-full flex flex-col justify-center items-center">
            <FormInput name="name" placeholder="Name" type="sm"/>
            <FormInput name="email" placeholder="Email" type="sm"/>
            <FormInput name="message" placeholder="Message" type="lg"/>
            <GlobalBtn>Submit</GlobalBtn>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>
