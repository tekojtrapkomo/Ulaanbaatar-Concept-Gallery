<div class="user">
    <div class="user__avatar">
        <img src="https://i.makeagif.com/media/8-07-2015/1GnPq0.gif" alt="avatar">
    </div>
    <div class="user__info">
        <a href="/" class="user__name">Login</a>
        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="whitesmoke" d="M6.293 6.293a1 1 0 0 1 1.414 0L16 14.586V9a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1H9a1 1 0 1 1 0-2h5.586L6.293 7.707a1 1 0 0 1 0-1.414z"></path></svg>
    </div>
</div>

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
    }
    .user__avatar img {
        width: 50px;
        height: 50px;
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
        font-size: 1.2rem;
        font-weight: 500;
        color: whitesmoke;
        text-decoration: none;
    }
    
</style>