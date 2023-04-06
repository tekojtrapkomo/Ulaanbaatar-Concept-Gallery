export const getImageURL = (collectionId, recordId, fileName, size = '0x0') => {
    return `https://hissing-machine.pockethost.io/api/files/${collectionId}/${id}/${submission}`;
};

export const imgURLONE = (collectionId, id, bg) => {
    return `https://hissing-machine.pockethost.io/api/files/${collectionId}/${id}/${bg}`;
}

export const serializeNonPOJOs = (obj) => {
	return structuredClone(obj);
};