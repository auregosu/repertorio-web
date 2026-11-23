<script lang="ts">
	let { form } = $props()
</script>

<h1>Sign up!</h1>

{#if form?.error}
	<p>{form.error}</p>
{/if}

<form method="POST">
	<label>
		Email
		<input name="email" type="email" required>
	</label>
	<label>
		Username
		<input name="username" required>
	</label>
	<label>
		Password
		<input name="password" type="password" minlength="8" required>
	</label>
	<button>Sign up</button>
</form>
