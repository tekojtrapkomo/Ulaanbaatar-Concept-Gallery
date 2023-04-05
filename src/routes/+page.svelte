<script>
    import {animate} from 'motion';
    import { onMount } from 'svelte';
    import Lenis from '@studio-freight/lenis';
    let visible = false;
    export let data;
    import { imgURLONE } from '$lib/setting';
	import Footer from '../lib/components/footer.svelte';
	import { slide } from 'svelte/transition';
    onMount(() => {
        
    const lenis = new Lenis()
    lenis.on('scroll', (e) => {
    // console.log(e)
    })
    function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
        visible = true;
        animate('.card-1',{opacity: [0, 1], x: [10,0]},{duration: 0.8, easing: 'ease-in-out', allowWebkitAcceleration: true});
        animate('.card-2',{opacity: [0, 1], x: [10,0]},{duration: 0.8, easing: 'ease-in-out', delay: 0.2, allowWebkitAcceleration: true});
        animate('.card-3',{opacity: [0, 1], x: [10,0]},{duration: 0.8, easing: 'ease-in-out', delay: 0.2, allowWebkitAcceleration: true});
        animate('.card-4',{opacity: [0, 1], x: [10,0]},{duration: 0.8, easing: 'ease-in-out', delay: 0.3, allowWebkitAcceleration: true});
        animate('.card-5',{opacity: [0, 1], x: [10,0]},{duration: 0.8, easing: 'ease-in-out', delay: 0.4, allowWebkitAcceleration: true});
        animate('.card-6',{opacity: [0, 1], x: [10,0]},{duration: 0.8, easing: 'ease-in-out', delay: 0.4, allowWebkitAcceleration: true});
        animate('.card-7',{opacity: [0, 1], x: [10,0]},{duration: 0.8, easing: 'ease-in-out', delay: 0.6, allowWebkitAcceleration: true});
        animate('.lorem',{opacity: [0, 1], y: [10,0]},{duration: 1.2, easing: 'ease-in-out', delay: 0.4, allowWebkitAcceleration: true});
        animate('.odk',{transform: "rotate(360deg)"},{duration: 5, repeat: Infinity, allowWebkitAcceleration: true});
    });
</script>

