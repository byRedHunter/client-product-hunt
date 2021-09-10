import React, { useReducer } from 'react'
import {
	EXIT_USER,
	LOGIN_USER,
	PROCESS_ERROR,
	REGISTER_USER,
	VERIFY_USER,
} from '../../types'
import { authToken, clientAxios } from '../../config/axios'
import { showError } from '../../config/toasts'
import { authContext } from './authContext'
import { authReducer } from './authReducer'

const AuthState = ({ children }) => {
	const initialState = {
		token: sessionStorage.getItem('token') || null,
		authenticated: null,
		user: null,
	}

	const [state, dispatch] = useReducer(authReducer, initialState)

	// registrar usuario
	const registerUser = async (info) => {
		try {
			const response = await clientAxios.post('/user', info)
			const token = response.data.token

			dispatch({
				type: REGISTER_USER,
				payload: token,
			})

			// verificar usuario y obtener sus datos
			userAuthenticated()
		} catch (error) {
			console.log(error.response)
			showError(
				error.response.data.message || error.response.data.errors[0].msg
			)

			dispatch({
				type: PROCESS_ERROR,
			})
		}
	}

	// verifica y retorna al usuario autenticado
	const userAuthenticated = async () => {
		const token = sessionStorage.getItem('token')

		// enviamos el token por el header a traves de axios
		if (token) authToken(token)

		try {
			const response = await clientAxios.get('/user/auth')

			dispatch({
				type: VERIFY_USER,
				payload: response.data,
			})
		} catch (error) {
			dispatch({ type: PROCESS_ERROR })
		}
	}

	// cerrar sesion
	const closeSession = () => {
		dispatch({ type: EXIT_USER })
	}

	// login user
	const loginUser = async (info) => {
		try {
			const response = await clientAxios.post('/user/auth', info)
			const token = response.data.token

			dispatch({
				type: LOGIN_USER,
				payload: token,
			})

			// verificar usuario y obtener sus datos
			userAuthenticated()
		} catch (error) {
			console.log(error.response)
			showError(
				error.response.data.message || error.response.data.errors[0].msg
			)
			dispatch({ type: PROCESS_ERROR })
		}
	}

	return (
		<authContext.Provider
			value={{
				token: state.token,
				authenticated: state.authenticated,
				user: state.user,
				registerUser,
				userAuthenticated,
				closeSession,
				loginUser,
			}}
		>
			{children}
		</authContext.Provider>
	)
}

export default AuthState
