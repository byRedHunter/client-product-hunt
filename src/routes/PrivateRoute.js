import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { authContext } from '../context/auth/authContext'

export const PrivateRoute = ({ component: Component, ...restProps }) => {
	const authState = useContext(authContext)
	const { token } = authState

	return (
		<Route {...restProps}>
			{token ? <Component /> : <Redirect to='/login' />}
		</Route>
	)
}
