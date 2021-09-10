import React, { useReducer } from 'react'
import { clientAxios } from '../../config/axios'
import { showError } from '../../config/toasts'
import {
	LIST_PRODUCTS,
	LIST_PRODUCT_BY_ID,
	REGISTER_COMMENT,
	REGISTER_VOTE,
} from '../../types'
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

	// obtener producto por su id
	const getProductById = async (id) => {
		try {
			const response = await clientAxios.get(`/product/${id}`)

			dispatch({ type: LIST_PRODUCT_BY_ID, payload: response.data })
		} catch (error) {
			console.log(error.response)
			showError(error.response.data.message)
		}
	}

	// registrar voto
	const registerVote = async (idProduct, idUser) => {
		try {
			// actualizamos en la db
			await clientAxios.put(`/product/vote/${idProduct}`)

			// actualizamos en el state
			dispatch({ type: REGISTER_VOTE, payload: idUser })
		} catch (error) {
			console.log(error.response)
			showError(error.response.data.message)
		}
	}

	// registrar comentario
	const registerComment = async (idProduct, info) => {
		try {
			// actualizamos en la db
			await clientAxios.put(`/product/comment/${idProduct}`, {
				message: info.comment,
			})

			// actualizamos en el state
			dispatch({ type: REGISTER_COMMENT, payload: info })
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
				getProductById,
				registerVote,
				registerComment,
			}}
		>
			{children}
		</productContext.Provider>
	)
}

export default ProductState
