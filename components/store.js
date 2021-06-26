import { writable,get } from 'svelte/store';

export const portStore = writable([]);
export const envStore = writable([]);
export const volumeStore = writable([]);


export const detailStore = writable({
name:"",
container:"",
selected:"docker",
detached:false,
sudo:false,
remove:false,
interactive:false
});

export function onSave(){
  let obj={
     ...get(detailStore),
		ports:get(portStore),
		volumes: get(volumeStore),
    env: get(envStore),
	}
	console.log(JSON.stringify(obj,null,2))
	}