<script>
    export let data;
    const alertIt = () => {
        alert('Hello');
    }

</script>

<div>
    <h1>HELLOOO</h1>
    {#if data.user}
    <p>{data.user.name}</p>
    {/if}
    <button on:click={alertIt}>ge</button>
</div>


<style>
    div {
        width: 82%;
        position: absolute;
        right: 0;
        margin: auto;
        background-color: antiquewhite;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>