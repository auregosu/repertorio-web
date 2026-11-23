<script lang="ts">
    const { data } = $props();
</script>
    
<h1> Works </h1>
{#if data.works && data.works.length > 0}
    <ul>
        {#each data.works as item}
            <li>{item.title} by {item.composer}</li>
        {/each}
    </ul>
{:else}
    <p> {data.error} </p>
    <p> Either there are no works or something went very wrong. </p>
{/if}