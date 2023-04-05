<script>
    import '../app.css'
    import '@fontsource/manrope'
	import { slide } from 'svelte/transition';
	import User from '$lib/components/user.svelte';
    let monark = { monarkshow: false };
    export let data;
    function showMonark() {
        monark.monarkshow = !monark.monarkshow;
    }
</script>

<nav class="navi">
    <div class="top">
        <div class="three-canvas">
            <!-- <Canvas>
                <Threelogo/>
            </Canvas> -->
          <a href="/">  <img src="/MONARKLOGO.svg" alt="Monark-logo" width="160"></a>
        </div>
        {#if data.user}
        <div class="user-loggedIn">
            <User content="logged"/>
        </div>
        {:else}
        <div class="user-notLoggedIn">
            <User content="notLogged"/>
        </div>
        {/if}
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
        {#if monark.monarkshow}
        <div transition:slide="{{ duration:800 }}" class="monark">
            <img src="/MONARKLOGO.svg" alt="Monark-logo" width="160">
        </div>
        {/if}
        <p>Created by <a on:mouseenter|stopPropagation={showMonark} on:mouseleave|stopPropagation={showMonark} href="https://battogtokh.co">Battogtokh</a></p>
    </div>
</nav>
<slot/>
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
        width: 18%;
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
        height: 50%;
    }
    .middle a{
        color: whitesmoke;
        text-decoration: none;
        font-size: 1rem;
        font-weight: 500;
        text-transform: uppercase;
    }
    .bottom {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        width: 100%;
        flex-direction: column;
        gap: 0.5rem;
        position: relative;
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
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
        flex-direction: column;        
    }
    /* .three-canvas{
    } */
    .monark{
        position: absolute;
        left: 0;
        bottom: 1rem;
    }
</style>
