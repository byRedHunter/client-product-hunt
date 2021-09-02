import React from 'react'

export const Register = () => {
	return (
		<section className='wrapper flex-center-x'>
			<form className='form'>
				<h2 className='form-title'>Crear Cuenta</h2>

				<div className='form-item'>
					<label htmlFor='name'>Nombres</label>
					<input type='text' name='name' />
				</div>

				<div className='form-item'>
					<label htmlFor='email'>Correo Electrónico</label>
					<input type='text' name='email' />
				</div>

				<div className='form-item'>
					<label htmlFor='password'>Contraseña</label>
					<input type='password' name='password' />
				</div>

				<button className='button button-form'>Registrarme</button>
			</form>
		</section>
	)
}
