export const getImageURL = (collectionId, recordId, fileName, size = '0x0') => {
	return `https://hissing-machine.pockethost.io/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`;
};

export const imgURLONE = (collectionId, id, bg) => {
    return `https://hissing-machine.pockethost.io/api/files/${collectionId}/${id}/${bg}`;
}