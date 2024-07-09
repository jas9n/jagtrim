<template>
    <div class="relative z-0 w-full group overflow-visible">
      
  
      <input v-if="size === 'sm'" class="block py-2.5 px-3 mt-2.5 w-full text-sm text-zinc-900 bg-transparent rounded border border-solid border-zinc-200 appearance-none focus:outline-none focus:ring-0 focus:border-orange-500" :name="name" :type="type" :required="required ? true : false" :placeholder="placeholder"/>

      <textarea v-if="size === 'lg'" class="block h-48 py-2.5 px-3 mt-2.5 w-full text-sm text-zinc-900 bg-transparent rounded border border-solid border-zinc-200 appearance-none focus:outline-none focus:ring-0 focus:border-orange-500" :name="name" :type="type" :required="required ? true : false" :placeholder="placeholder" />
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        type: String,
        placeholder: String,
        size: String,
        required: Boolean,
    }
}
</script>