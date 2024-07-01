<template>
    <div class="relative z-0 w-full group overflow-visible">
      
  
      <input v-if="type === 'sm'" class="block py-2.5 px-3 mt-2.5 w-full text-sm text-zinc-900 bg-transparent rounded-md border border-solid border-zinc-200 appearance-none focus:outline-none focus:ring-0 focus:border-orange-500" :name="name" :value="value" :required="required ? true : false" :placeholder="placeholder"/>

      <textarea v-if="type === 'lg'" class="block h-48 py-2.5 px-3 mt-2.5 w-full text-sm text-zinc-900 bg-transparent rounded-md border border-solid border-zinc-200 appearance-none focus:outline-none focus:ring-0 focus:border-orange-500"   :placeholder="placeholder" />
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        value: String,
        type: String,
        placeholder: String,
        required: Boolean,
    }
}
</script>