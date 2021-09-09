import { LIST_PRODUCTS } from '../../types'

export const productReducer = (state, action) => {
	switch (action.type) {
		case LIST_PRODUCTS:
			return {
				...state,
				listProducts: action.payload,
			}

		default:
			return state
	}
}
