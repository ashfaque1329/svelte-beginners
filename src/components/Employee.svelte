<script>
import { onDestroy, onMount } from "svelte";

import {employees} from "../store";


export let id;
export let name;



function removeEmployee(){
	  console.log("id:",id);
	  $employees.data=$employees.data.filter((employee)=>employee.id!==id);
  }



let timeOnScreen=0;
let timeInterval=null;


onMount(async ()=>{
  timeInterval=setInterval(() => {
    ++timeOnScreen;
  }, 1000);
});

onDestroy(async ()=>{
  clearInterval(timeInterval);
});


</script>

<div class="card bordered w-96 bg-primary text-primary-content">
    <div on:click="{removeEmployee}" class="absolute right-0 pr-2 text-error text-2xl">x</div>
    <div class="absolute left-0 pl-2 text-white text-2xl">{timeOnScreen}</div>
    <div class="card-body">
      <h2 class="card-title">Employee</h2>
      <p>{id}</p>
      <p>{name}</p>
    </div>
  </div>