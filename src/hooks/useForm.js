import { useState } from 'react'

export const useForm = (initialState = {}) => {
	const [values, setValues] = useState(initialState)

	const reset = (data) => {
		data ? setValues(data) : setValues(initialState)
	}

	const handleInputChange = ({ target }) => {
		setValues({
			...values,
			[target.name]: target.value,
		})
	}

	return { values, reset, handleInputChange }
}
