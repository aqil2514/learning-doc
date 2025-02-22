<script setup>
const id = '03'
let isDisabled = true
const seen = true

function toggle() {
  alert('unsetting')
}

const h1Attribute = {
  id: 'h1-boolean',
  style: 'text-align:center;color:red'
}

const eventName = 'click'

const dynamicAttr = 'href'
const url = '/'
</script>

<template>
  <p :id="id">Oke</p>
  <button @[eventName]="toggle">{{ !isDisabled ? 'NonActive Button' : 'Activate Button' }}</button>
  <h1 v-bind="h1Attribute">Boolean Atribute</h1>
  <button :disabled="isDisabled">Button</button>

  <h1>Directives</h1>
  <p v-if="seen">Now you see me</p>
  <p v-else>Now you can't see me</p>
  <a :[dynamicAttr]="url">Test</a>
</template>