<section transition:slide class="home-wrapper" style="visibility: {visible ? 'visible' : 'hidden'};">
    {#if data.user}
    <div class="card-7">
        <div class="card-7-text">
            <h1>Сайн байна уу?&nbsp;{data.user.username}</h1>
        </div>
    </div>
{/if}
    <div class="card-1">
        <div class="card-1-text">
            <h1>X-PLORE</h1>
            <p>Энэхүү сайт нь монгол хэлний сургалтын төвтэй холбоотой боломжийг олгохын тулд бүрдсэн болно.</p>
        </div>
    </div>
    <div class="card-2-wrap">
        <div class="card-2">
            <div class="card-2-text">
                <h1>ГРАФИК ДИЗАЙН СУДЛАХ</h1>
                <p>Энэхүү сайт нь монгол хэлний сургалтын төвтэй холбоотой боломжийг олгохын тулд бүрдсэн болно.</p>
            </div>
        </div>
        <div class="card-3" style="background: url({imgURLONE(data.topic[0]?.collectionId, data.topic[0]?.id, data.topic[0]?.bg)});">
            <div class="card-3-text">
                <div class="odk">
                    <img src="/odk.svg" alt="star67" width="40px"/>
                </div>
                <p>ЭНЭ 7 ХОНОГИЙН СЭДЭВ —</p>
                <a href="/">{data.topic[0].topicshow}</a>
            </div>
        </div>
    </div>
    <div class="card-4-wrap">
        <div class="card-4">
            <div class="card-4-text">
                <h1>УЛААНБААТАР КОНЦЕПТ ҮЗЭСГЭЛЭН</h1>
                <p>Бидний тухай</p>
            </div>
        </div>
        <div class="card-5">
            <div class="card-5-text">
                <h1>ХАМТРАН АЖИЛЛАХ</h1>
                <p>Ажиллах хүсэлтээ ярилцая</p>
            </div>
        </div>
        <div class="card-6">
            <div class="card-6-text">
                <a href="/auth">ЭНД ЭХЭЛ!</a>
            </div>
        </div>
    </div>

    <Footer/>
</section>

<style>
    .home-wrapper {
        width: 82%;
        position: absolute;
        right: 0;
        margin: auto;
        background-color: antiquewhite;
    }
    .card-1{
        background: url(https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/9a7c9c166632521.641b5c82178a2.jpg);
        background-size: cover;
        background-position: center;
        color: whitesmoke;
        padding: 2rem 2rem 1rem 2rem;
        border-radius: 0.5rem;
        box-shadow: 0 0 0.5rem rgba(0,0,0,0.1);
        margin: 2rem 2rem 0.5rem 2rem;
        height: 50vh;
    }
    .card-1-text {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        height: 100%;
    }
    .card-1-text h1{
        font-family: 'Neutral-Bold', sans-serif;
        font-size: 5rem;
    }
    .card-1-text p{
        font-family: 'Manrope', sans-serif;
    }
    .card-2-wrap {
        display: flex;
        width: 100%;
        height: 25%;
    }
    .card-2{
        background-image: url(https://mir-s3-cdn-cf.behance.net/project_modules/1400/8b9e13162544757.63d7dff0844ac.jpg);
        color: whitesmoke;
        padding: 2rem 2rem 1rem 2rem;
        border-radius: 0.5rem;
        box-shadow: 0 0 0.5rem rgba(0,0,0,0.1);
        margin: 0.5rem 2rem 0.5rem 2rem;
        width: 100%;
        background-size: cover;
        background-position: center;
        position: relative;
    }
    .card-2::before {
  position: absolute;
  width: 90%;
  height: 80%;
  top: 25%;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: -1;
  content: "";
  filter: blur(50px);
  background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
}
    .card-2-text{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        height: 100%;
    }
    .card-2-text p{
        font-family: 'Manrope', sans-serif;
        margin-top: 1rem;
    }
    .card-2-text h1{
        font-family: 'Neutral-Bold', sans-serif;
        font-size: 2rem;
    }
    .card-3{
        background-size: cover;
        color: whitesmoke;
        padding: 2rem;
        border-radius: 0.5rem;
        box-shadow: 0 0 0.5rem rgba(0,0,0,0.1);
        margin: 0.5rem 2rem 0.5rem 2rem;
        width: 30%;
    }
    .card-3-text{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        height: 100%;
    }
    .card-3-text p{
        font-family: 'Manrope', sans-serif;
        margin-top: 1rem;
        font-size: 0.8rem;
    }
    .card-3-text a{
        font-family: 'Neutral-Bold', sans-serif;
        font-size: 2rem;
        text-decoration: none;
        color: whitesmoke;
    }
    .card-4-wrap {
        display: flex;
        width: 100%;
        height: 35vh;
    }
    .card-4{
        background-color: #181818;
        color: whitesmoke;
        padding: 2rem;
        border-radius: 0.5rem;
        box-shadow: 0 0 0.5rem rgba(0,0,0,0.1);
        margin: 0.5rem 2rem 0.5rem 2rem;
        width: 40%;
    }
    .card-4-text{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        height: 100%;
    }
    .card-4-text p{
        font-family: 'Manrope', sans-serif;
    }
    .card-4-text h1{
        font-family: 'Neutral-Bold', sans-serif;
        font-size: 2rem;
    }
    .card-5{
        background-color: #181818;
        color: whitesmoke;
        padding: 2rem;
        border-radius: 0.5rem;
        box-shadow: 0 0 0.5rem rgba(0,0,0,0.1);
        margin: 0.5rem 2rem 0.5rem 2rem;
        width: 40%;
    }
    .card-5-text{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        height: 100%;
    }
    .card-5-text p{
        font-family: 'Manrope', sans-serif;
    }
    .card-5-text h1{
        font-family: 'Neutral-Bold', sans-serif;
        font-size: 2rem;
    }
    .card-6{
        background-color: #181818;
        color: whitesmoke;
        padding: 2rem;
        box-shadow: 0 0 0.5rem rgba(0,0,0,0.1);
        margin: 0.5rem 2rem 0.5rem 2rem;
        width: 100px;
        height: 100px;
        align-self: center;
        border-radius: 50%;
    }
    .card-6-text{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
    .card-6-text a{
        font-family: 'Neutral-Bold', sans-serif;
        font-size: 1.2rem;
        text-decoration: none;
        color: whitesmoke;
    }
    .card-7{
        background: url(https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/9a7c9c166632521.641b5c82178a2.jpg);
        background-size: cover;
        background-position: center;
        color: whitesmoke;
        padding: 2rem 2rem 1rem 2rem;
        border-radius: 0.5rem;
        box-shadow: 0 0 0.5rem rgba(0,0,0,0.1);
        margin: 0.5rem 2rem 1rem 2rem;
        height: 20%;
    }
    .card-7-text {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        height: 100%;
    }
    .card-7-text h1{
        font-family: 'Neutral-Bold', sans-serif;
        font-size: 5rem;
    }
    /* .card-7-text p{
        font-family: 'Manrope', sans-serif;
    } */
    .odk {
        position: absolute;
        top: 0;
        right: 0;
        margin: 0.5rem;
    }
</style>