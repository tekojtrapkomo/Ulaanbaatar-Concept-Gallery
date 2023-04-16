export const getImageURL = (collectionId, recordId, fileName, size = '150x200') => {
	return `https://hissing-machine.pockethost.io/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`;
};
export const instagramURL = (instagram) => {
    return `https://www.instagram.com/${instagram}`;
}
export const topicBG = (collectionId, id, bg,size = '200x200') => {
    return `https://hissing-machine.pockethost.io/api/files/${collectionId}/${id}/${bg}?thumb=${size}`;
}