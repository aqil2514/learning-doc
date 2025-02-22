<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{
  deleteMode: boolean
  editMode: boolean
}>()

const edit = ref('')

function deleteAction(e: string) {
  const allow = confirm(`Ingin hapus "${e}"?`)
  if (!allow) {
    return
  }
  const storage: string[] = JSON.parse(localStorage.getItem('list') as string)
  const filtered = storage.filter((list: string) => list !== e)
  localStorage.setItem('list', JSON.stringify(filtered))
  location.reload()
}

function editAction(e: any, list: string) {
  if (e.key === 'Enter') {
    const allow = confirm(`Yakin ubah dari "${list}" menjadi "${e.target.value}"?`)
    if (!allow) {
      return
    }
    const storage: string[] = JSON.parse(localStorage.getItem('list') as string)

    const selected = storage.findIndex((value) => value === list)
    if (selected !== -1) {
      storage[selected] = e.target.value
    }
    localStorage.setItem('list', JSON.stringify(storage))
    location.reload()
  }
}

const listes = ref(JSON.parse(localStorage.getItem('list') as string) || [])
const divClass = ref('list-container')
</script>

<template>
  <div v-if="listes.length === 0" :class="divClass">To Do List masih kosong</div>
  <div v-else :class="divClass">
    <ul v-if="props.deleteMode">
      <li v-for="(list, i) in listes" :key="i">
        {{ list }} <span class="icon delete-icon" @click="() => deleteAction(list)">X</span>
      </li>
    </ul>
    <ul v-else-if="props.editMode">
      <li v-for="(list, i) in listes" :key="i">
        <span v-if="edit === list">
          <input
            type="text"
            name="text"
            id="text"
            :placeholder="edit"
            autofocus
            @keydown="(e: KeyboardEvent) => editAction(e, list)"
          />
          <span class="icon edit-icon" @click="edit = ''">C</span>
        </span>
        <span v-else> {{ list }} <span class="icon edit-icon" @click="edit = list">E</span> </span>
      </li>
    </ul>
    <ul v-else>
      <li v-for="(list, i) in listes" :key="i">
        {{ list }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.list-container {
  padding: 1rem 3rem;
  font-size: 1.2rem;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.list-container ul li {
  list-style: none;
  margin: 0.5rem 0;
}

.list-container ul li::before {
  content: '>>';
  font-size: 0.7rem;
  font-weight: 900;
  margin: 0 0.2rem;
}

.icon {
  border-radius: 50%;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
}

.delete-icon {
  background-color: red;
}

.edit-icon {
  background-color: orange;
}
</style>
