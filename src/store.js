 import {writable} from "svelte/store";

 let myEmployees= {
    "data": [
      {
        "id": "1",
        "name": "John"
      },
      {
        "id": "2",
        "name": "Mike"
      },
      {
        "id": "3",
        "name": "Tom"
      }
    ]
  }


  export const employees=writable(myEmployees);