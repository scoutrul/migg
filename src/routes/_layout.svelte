<script>
import { onMount } from 'svelte';
import Nav from '../components/Nav.svelte';
import { auth, googleProvider } from '../../firebase';
import { authState } from 'rxfire/auth';
import Profile from '../components/blocks/Profile/Profile.svelte';
export let segment;

let user;
let unsubscribe;
onMount(async () => {
	let unsubscribe = await authState(auth).subscribe(u => user = u);
});

function login() {
	auth.signInWithPopup(googleProvider);
}
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>
{#if user}
    <Profile {...user} />
    <button on:click={ () => auth.signOut() }>Logout</button>
    <hr>
    u are logged in! mister!
{:else}
	<button on:click={login}>
		Signin with Google
	</button>
{/if}
<Profile/>
<main>
	<slot></slot>
</main>