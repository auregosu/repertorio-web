<h1>Welcome to SvelteKit</h1>

<script lang="ts">
	const { data } = $props()
</script>

<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<p> Is the thing server running? {data.api}</p>
