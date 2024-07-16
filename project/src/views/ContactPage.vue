<script setup>
import FormInput from "../components/FormInput.vue"
import GlobalBtn from "../components/GlobalBtn.vue"
import { ref } from "vue";

const WEB3FORMS_ACCESS_KEY = "181a8a18-af75-47c7-bf9d-f91c228aca93";
const name = ref("")
const email = ref("")
const message = ref("")

const submitForm = async () => {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      name: name.value,
      email: email.value,
      message: message.value,
    }),
  });
  const result = await response.json();
  if (result.success) {
    console.log(result);
  }
}
</script>

<template>
  <div id="contact">
    <div class="w-full h-screen flex justify-center items-center">
      <div class="flex justify-center items-center space-x-8 mt-10">
        <img src="@/assets/images/photos/button.svg" alt="Big Yellow Button" class="h-[70vh]">
        <div class="flex flex-col justify-center items-start">
          <h2 class="font-serif text-3xl mb-2">Interested in partnering with us?</h2>
          <p>Get in touch with our team to learn more.</p>
          <form @submit.prevent="submitForm" class="w-full flex flex-col justify-center items-center">
            <FormInput name="name" v-model="name" type="text" placeholder="Name" size="sm"/>
            <FormInput name="email" v-model="email" type="text" placeholder="Email" size="sm"/>
            <FormInput name="message" v-model="message" type="text" placeholder="Message" size="lg"/>
            <GlobalBtn type="submit">Submit</GlobalBtn>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

