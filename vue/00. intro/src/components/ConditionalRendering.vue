<script setup>
import { ref } from 'vue'

const awesome = ref(true)
const type = ref('')
const ok = ref(true)
</script>

<template>
  <button @click="awesome = !awesome">Toggle</button>

  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh no 😢</h1>

  <input type="text" name="test" id="test" v-model="type" />
  <div v-if="type === 'A'">The value you input is A</div>
  <div v-else-if="type === 'B'">The value you input is B</div>
  <div v-else-if="type === 'C'">The value you input is C</div>
  <div v-else>Not A/B/C</div>
  <h1 v-show="ok">Hello!</h1>
</template>
