<script>
    export let data;
    console.log(data.gallery.title);
</script>

{#each data.gallery as gallery}
    <h1>{gallery.title}</h1>
{/each}

<style>
    h1 {
        color: red;
        font-size: 500px;
        position: relative;
        right: 0;
    }
</style>