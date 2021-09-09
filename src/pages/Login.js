import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { showError } from '../config/toasts'
import { authContext } from '../context/auth/authContext'
import { useForm } from '../hooks/useForm'

const Login = () => {
	const authState = useContext(authContext)
	const { authenticated, loginUser } = authState

	const history = useHistory()

	// verificamos si esta logueado
	useEffect(() => {
		if (authenticated) history.push('/')
		// eslint-disable-next-line
	}, [authenticated])

	const { values, handleInputChange } = useForm({ email: '', password: '' })
	const { email, password } = values

	const handleSubmit = (e) => {
		e.preventDefault()

		// validar campos vacios
		if (password.trim() === '' || email.trim() === '')
			return showError('Complete todos los campos.')

		// ingrese un email valido

		loginUser({ email, password })
	}

	return (
		<section className='wrapper flex-center-x'>
			<form className='form' autoComplete='off' onSubmit={handleSubmit}>
				<h2 className='form-title'>Iniciar Sesión</h2>

				<div className='form-item'>
					<label htmlFor='email'>Correo Electrónico</label>
					<input
						type='text'
						name='email'
						value={email}
						onChange={handleInputChange}
					/>
				</div>

				<div className='form-item'>
					<label htmlFor='password'>Contraseña</label>
					<input
						type='password'
						name='password'
						value={password}
						onChange={handleInputChange}
					/>
				</div>

				<button className='button button-form'>Ingresar</button>
			</form>
		</section>
	)
}

export default Login
