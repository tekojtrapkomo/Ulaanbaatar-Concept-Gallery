import {error, redirect} from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
    register: async ({ locals, request }) => {
		const body = Object.fromEntries(await request.formData());

		let username = (body.name);
		try {
			await locals.pb.collection('users').create({ username, ...body });
		} catch (err) {
			console.log('Error: ', err);
			throw error(500, 'Something went wrong');
		}
		throw redirect(303, '/');
}
};