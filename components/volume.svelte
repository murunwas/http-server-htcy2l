<script>
		import FadeComp from "./Fade.svelte"
	import Form from "./form.svelte"
	import Title from "./Title.svelte"
	import List from "./List.svelte"
	import {volumeStore} from "./store"
	let form={
external:"",internal:""
	}
const addHandler=({detail})=>volumeStore.update(s=>([ ...s,detail]))
</script>
<FadeComp>
	<Title>
	Add Volumes
</Title>
<Form {form} on:add={addHandler}/>
<List store={volumeStore}/>
</FadeComp>