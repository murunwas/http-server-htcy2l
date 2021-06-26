<script>
	import MapComp from "./map.svelte"
		import {volumeStore,envStore,detailStore,portStore} from "./store"
</script>

{#if $detailStore.sudo}sudo {/if}
{$detailStore.selected} run
{#if $detailStore.remove} --rm {/if}
{#if $detailStore.detached}-d{/if}
{#if $detailStore.interactive}-it{/if}
 
<MapComp store={portStore} name="-p"/>
<MapComp store={volumeStore} name="-v"/>
<MapComp store={envStore} name="-e" delimiter="="/>
{#if $detailStore.name}
--name {$detailStore.name}
{/if}
{$detailStore.container}