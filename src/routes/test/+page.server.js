import { serializeNonPOJOs } from '$lib/server/setting.js';

export const load = async ({locals}) => {
  const data = await locals.pb.collection("gallery").getFullList(undefined, {
    expand: 'topicse,user'
  });
  const gallery = serializeNonPOJOs(data);
  return {gallery};
};