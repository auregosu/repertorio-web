<script lang="ts">
	import { enhance } from '$app/forms'

	const { user }: { user?: { username: string } } = $props()

	let showLogin = $state(false)
</script>

<nav>
	<a href="/">Repertorio</a>
	<a href="/browse">Browse</a>
	{#if user}
		<a href="/me">{user.username}</a>
	{:else}
		{#if showLogin}
			<form method="POST" action="/login" use:enhance>
				<input name="username" placeholder="Username" />
				<input name="password" type="password" placeholder="Password" />
				<button>Log in</button>
			</form>
		{:else}
			<button onclick={() => (showLogin = true)}>Login</button>
		{/if}

		<a href="/signup">Signup</a>
	{/if}
</nav>