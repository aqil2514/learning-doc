<script setup>
import TextInterpolation from './components/TextInterpolation.vue'
import AttributeBindings from './components/AttributeBindings.vue'
import ReactivityFundamentals from './components/ReactivityFundamentals.vue'
import ComputedProperty from './components/ComputedProperty.vue'
import ClassAndStyleBinding from './components/ClassAndStyleBinding.vue'
import ConditionalRendering from './components/ConditionalRendering.vue'
import ListRendering from './components/ListRendering.vue'
import Radio from './components/Radio.vue'
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <header>
    <h1 class="title">Testing App</h1>
    <div class="radio-container">
      <Radio name="text-interpolation" v-model="value" label="Text Interpolation" />
      <Radio name="attribute-binding" v-model="value" label="Attribute Binding" />
      <Radio name="reactivity-fundamentals" v-model="value" label="Reactivity Fundamentals" />
      <Radio name="computed-property" v-model="value" label="Computed Property" />
      <Radio name="class-and-style-binding" v-model="value" label="Class and Style Binding" />
      <Radio name="conditional-rendering" v-model="value" label="Conditional Rendering" />
      <Radio name="list-rendering" v-model="value" label="List Rendering" />
    </div>
  </header>
  <main>
    <div class="container-main">
      <h2 class="sub-title" v-if="value">{{ value.split('-').join(' ') }}</h2>
      <h2 class="sub-title" v-else>Pilih salah satu</h2>
      <TextInterpolation v-if="value === 'text-interpolation'" />
      <AttributeBindings v-else-if="value === 'attribute-binding'" />
      <ReactivityFundamentals v-else-if="value === 'reactivity-fundamentals'" />
      <ComputedProperty v-else-if="value === 'computed-property'" />
      <ClassAndStyleBinding v-else-if="value === 'class-and-style-binding'" />
      <ConditionalRendering v-else-if="value === 'conditional-rendering'" />
      <ListRendering v-else-if="value === 'list-rendering'" />
    </div>
  </main>
</template>

<style scoped>
.title {
  text-decoration: underline;
  text-align: center;
  margin: 1rem auto;
}
.sub-title {
  text-transform: capitalize;
  text-align: center;
}

.radio-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  text-align: center;
}

.container-main {
  border: 2px solid black;
  border-radius: 1rem;
  width: 75%;
  padding: 1rem;
  margin: 1rem auto;
}
</style>
