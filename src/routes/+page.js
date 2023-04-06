// import { error } from '@sveltejs/kit';

// import PocketBase from 'pocketbase';

// const pb = new PocketBase('https://hissing-machine.pockethost.io');
// export const load = () => {
// 	const getTopic = async () => {
// 		try {
// 			const topic = await pb.collection('topic').getFullList(200 /* batch size */, {
// 				sort: '-created	',
// 			});
// 			return topic;
// 		} catch (err) {
// 			console.log('Error: ', err);
// 			throw error(err.status, err.message);
// 		}
// 	};
// 	const getGallery = async () => {
// 		try {
// 			const gallery = await pb.collection('gallery').getFullList(200 /* batch size */,{
// 				expand: 'topicse,user'
// 			});
// 			return gallery;
// 		} catch (err) {
// 			console.log('Error: ', err);
// 			throw error(err.status, err.message);
// 		}
// };
// 		return {
// 			topic: getTopic(),
// 			gallery: getGallery()
// 		};
//  };