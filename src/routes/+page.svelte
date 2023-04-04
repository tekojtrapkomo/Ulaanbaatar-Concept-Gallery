<script>
    import {animate} from 'motion';
    import { onMount } from 'svelte';
	import { fly, slide } from 'svelte/transition';
    let visible = false;

    onMount(() => {
        visible = true;
        animate('.card-1',{opacity: [0, 1], x: [20,0]},{duration: 0.8, easing: 'ease-in-out'});
        animate('.card-2',{opacity: [0, 1], x: [20,0]},{duration: 0.8, easing: 'ease-in-out', delay: 0.1});
        animate('.card-3',{opacity: [0, 1], x: [20,0]},{duration: 0.8, easing: 'ease-in-out', delay: 0.2});
        animate('.card-4',{opacity: [0, 1], x: [20,0]},{duration: 0.8, easing: 'ease-in-out', delay: 0.3});
        animate('.card-5',{opacity: [0, 1], x: [20,0]},{duration: 0.8, easing: 'ease-in-out', delay: 0.4});
        animate('.lorem',{opacity: [0, 1], y: [20,0]},{duration: 1.2, easing: 'ease-in-out', delay: 0.8});
    });
</script>

<section class="home-wrapper" style="visibility: {visible ? 'visible' : 'hidden'};">
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
        <div class="card-3">
            <div class="card-3-text">
                <h1>Сайн байна уу?</h1>
                <p>Энэхүү сайт нь монгол хэлний сургалтын төвтэй холбоотой боломжийг олгохын тулд бүрдсэн болно.</p>
            </div>
        </div>
    </div>
    <div class="card-4-wrap">
        <div class="card-4">
            <div class="card-4-text">
                <h1>Сайн байна уу?</h1>
                <p>Энэхүү сайт нь монгол хэлний сургалтын төвтэй холбоотой боломжийг олгохын тулд бүрдсэн болно.</p>
                <p>Биднийг дэмжих бол <a href="/learn">сургалт</a> хэсэгтэй холбогдоно уу.</p>
            </div>
        </div>
        <div class="card-5">
            <div class="card-5-text">
                <h1>Сайн байна уу?</h1>
                <p>Энэхүү сайт нь монгол хэлний сургалтын төвтэй холбоотой боломжийг олгохын тулд бүрдсэн болно.</p>
                <p>Биднийг дэмжих бол <a href="/learn">сургалт</a> хэсэгтэй холбогдоно уу.</p>
            </div>
        </div>
        <div class="card-6">
            <div class="card-6-text">
                <h1>ЭНД ЭХЭЛ!</h1>
            </div>
        </div>
    </div>
    <div class="lorem">
        <p>УЛААНБААТАР КОНЦЕПТ YЗЭСГЭЛЭН</p>
        <div class="divide"></div>
        <p>© УЛААНБААТАР ХОТ, 2023 ОН</p>
        <div class="divide"></div>
        <p><a href="mailto:someone@example.com">concept@monark.mn</a></p>
    </div>
</section>
<style>
    .home-wrapper {
        width: 85%;
        position: absolute;
        right: 0;
        margin: auto;
        height: 100%;
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
        height: 45%;
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
        background: url(https://mir-s3-cdn-cf.behance.net/project_modules/1400/8b9e13162544757.63d7dff0844ac.jpg);
        color: whitesmoke;
        padding: 2rem 2rem 1rem 2rem;
        border-radius: 0.5rem;
        box-shadow: 0 0 0.5rem rgba(0,0,0,0.1);
        margin: 0.5rem 2rem 0.5rem 2rem;
        width: 100%;
        background-size: cover;
        background-position: center;
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
        background-color: #181818;
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
    .card-4-wrap {
        display: flex;
        width: 100%;
        height: 20%;
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
        justify-content: flex-end;
        align-items: flex-start;
        height: 100%;
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
        justify-content: flex-end;
        align-items: flex-start;
        height: 100%;
    }
    .card-6{
        background-color: #181818;
        color: whitesmoke;
        padding: 2rem;
        border-radius: 50%;
        box-shadow: 0 0 0.5rem rgba(0,0,0,0.1);
        margin: 0.5rem 2rem 0.5rem 2rem;
        width: 180px;
        height: 180px;
        align-self: center;
    }
    .card-6-text{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
    .card-6-text h1{
        font-family: 'Neutral-Bold', sans-serif;
        font-size: 2rem;
    }
    .lorem {
        position: relative;
        bottom: 0;
        margin: 1rem 2rem 0.5rem 2rem;
        width: 95%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .lorem p {
        font-family: 'Neutral', sans-serif;
        font-size: 0.8rem;
    }
    .lorem a {
        text-decoration: dashed;
        color: #181818;
    }
    .divide {
        width: 10%;
        height: 1px;
        background-color: #181818;
    }
</style>