<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{
  deleteMode: boolean
  editMode: boolean
}>()
const deleteClicked = ref(false)
const editClicked = ref(false)
const storage = JSON.parse(localStorage.getItem('list') as string)

function deleteAll() {
  const allow = confirm('Ini akan menghapus semua list, yakin?')
  if (!allow) {
    return
  }
  localStorage.clear()
  location.reload()
}
</script>

<template>
  <button
    @click="
      $emit('deleteModeSetting'),
        storage.length === 0 ? (deleteClicked = deleteClicked) : (deleteClicked = !deleteClicked),
        storage.length === 0 ? (editClicked = editClicked) : (editClicked = false)
    "
    class="button"
    :class="{ 'clicked-button': deleteClicked }"
  >
    {{ props.deleteMode ? 'Batal' : 'Hapus' }}
  </button>
  <button
    @click="
      $emit('editModeSetting'),
        storage.length === 0 ? (editClicked = editClicked) : (editClicked = !editClicked),
        storage.length === 0 ? (deleteClicked = deleteClicked) : (deleteClicked = false)
    "
    class="button"
    :class="{ 'clicked-button': editClicked }"
  >
    {{ props.editMode ? 'Batal' : 'Edit' }}
  </button>
  <button class="button" @click="deleteAll">Hapus semua</button>
</template>

<style scoped>
.button {
  margin: 0.2rem 1rem;
  padding: 0.2rem 1rem;
  border-radius: 1rem;
  border: 1px solid black;
  box-shadow: 2px 3px rgba(0, 0, 0, 0.8);
  transition: all 0.2s;
  cursor: pointer;
}

.button:hover {
  transform: scale(1.1);
}

.clicked-button {
  box-shadow: -2px -3px rgba(0, 0, 0, 0.8);
}
</style>
