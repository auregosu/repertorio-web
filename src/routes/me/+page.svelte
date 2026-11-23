<script lang="ts">
    const { data } = $props();
</script>

{#if data.user}
    <h1> Welcome {data.user.username}!</h1>

    <h2> Create a new list! </h2>
    <form method="POST">
        <input type="text" name="listName"  placeholder="List name" required/>
        <button type="submit">Create List</button>
    </form>

    <h2> Your lists sir... </h2>
    {#if data.lists.length > 0}
        <ul>
            {#each data.lists as item}
                <li>{item.name}</li>
            {/each}
        </ul>
    {:else}
        <p> You have no lists yet! </p>
    {/if}
{:else}
    <h1> You're not logged in! </h1>
{/if}
