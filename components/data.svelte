<script>
	import {detailStore} from "./store"
	import Title from "./Title.svelte"
	let tools=["docker","podman"]
	
	$:if($detailStore.selected=="docker"){
    $detailStore.sudo =false
	}
</script>
<Title>
	Add details
</Title>
<div class="flex">
		{#each tools as menu}
		<label class="p-1 ">
<input   bind:group={$detailStore.selected} type="radio" name="amount" value={menu} /> {menu}
</label>
{/each}
</div>

<input 
			 placeholder="container name"
			 bind:value={$detailStore.container} 
			 class="w-full mb-1"/>
<input 
			 placeholder="name"
			 bind:value={$detailStore.name} 
			 class="w-full mb-1"/>

<label>
	<input type=checkbox bind:checked={$detailStore.detached}>
	Daemon 
</label>
<label>
	<input type=checkbox bind:checked={$detailStore.interactive}>
	Interactive 
</label>
<label>
	<input type=checkbox bind:checked={$detailStore.remove}>
	remove
</label>
{#if $detailStore.selected=="podman"}
<label>
	<input type=checkbox bind:checked={$detailStore.sudo}>
	sudo
</label>
{/if}