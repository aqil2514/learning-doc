<script>
	// @ts-ignore
	const todos = $state([]);

	function showTasks() {
		const localStorageData = localStorage.getItem('todolist-data');

		if (!localStorageData) return console.log('Belum ada data yang ditambahkan');
		const data = JSON.parse(localStorageData);

		console.log(data);
	}

	// @ts-ignore
	function addTask(e) {
		if (e.key === 'Enter') {
			const target = e.target;
			const value = target.value;

			todos.push({ task: value });
			console.log(`Tugas berhasil ditambah : ${value}`);
			target.value = '';
		}
	}

	function addToLocalStorage() {
		const data = $state.snapshot(todos);
		const stringData = JSON.stringify(data);

		localStorage.setItem('todolist-data', stringData);

		console.log(`Tugas berhasil ditambah di Local Storage`);
	}

    function removeAllData(){
        console.log("Data berhasil dihapus")
        return localStorage.clear()
    }

</script>

<p>Open your console.log</p>
<p>I will not show it to this ui for first time learning</p>

<input
	onkeydown={(e) => addTask(e)}
	type="text"
	name="task"
	id="task"
	class="m-4 block bg-amber-600 px-4 text-white"
/>

<button onclick={showTasks}> Show Tasks </button>
<button onclick={addToLocalStorage}> Simpan ke Local Storage </button>
<button onclick={removeAllData}> Hapus Semua Data </button>

<style>
	button {
		background-color: aquamarine;
		padding: 1rem;
		margin: 1rem;
	}
</style>
