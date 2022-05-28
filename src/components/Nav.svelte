<script>

import {Link,useLocation} from "svelte-navigator";

const location=useLocation();

</script>

<div class="flex space-x-4">
    <Link class="{$location.pathname ==='/' ? 'underline':""}" to="/">Add Employee</Link>
    <Link class="{$location.pathname ==='/employees' ? 'underline':""}" to="/employees">Employees</Link>
</div>