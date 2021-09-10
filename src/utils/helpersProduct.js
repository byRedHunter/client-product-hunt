export const isCreator = (author, id) => {
	if (author._id === id) return true

	return false
}

export const canDelete = (user, author) => {
	if (!user) return false

	if (author.id === user._id) return true
}
