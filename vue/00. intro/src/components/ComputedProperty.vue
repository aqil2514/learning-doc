<script setup>
import { reactive, computed, ref } from 'vue'

// const author = reactive({
//   name: 'John Doe',
//   books: ['Vue 2 - Advanced Guide', 'Vue 3 - Basic Guide', 'Vue 4 - The Mystery']
// })

// const publishedBookMessage = computed(() => {
//   return author.books.length > 0 ? 'Yes' : 'No'
// })
// const now = computed(() => Date.now())

const firstName = ref('Muhamad Aqil')
const lastName = ref('Maulana')

const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue) {
    // Note: we are using destructuring assignment syntax here.
    ;[firstName.value, lastName.value] = newValue.split(' ')
  }
})
</script>

<template>
  <p>Has published books:</p>
  <p><strong>First Name : </strong> {{ firstName }}</p>
  <p><strong>Last Name : </strong> {{ lastName }}</p>
  <p><strong>Full Name : </strong> {{ fullName }}</p>
</template>
