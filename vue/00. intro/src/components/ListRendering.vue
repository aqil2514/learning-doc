<script setup>
import { ref, reactive } from 'vue'
const items = ref([{ message: 'Foo' }, { message: 'Bar' }])

const parentMessage = ref('Parent')
const itemses = ref([{ message: 'Foo' }, { message: 'Bar' }])

const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})
</script>

<template>
  <fieldset class="code-container">
    <legend>V-For (item, i)</legend>
    <code>
      <div><strong>JS</strong></div>
      const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
      <div><strong>template</strong></div>
      &lt;li v-for="(item, i) in items" :key="i++"&gt; &lbrace;&lbrace; item.message
      &rbrace;&rbrace; &lt;/li&gt;
    </code>
  </fieldset>
  <h3>Result</h3>
  <li v-for="(item, i) in items" :key="i++">
    {{ item.message }}
  </li>

  <fieldset class="code-container">
    <legend>V-For (render Index)</legend>
    <code>
      <div><strong>JS</strong></div>
      const parentMessage = ref('Parent') <br />
      const itemses = ref([{ message: 'Foo' }, { message: 'Bar' }])

      <div><strong>template</strong></div>
      &lt;li v-for="(item, index) in itemses" :key="index++"&gt; &lbrace;&lbrace; parentMessage
      &rbrace;&rbrace; - &lbrace;&lbrace; index &rbrace;&rbrace; - &lbrace;&lbrace; item.message
      &rbrace;&rbrace; &lt;/li&gt;
    </code>
  </fieldset>

  <h3>Result :</h3>
  <li v-for="(item, index) in itemses" :key="index++">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>

  <fieldset class="code-container">
    <legend>V-For (value, key, i)</legend>
    <code>
      <div><strong>JS</strong></div>
      const items = ref([{ message: 'Foo' }, { message: 'Bar' }])

      <div><strong>template</strong></div>
      &lt;li v-for="(value, key, i) in myObject" :key="i++"&gt;&lbrace;&lbrace; key &rbrace;&rbrace;
      = &lbrace;&lbrace; value &rbrace;&rbrace;&lt;/li&gt;
    </code>
  </fieldset>

  <h3>Result :</h3>

  <li v-for="(value, key, i) in myObject" :key="i++">{{ key }} = {{ value }}</li>

  <fieldset class="code-container">
    <legend>V-For with a Range</legend>
    <code>
      <div><strong>JS</strong></div>
      &lt;span v-for="(n, i) in 10" :key="i++"&gt;&lbrace;&lbrace; n &rbrace;&rbrace;&lt;/span&gt;
    </code>
  </fieldset>

  <h3>Result :</h3>
  <span v-for="(n, i) in 10" :key="i++">{{ n }}</span>

  <fieldset class="code-container">
    <legend>V-For on &lt;template&gt;</legend>
    <code>
      <div><strong>Template</strong></div>
      &lt;template v-for="item in itemses"&gt; <br />&lt;li&gt;&lbrace;&lbrace; item.message
      &rbrace;&rbrace;&lt;/li&gt; <br />&lt;li class="divider"
      role="presentation"&gt;Test&lt;/li&gt;<br />
      &lt;/template&gt;
    </code>
  </fieldset>

  <h3>Result :</h3>

  <template v-for="item in itemses">
    <li>{{ item.message }}</li>
    <li class="divider" role="presentation">Test</li>
  </template>
</template>

<style scoped>
.code-container {
  border: 2px solid black;
  border-radius: 4px;
  padding: 4px;
}
</style>
