import {
	LIST_PRODUCTS,
	LIST_PRODUCT_BY_ID,
	REGISTER_COMMENT,
	REGISTER_VOTE,
} from '../../types'

export const productReducer = (state, action) => {
	switch (action.type) {
		case LIST_PRODUCTS:
			return {
				...state,
				listProducts: action.payload,
				productSelected: null,
			}

		case LIST_PRODUCT_BY_ID:
			return {
				...state,
				productSelected: action.payload,
			}

		case REGISTER_VOTE:
			return {
				...state,
				productSelected: {
					...state.productSelected,
					votes: state.productSelected.votes++,
					hasVoted: [...state.productSelected.hasVoted, action.payload],
				},
			}

		case REGISTER_COMMENT:
			return {
				...state,
				productSelected: {
					...state.productSelected,
					comments: [...state.productSelected.comments, action.payload],
				},
			}

		default:
			return state
	}
}
