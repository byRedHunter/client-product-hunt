import React, { useReducer } from 'react'
import { clientAxios } from '../../config/axios'
import { showError } from '../../config/toasts'
import { LIST_PRODUCTS } from '../../types'
import { productContext } from './productContext'
import { productReducer } from './productReducer'

const ProductState = ({ children }) => {
	const initialState = {
		listProducts: [],
		productSelected: null,
	}

	const [state, dispatch] = useReducer(productReducer, initialState)

	// obtener productos
	const getProducts = async () => {
		try {
			const response = await clientAxios.get('/product')

			dispatch({ type: LIST_PRODUCTS, payload: response.data })
		} catch (error) {
			console.log(error.response)
			showError(error.response.data.message)
		}
	}

	return (
		<productContext.Provider
			value={{
				listProducts: state.listProducts,
				productSelected: state.productSelected,
				getProducts,
			}}
		>
			{children}
		</productContext.Provider>
	)
}

export default ProductState
