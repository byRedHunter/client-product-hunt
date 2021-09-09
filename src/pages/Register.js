import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { showError } from '../config/toasts'
import { authContext } from '../context/auth/authContext'
import { useForm } from '../hooks/useForm'

export const Register = () => {
	const authState = useContext(authContext)
	const { authenticated, registerUser } = authState

	const history = useHistory()

	useEffect(() => {
		if (authenticated) history.push('/')
		// eslint-disable-next-line
	}, [authenticated])

	const { values, handleInputChange } = useForm({
		name: '',
		email: '',
		password: '',
	})
	const { name, email, password } = values

	const handleSubmit = (e) => {
		e.preventDefault()

		// validar campos vacios
		if (name.trim() === '' || password.trim() === '' || email.trim() === '')
			return showError('Complete todos los campos.')

		// password minimo de 8 caracteres
		// debe de ser un email valido
		// pasar al action
		registerUser({ name, email, password })
	}

	return (
		<section className='wrapper flex-center-x'>
			<form className='form' onSubmit={handleSubmit} autoComplete='off'>
				<h2 className='form-title'>Crear Cuenta</h2>

				<div className='form-item'>
					<label htmlFor='name'>Nombres</label>
					<input
						type='text'
						name='name'
						value={name}
						onChange={handleInputChange}
					/>
				</div>

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

				<button className='button button-form'>Registrarme</button>
			</form>
		</section>
	)
}
