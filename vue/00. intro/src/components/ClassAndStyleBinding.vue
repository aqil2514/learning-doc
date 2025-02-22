<script setup>
import { computed, reactive, ref } from 'vue'
const isActive = ref(true)
const hasError = ref(null)

const objClass = reactive({
  active: true,
  'text-danger': false
})

const classObject = computed(() => ({
  active: isActive.value && !hasError.value,
  'text-danger': hasError.value && hasError.value.type === 'fatal'
}))

const divStyle = reactive({
  'background-color': '#f0f0f0',
  padding: '20px',
  border: '1px solid #ccc',
  'border-radius': '5px',
  'text-align': 'center',
  'font-size': '18px',
  color: '#333'
})
</script>

<template>
  <div class="static" :class="{ active: isActive, 'text-danger': hasError }"></div>
  <!-- Output
  <div class="static active"></div>
  -->
  <div :class="objClass"></div>
  <div :style="divStyle"></div>
</template>
