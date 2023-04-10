<script>
    export let data;
    import Lenis from '@studio-freight/lenis'
	import { onMount } from 'svelte';
    import {animate, inView, stagger} from 'motion';
    let titles;

    onMount(async() => {
        const lenis = new Lenis(
        );
        function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
        })
        inView(titles, (e) => {
            titles = e.target;
            animate(e,{opacity:0},{duration: 1});
        })

</script>

<div class="wrap-xplore">
{#each data.gallery as gallery}
    <h1 bind:this={titles}>{gallery.title}</h1>
{/each}
</div>
<style>
    .wrap-xplore {
        width: 82%;
        position: absolute;
        right: 0;
        margin: auto;
        height: 100%;
        overflow-x: hidden;
        background-color: antiquewhite;
    }
    h1 {
        color: red;
        font-size: 500px;
        z-index: -1;
    }
</style>