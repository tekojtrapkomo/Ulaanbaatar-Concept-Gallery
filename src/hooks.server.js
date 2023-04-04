import Pocketbase from 'pocketbase';

export const handle = async ({ event, resolve }) => {
	event.locals.pb = new Pocketbase('https://hissing-machine.pockethost.io');
    event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie')||'');

    if (event.locals.pb.authStore.isValid){
        event.locals.user = await event.locals.pb.authStore.getUser();
    } else {
        event.locals.user = null;
    }

    const response = await resolve(event);
	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false, maxAge: 6 * 60 * 60 }));

    return response;
};