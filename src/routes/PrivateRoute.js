import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { authContext } from '../context/auth/authContext'

export const PrivateRoute = ({ component: Component, ...props }) => {
	const authState = useContext(authContext)
	const { authtenticated } = authState

	return (
		<Route
			{...props}
			render={(props) =>
				!authtenticated ? <Redirect to='/login' /> : <Component {...props} />
			}
		/>
	)
}
