<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let store=[];
	
	const deleteHandler=(item)=>{
store.update(s=>{
s=s.filter(d=>d!=item)
return s;
})
	}
</script>

{#if $store.length}
<hr/>
{#each $store as menu}
<div class="flex">
	<p class="flex-1 bg-red-300 py-0">
		{menu[Object.keys(menu)[0]]}-{menu[Object.keys(menu)[1]]}
	</p>
	<box-icon size="sm" name='trash' on:click={()=>deleteHandler(menu)}></box-icon>
</div>
{/each}
{/if}