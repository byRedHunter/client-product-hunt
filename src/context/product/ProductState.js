import React, { useReducer } from 'react'
import { clientAxios } from '../../config/axios'
import { showError, showSuccess } from '../../config/toasts'
import {
	LIST_PRODUCTS,
	LIST_PRODUCT_BY_ID,
	REGISTER_COMMENT,
	REGISTER_VOTE,
	SEARCH_PRODUCT,
} from '../../types'
import { productContext } from './productContext'
import { productReducer } from './productReducer'

const ProductState = ({ children }) => {
	const initialState = {
		listProducts: [],
		listSearch: [],
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

	// registrar un nuevo producto
	const createProduct = async (product) => {
		try {
			// actualizamos en la db
			await clientAxios.post(`/product`, product)
			await getProducts()

			//dispatch({ type: CREATE_PRODUCT, payload: response.data })
			showSuccess('Producto registrado correctamente.')
		} catch (error) {
			console.log(error.response)
			showError(error.response.data.message)
		}
	}

	// buscar producto
	const searchProduct = async (word) => {
		try {
			const response = await clientAxios.get(`/product/search/${word}`)

			dispatch({ type: SEARCH_PRODUCT, payload: response.data })
		} catch (error) {
			console.log(error.response)
			showError(error.response.data.message)
		}
	}

	// eliminar producto
	const deleteProduct = async (id) => {
		try {
			await clientAxios.delete(`/product/${id}`)
			await getProducts()
			showSuccess('Producto eliminado.')
		} catch (error) {
			console.log(error.response)
			showError(error.response.data.message)
		}
	}

	return (
		<productContext.Provider
			value={{
				listProducts: state.listProducts,
				listSearch: state.listSearch,
				productSelected: state.productSelected,
				getProducts,
				getProductById,
				registerVote,
				registerComment,
				createProduct,
				searchProduct,
				deleteProduct,
			}}
		>
			{children}
		</productContext.Provider>
	)
}

export default ProductState
