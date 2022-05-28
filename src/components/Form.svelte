<script>
import {employees} from "../store";
import {navigate} from "svelte-navigator";

let id="";

let name="";


function addEmployee(){
	console.log("id:",id);
	console.log("name:",name);

	let new_employee={
		"id":id,
		"name":name
	}

	$employees.data=[...$employees.data, {...new_employee}];

  id="";
  name="";

	navigate("/employees");

  }


</script>

<div class="form-control w-full max-w-xs">
    <h2>Add Employee</h2>
    <input bind:value="{id}"  name="id" type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
    <textarea bind:value="{name}" name="name" class="textarea textarea-bordered" placeholder="Bio"></textarea>
    <button on:click="{addEmployee}" class="btn btn-primary">Submit</button>
</div>