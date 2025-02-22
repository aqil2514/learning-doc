<script setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps({
  name: String,
  label: String,
  modelValue: String
})

const emit = defineEmits()
</script>

<template>
  <label :for="name">
    <input
      type="radio"
      :name="name"
      :value="name"
      :id="name"
      :checked="modelValue === name"
      @change="$emit('update:modelValue', name)"
    />
    {{ label }}
  </label>
</template>
