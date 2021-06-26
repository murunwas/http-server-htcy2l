<script>
	import FadeComp from "./Fade.svelte"
	import Form from "./form.svelte"
	import Title from "./Title.svelte"
	import List from "./List.svelte"
	import {envStore} from "./store"
	let form={
key:"",value:""
	}
const addHandler=({detail})=>envStore.update(s=>([ ...s,detail]))
</script>
<FadeComp>
	<Title>
	Add Environment
</Title>
<Form {form} on:add={addHandler}/>
<List store={envStore}/>
</FadeComp>
