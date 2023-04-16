
import { serializeNonPOJOs } from '$lib/server/setting.js';

export const load = async ({locals}) => {
  const data = await locals.pb.collection("topic").getFullList(undefined, {
    sort: '-created'
  });	
  const topic = serializeNonPOJOs(data);
  return {topic};
};