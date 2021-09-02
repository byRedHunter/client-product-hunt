import React from 'react'

const Login = () => {
	return (
		<section className='wrapper flex-center-x'>
			<form className='form'>
				<h2 className='form-title'>Iniciar Sesión</h2>

				<div className='form-item'>
					<label htmlFor='email'>Correo Electrónico</label>
					<input type='text' name='email' />
				</div>

				<div className='form-item'>
					<label htmlFor='password'>Contraseña</label>
					<input type='password' name='password' />
				</div>

				<button className='button button-form'>Ingresar</button>
			</form>
		</section>
	)
}

export default Login
