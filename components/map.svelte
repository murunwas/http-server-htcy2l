<script>
	export let store=[];
	export let name=""
	export let delimiter=":"
</script>

{#if $store.length}
{name} {$store.map(obj=>`${obj[Object.keys(obj)[0]]}${delimiter}${obj[Object.keys(obj)[1]]}`).join(` ${name} `)}
{/if}