<script>
	import FadeComp from "./Fade.svelte"
	import Form from "./form.svelte"
	import Title from "./Title.svelte"
	import List from "./List.svelte"
	import {portStore} from "./store"
	let form={external:"",internal:""}
	const addHandler=({detail})=>portStore.update(s=>([ ...s,detail]))
</script>
<FadeComp>
<Title>
	Add Ports
</Title>
<Form {form} on:add={addHandler}/>
<List store={portStore}/>
</FadeComp>