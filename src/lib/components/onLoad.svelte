<script>
    import { fade } from 'svelte/transition';
    import { navigating } from '$app/stores';
    import { onMount } from 'svelte';
    import { quintIn } from 'svelte/easing';
  
    let animate = !$navigating;
    let loaded = false;
  
    onMount(() => loaded = true);
  </script>
  
  {#if animate}
    {#if loaded}
      <div transition:fade={{duration: 1000, easing: quintIn}} class="contents">
        <slot/>
      </div>
    {/if}
  {:else}
    <slot/>
  {/if}