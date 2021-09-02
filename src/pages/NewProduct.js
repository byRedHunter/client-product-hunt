import React from 'react'

const NewProduct = () => {
	return (
		<section className='add-product wrapper flex-center-x'>
			<form className='form'>
				<h2 className='form-title'>Nuevo Producto</h2>

				<fieldset>
					<legend>Información General</legend>

					<div className='form-item'>
						<label htmlFor='company'>Empresa</label>
						<input type='text' name='company' />
					</div>

					<div className='form-item'>
						<label htmlFor='url'>URL</label>
						<input type='text' name='url' />
					</div>
				</fieldset>

				<fieldset>
					<legend>Acerca del Producto</legend>

					<div className='form-item'>
						<label htmlFor='product'>Producto</label>
						<input type='text' name='product' />
					</div>

					<div className='form-item'>
						<label htmlFor='name'>Imágen</label>
						<input type='file' name='image' />
					</div>

					<div className='form-item'>
						<label htmlFor='description'>Descripción</label>
						<textarea name='description'></textarea>
					</div>
				</fieldset>

				<button className='button button-form'>Crear Producto</button>
			</form>
		</section>
	)
}

export default NewProduct
