<script>
	import { fade } from 'svelte/transition';
	import DataComp from "./data.svelte"
	import EnvComp from "./env.svelte"
	import PortComp from "./ports.svelte"
	import VolumeComp from "./volume.svelte"
	import DisplayComp from "./display.svelte"

	//
	import {onSave} from "./store"
	
	let menus = [{name:"Details",c:DataComp},
							 {name:"Ports",c:PortComp},
							 {name:"Environment",c:EnvComp},
							 {name:"Volumes",c:VolumeComp},
							]
	
		let selected=menus[0]
	
	function onChange(event) {
		selected = event.currentTarget.value;
	}
</script>
<svelte:head>
	<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
	<script src="https://unpkg.com/boxicons@latest/dist/boxicons.js"></script>
</svelte:head>
<div class="box">
	<div class="menu pr-2">
		{#each menus as menu}
		<label class:selected={selected===menu} class="text-sm text-gray-600 border-b">
<input class="radios"  bind:group={selected} type="radio" name="amount" value={menu} /> {menu.name}
</label>
	{/each}
</div>
<div class="py-1 px-2 w-60 shadow-md">
	<svelte:component this={selected.c} />
	</div>
	<div class="px-2">
		<DisplayComp/>
    
		<button on:click={onSave} class="w-full">
			save
		</button>
	</div>
</div>







<!-- <label>
	<input checked={selected===10} on:change={onChange} type="radio" name="amount" value="10" /> 10
</label>
<label>
	<input checked={selected===20} on:change={onChange} type="radio" name="amount" value="20" /> 20
</label>
<label>
	<input checked={selected===30} on:change={onChange} type="radio" name="amount" value="30" /> 30
</label> -->
<style>
	.box{
display:flex;
	}
	.radios{
		display:none;
}
	.menu{
display:flex;
		 flex-direction:column
	}
	label{
  padding:4px;
		cursor:pointer;
	}
	.selected{
   color:red;
	}
</style>

<div>

<!-- 	<label class:selected={selected===10}>
	<input  bind:group={selected} type="radio" name="amount" value="10" /> 10
</label>
<label class:selected={selected==="20"}>
	<input  bind:group={selected} type="radio" name="amount" value="20" /> 20
</label>
<label class:selected={selected===30}>
	<input  bind:group={selected} type="radio" name="amount" value="30" /> 30
</label> -->
</div>



