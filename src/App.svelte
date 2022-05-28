<script>

	import {Router,Route} from "svelte-navigator";

	import Nav from "./components/Nav.svelte";
	import Employee from "./components/Employee.svelte";
	import Form from "./components/Form.svelte";

	import Dummy from "./components/Dummy.svelte";

	import {employees} from "./store";
import { tick } from "svelte";

  
	let count=1;
	$:new_count=count*2;

	async function increment(){
		count++;
		await tick();
		console.log("count:",count);
		console.log("new_count:",new_count);
	}

	

	let active=1;




	const messages=["msg1","msg2","msg3"];

	const msgPromise=new Promise((resolve)=>{
		setTimeout(() => {
			resolve(messages)
		}, 1000);
	})
	
</script>

<Router>

	<main>

		<Nav/>

		<Route>
			<Form/>
		</Route>

		<Route path="employees">
			<div>
				{#each $employees.data.reverse() as employee}

					<Employee {...employee} />

				{/each}
			</div>
		</Route>

		<Dummy><p>Hello!</p></Dummy>

		{#await msgPromise}
			<p>Loading messages...</p>
		{:then msgs} 
			<p>{msgs}</p>
		{:catch error}
			<p>{error}</p>
		{/await}

		{count}
		{new_count}

		<button on:click="{increment}" class="btn btn-primary">Click Me!</button>
		

		<div class="btn-group">
			<button on:click="{()=>active=1}" class="btn {active===1? "btn-active":""}">First</button>
			<button on:click="{()=>active=2}" class="btn {active===2? "btn-active":""}">Second</button>
			<button on:click="{()=>active=3}" class="btn {active===3? "btn-active":""}">Third</button>
		</div>

		{#if count<5 }

		<div class="alert alert-success">
			<div>
			<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
			<span>Count doubled!</span>
			</div>
		</div>

		{:else}

		<div class="alert alert-error">
			<div>
			<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
			<span>Oops</span>
			</div>
		</div>
		{/if}
		
	</main>
</Router>

<style>
	
</style>