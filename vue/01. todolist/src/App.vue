<script setup lang="ts">
import NavigationBar from './components/NavigationBar.vue'
import InputForm from './components/InputForm.vue'
import ToDoList from './components/ToDoList.vue'
import ButtonNav from './components/ButtonNav.vue'
import { ref } from 'vue'

const deleteMode = ref(false)
const editMode = ref(false)

function deleteModeSetting() {
  const storage = JSON.parse(localStorage.getItem('list') as string)
  if (storage.length === 0) {
    alert('Belum ada list')
    return
  }
  deleteMode.value = !deleteMode.value
  editMode.value = false
}

function editModeSetting() {
  const storage = JSON.parse(localStorage.getItem('list') as string)
  if (storage.length === 0) {
    alert('Belum ada list')
    return
  }
  deleteMode.value = false
  editMode.value = !editMode.value
}
</script>

<template>
  <NavigationBar />
  <div class="container-tdl">
    <InputForm />
    <ButtonNav
      @delete-mode-setting="deleteModeSetting"
      @edit-mode-setting="editModeSetting"
      :deleteMode="deleteMode"
      :editMode="editMode"
    />
    <ToDoList :deleteMode="deleteMode" :editMode="editMode" />
  </div>
</template>

<style scoped>
.container-tdl {
  border: 2px solid black;
  width: 50%;
  border-radius: 1rem;
  max-height: 400px;
  margin: 2rem auto;
  overflow-y: scroll;
  box-shadow: 5px 5px rgba(0, 0, 0, 0.3);
}

.container-tdl::-webkit-scrollbar {
  display: none;
}
</style>
