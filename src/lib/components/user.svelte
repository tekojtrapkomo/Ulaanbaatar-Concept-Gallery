<script>
    export let content;
</script>
{#if content === 'notLogged'}
<div class="user">
    <div class="user__avatar">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="avatar">
    </div>
    <div class="user__info">
        <a href="/auth" class="user__name">Нэвтрэх</a>
    </div>
</div>
{/if}
{#if content === 'logged'}
<div class="user">
    <div class="user__avatar">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="avatar">
    </div>
    <div class="logout">
        <form action="/logout" method="POST">
            <button type="submit" class="logout">Гарах</button>
        </form>
        </div>
</div>
{/if}
<style>
    .user {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: rgba(110, 110, 110, 0.22);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(4.4px);
        -webkit-backdrop-filter: blur(4.4px);
        border: 1px solid rgba(255, 255, 255, 0.32);
        width: 100%;
    }
    .user__avatar img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        user-select: none;
        -webkit-user-drag: none;
    }
    .user__avatar{
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 1rem 1rem;
    }
    .user__info{
        width: 50%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 1rem 2rem;

    }
    .user__info a {
        font-size: 1rem;
        font-weight: 500;
        color: whitesmoke;
        text-decoration: none;
        font-family: 'Manrope', sans-serif;
    }
    
</style>