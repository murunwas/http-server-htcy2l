<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
export let form={}
const addHandler=()=>{
  dispatch("add",{...form})
	Object.keys(form).forEach(key=>{
  form[key]=""
	})
}
</script>
{#each Object.keys(form) as key}
<input bind:value={form[key]} class="w-full mb-1"/>
{/each}
<button on:click={addHandler} class="w-full mb-1">
	Add
</button>