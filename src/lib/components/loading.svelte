<script>
    import { slide } from "svelte/transition";
    import { onMount } from "svelte";

    let loadingText = "Хуудас уншиж байна, та тyр хyлээгээрэй...😏";

    onMount(() => {
        setTimeout(() => {
            loadingText = 'Өөөө.. За за refresh хийе...😭';
        }, 10000);
        setInterval(() => {
            loadingText = 'F5 шд...😬';
        }, 15000);
        setTimeout(() => {  
            loadingText = 'BRUHHHH...💀';
        }, 20000);
    });
</script>
<section class="loadiing">
<div transition:slide="{{ duration: 250 }}" class="loading">
    <div class="textz">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><circle cx="4" cy="12" r="3" fill="currentColor"><animate id="svgSpinners3DotsFade0" fill="freeze" attributeName="opacity" begin="0;svgSpinners3DotsFade1.end-0.25s" dur="0.75s" values="1;.2"></animate></circle><circle cx="12" cy="12" r="3" fill="currentColor" opacity=".4"><animate fill="freeze" attributeName="opacity" begin="svgSpinners3DotsFade0.begin+0.15s" dur="0.75s" values="1;.2"></animate></circle><circle cx="20" cy="12" r="3" fill="currentColor" opacity=".3"><animate id="svgSpinners3DotsFade1" fill="freeze" attributeName="opacity" begin="svgSpinners3DotsFade0.begin+0.3s" dur="0.75s" values="1;.2"></animate></circle></svg>
    <p>{loadingText}</p>
    </div>
</div>
</section>

<style>
    .loadiing {
        width: 82%;
        right: 0;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        backdrop-filter: blur(5px);
        position: absolute;
        z-index: 1000;
    }
    .loading {
        z-index: 100;
        background-color: #181818;
        padding: 1rem 1.5rem;
        border-radius: 1rem;
        align-self: center;
    }
    .textz {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        color: whitesmoke;
    }

    .textz p {
        font-family: 'Neutral-Bold', sans-serif;
        font-size: 1.2rem;
    }
</style>