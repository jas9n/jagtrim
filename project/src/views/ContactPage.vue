<script setup>
import FormInput from "../components/FormInput.vue"
import GlobalBtn from "../components/GlobalBtn.vue"

// var frmvalidator  = new Validator("contactform");
//     frmvalidator.addValidation("name","req","Please provide your name"); 
//     frmvalidator.addValidation("email","req","Please provide your email"); 
//     frmvalidator.addValidation("email","email","Please enter a valid email address"); 
</script>
<template>
  <div id="contact">
    <div class="w-full h-screen flex justify-center items-center">
      <div class="flex justify-center items-center space-x-8 mt-10">
        <img src="../assets/images/button.svg" alt="Big Yellow Button" class="h-[70vh]">
        <div class="flex flex-col justify-center items-start">
          <h2 class="font-serif text-3xl mb-2">Interested in partnering with us?</h2>
          <p>Get in touch with our team to learn more.</p>
          <form method="POST" name="contactform" action="../contact-form.php" class="w-full flex flex-col justify-center items-center">
            <FormInput name="name" type="text" placeholder="Name" size="sm"/>
            <FormInput name="email" type="text" placeholder="Email" size="sm"/>
            <FormInput name="message" type="text" placeholder="Message" size="lg"/>
            <GlobalBtn type="submit">Submit</GlobalBtn>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    var frmvalidator  = new Validator("contactform");
    frmvalidator.addValidation("name","req","Please provide your name"); 
    frmvalidator.addValidation("email","req","Please provide your email"); 
    frmvalidator.addValidation("email","email","Please enter a valid email address"); 
  }
}
</script>
