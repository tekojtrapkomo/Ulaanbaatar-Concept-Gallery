
import { error } from "@sveltejs/kit";
import { serializeNonPOJOs } from "$lib/server/setting.js";

/** @type {import('./$types').PageServerLoad} */
export async function load({locals}) {
	const getTopic = async () => {
		try {
			const topic = serializeNonPOJOs(
				await locals.pb.collection("topic").getFullList(200,{
                    sort: '-created'
                }),
			);
			return topic;
		} catch (err) {
			console.log("Error:", err);
			throw error(err.status, err.message);
		}
	};
    const getGallery = async () => {
		try {
			const gallery = serializeNonPOJOs(
				await locals.pb.collection("gallery").getFullList(undefined,{
                    expand: 'topicse,user'
                }),
			);
			return gallery;
		} catch (err) {
			console.log("Error:", err);
			throw error(err.status, err.message);
		}
	};
	return {
		topic: getTopic(),
		gallery: getGallery(),
		hydrate: false,
	};
}
