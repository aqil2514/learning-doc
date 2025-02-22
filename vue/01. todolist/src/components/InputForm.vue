<script setup lang="ts">
import { ref, type Ref } from 'vue'
const value: Ref<string> = ref('')

const listes: string[] = []
function submitHandler() {
  const tdlValue = value.value
  if (!localStorage.getItem('list')) {
    listes.push(tdlValue)
    localStorage.setItem('list', JSON.stringify(listes))
    location.reload()
    return
  }
  const storage = localStorage.getItem('list')
  if (storage) {
    const storedList = JSON.parse(storage)
    storedList.push(tdlValue)
    localStorage.setItem('list', JSON.stringify(storedList))
  }

  value.value = ''
  location.reload()
}
</script>

<template>
  <form @submit.prevent="submitHandler">
    <label for="tdl-list">
      <input
        autofocus
        type="text"
        name="tdl-list"
        id="tdl-list"
        v-model="value"
        placeholder="Masukkan ToDoList..."
      />
    </label>
  </form>
</template>

<style scoped>
form {
  padding: 0 2rem;
}
input {
  display: block;
  margin: 1rem auto;
  height: 2rem;
  text-align: center;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 2px solid black;
  font-size: 1.5rem;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  width: 100%;
  color: #52a30f;
}

input::placeholder {
  color: rgba(0, 0, 0, 0.3);
}

input:focus-visible {
  outline: none;
}
</style>
