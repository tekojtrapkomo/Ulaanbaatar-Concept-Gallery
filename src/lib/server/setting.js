import {POCKETBASE_URL} from '$env/static/private';


export const getImageURL = (collectionId, recordId, fileName, size = '0x0') => {
    return `${POCKETBASE_URL}/api/files/${collectionId}/${id}/${submission}`;
};


export const imgURLONE = (collectionId, id, bg) => {
    // return `${POCKETBASE_URL}/api/files/${collectionId}/${id}/${bg}`;
    const apiUrl = import.meta.env.POCKETBASE_URL;
    return `${apiUrl}/api/files/${collectionId}/${id}/${bg}`;

}
export const serializeNonPOJOs = (obj) => {
	return structuredClone(obj);
};
