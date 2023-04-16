<script>
    export let data;
</script>

<div>
    <h1>PRO-ONLY AREA</h1>
    {#if data.user}
    <p>{data.user.name}</p>
    {/if}
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