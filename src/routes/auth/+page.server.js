import {error, redirect} from '@sveltejs/kit';

export const load = ({ locals }) => {
	if (locals.pb.authStore.isValid) {
		throw redirect(303, '/');
	};
};

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
},
login: async ({ request, locals }) => {
	const body = Object.fromEntries(await request.formData());

	try {
		await locals.pb.collection('users').authWithPassword(body.email, body.password);
		if (!locals.pb?.authStore?.model?.verified) {
			locals.pb.authStore.clear();
			console.log(pb.authStore.token);
			return {
				notVerified: true
			};
			
		}
	} catch (err) {
		console.log('Error: ', err);
		throw error(500, 'Something went wrong logging in');
	}
	throw redirect(303, '/');
	
}
};