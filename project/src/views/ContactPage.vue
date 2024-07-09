<script setup>
import FormInput from "../components/FormInput.vue"
import GlobalBtn from "../components/GlobalBtn.vue"
import { ref } from "vue";

const form = ref({
  access_key: "181a8a18-af75-47c7-bf9d-f91c228aca93",
  subject: "New Email Submission",
  name: "",
  email: "",
  message: "",
});

const result = ref("");
const status = ref("");

const submitForm = async () => {
  try {
    status.value = "loading";
    const response = await $fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form.value,
    });
    console.log(response);
    result.value = response.message;
    if (response.status === 200) {
      status.value = "success";
    } else {
      console.log(response); // Log for debugging, can be removed
      status.value = "error";
    }
  } catch (error) {
    console.log(error); // Log for debugging, can be removed
    status.value = "error";
    result.value = "Something went wrong!";
  } finally {
    // Reset form after submission
    form.value.name = "";
    form.value.email = "";
    form.value.message = "";

    // Clear result and status after 5 seconds
    setTimeout(() => {
      result.value = "";
      status.value = "";
    }, 5000);
  }
};
</script>

<template>
  <div id="contact">
    <div class="w-full h-screen flex justify-center items-center">
      <div class="flex justify-center items-center space-x-8 mt-10">
        <img src="../assets/images/button.svg" alt="Big Yellow Button" class="h-[70vh]">
        <div class="flex flex-col justify-center items-start">
          <h2 class="font-serif text-3xl mb-2">Interested in partnering with us?</h2>
          <p>Get in touch with our team to learn more.</p>
          <form @submit.prevent="submitForm" class="w-full flex flex-col justify-center items-center">
            <FormInput name="name" v-model="form.name" type="text" placeholder="Name" size="sm"/>
            <FormInput name="email" v-model="form.email" type="text" placeholder="Email" size="sm"/>
            <FormInput name="message" v-model="form.message" type="text" placeholder="Message" size="lg"/>
            <GlobalBtn type="submit">Submit</GlobalBtn>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

