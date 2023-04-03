<script>
    import {animate} from 'motion';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import User from './user.svelte';

    onMount(() => {
        animate('.left',{opacity: [0.2, 1], y: [20,0]},{duration: 0.8, easing: 'ease-in-out'});
    })
</script>

<nav transition:slide>
    <div class="top">
        <User/>
    </div>
    <div class="middle">
        <div class="home">
            <a href="/">Нүүр</a>
        </div>
        <div class="explore">
            <a href="/explore">Үзэх</a>
        </div>
        <div class="learn">
            <a href="/learn">Сургалт</a>
            <span class="beta">ALPHA</span>
        </div>
    </div>
    <div class="bottom">
        <p>Created by <a href="https://battogtokh.co">Battogtokh</a></p>
    </div>
</nav>
<style>
    .beta {
        background-color: #181818;
        color: whitesmoke;
        font-size: 0.8rem;
        padding: 0.2rem 0.5rem;
        border-radius: 20px;   
        border: 1px solid whitesmoke;
        margin-left: 0.5rem;
    }
    nav{
        background-color: #181818;
        padding: 2rem 2rem;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        box-shadow: 0 0 0.5rem rgba(0,0,0,0.1);
        font-family: 'manrope';
        position: fixed;
        width: 15%;
        height: 100%;
        top: 0;
    }
    .middle {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        width: 100%;
        flex-direction: column;
        gap: 0.8rem;
    }
    .middle a{
        color: whitesmoke;
        text-decoration: none;
        font-size: 1rem;
        font-weight: 500;
        text-transform: uppercase;
    }
    .bottom p {
        color: whitesmoke;
        font-size: 0.8rem;
        font-weight: 500;
        text-transform: uppercase;
    }
    .bottom a {
        color: whitesmoke;
        text-decoration: underline;
        font-size: 0.8rem;
        font-weight: 500;
        text-transform: uppercase;
    }
    .top {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        flex-direction: column;
    }
</style>