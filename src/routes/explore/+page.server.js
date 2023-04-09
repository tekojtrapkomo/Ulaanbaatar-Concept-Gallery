// import { error } from '@sveltejs/kit';
// import Pocketbase from 'pocketbase';
// import {serializeNonPOJOs} from '$lib/setting';

// import {POCKETBASE_URL} from '$env/static/private';

// const pb = new Pocketbase(POCKETBASE_URL);
// export const load = () => {
// 	const getTopic = async () => {
// 		try {
// 			const topic = await serializeNonPOJOs(pb.collection('topic').getFullList(200 /* batch size */, {
// 				sort: '-created	',
// 			}));
// 			return topic;
// 		} catch (err) {
// 			console.log('Error: ', err);
// 			throw error(err.status, err.message);
// 		}
// 	};
// 	const getGallery = async () => {
// 		try {
// 			const gallery = await serializeNonPOJOs(pb.collection('gallery').getFullList(200 /* batch size */,{
// 				expand: 'topicse,user'
// 			}));
// 			return gallery;
// 		} catch (err) {
// 			console.log('Error: ', err);
// 			throw error(err.status, err.message);
// 		}
// };
// 		return {
// 			topic: getTopic(),
// 			gallery: getGallery(),
// 		};
//  };
import { error } from "@sveltejs/kit";
import { serializeNonPOJOs } from "$lib/setting.js";

export const load = ({ locals }) => {
	const getTopic = async () => {
		try {
			const topic = serializeNonPOJOs(
				await locals.pb.collection("topic").getFullList(undefined,{
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
	};
};