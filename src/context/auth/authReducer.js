import {
	EXIT_USER,
	LOGIN_USER,
	PROCESS_ERROR,
	REGISTER_USER,
	VERIFY_USER,
} from '../../types'

export const authReducer = (state, action) => {
	switch (action.type) {
		case REGISTER_USER:
		case LOGIN_USER:
			sessionStorage.setItem('token', action.payload)

			return {
				...state,
				token: action.payload,
				authenticated: true,
			}

		case VERIFY_USER:
			return {
				...state,
				authenticated: true,
				user: action.payload,
			}

		case PROCESS_ERROR:
		case EXIT_USER:
			sessionStorage.removeItem('token')

			return {
				...state,
				user: null,
				authenticated: null,
				token: null,
				loading: false,
			}

		default:
			return state
	}
}
