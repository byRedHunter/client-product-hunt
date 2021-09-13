import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { showError } from '../config/toasts'

const Search = () => {
	const [word, setWord] = useState('')
	const history = useHistory()

	const handleSubmit = (e) => {
		e.preventDefault()

		if (word.trim() === '') return showError('Ingrese un término de búsqueda')

		history.push(`/search-product/${word}`)
	}

	return (
		<form className='header-form' autoComplete='off' onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Buscar...'
				name='word'
				value={word}
				onChange={({ target }) => setWord(target.value)}
			/>
		</form>
	)
}

export default Search
