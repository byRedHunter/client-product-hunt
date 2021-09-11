const typeImages = ['image/png', 'image/jpeg', 'image/jpg']

export const isImageValid = (image) => {
	if (image && typeImages.includes(image.type)) return true

	return false
}
