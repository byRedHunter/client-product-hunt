import React, { useContext, useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { showError } from '../config/toasts'
import { productContext } from '../context/product/productContext'
import { useForm } from '../hooks/useForm'
import { isImageValid } from '../utils/isImageValid'

const NewProduct = () => {
	const history = useHistory()

	const productState = useContext(productContext)
	const { createProduct } = productState

	const { values, handleInputChange } = useForm({
		business: 'El Panadero',
		url: 'https://bread.com',
		product: 'Pan Multisabor',
		description:
			'Toda la descripcion acerca del nuevo para que ha creado la empresa "El Panadero".',
	})
	const { business, url, product, description } = values

	const refInputFile = useRef(null)
	const [image, setImage] = useState(refInputFile)
	const handleImage = ({ target }) => {
		setImage(target.files[0])
	}

	useEffect(() => {
		if (!image.name) return

		if (!isImageValid(image)) return showError('Seleccione una imágen válida.')
	}, [image])

	const handleSubmit = (e) => {
		e.preventDefault()

		// validar campos vacios
		if (
			business.trim() === '' ||
			url.trim() === '' ||
			product.trim() === '' ||
			description.trim() === ''
		)
			return showError('Complet todos los campos.')

		// validar url válida
		const urlValid =
			// eslint-disable-next-line
			/(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/
		if (!urlValid.test(url)) return showError('Ingrese una URL válido.')

		// validar imagen -- que haya seleccionado un archivo y sea de un formato valido
		if (!isImageValid(image)) return showError('Seleccione una imágen válida.')

		// crear el formdata
		const formData = new FormData()
		formData.append('business', business)
		formData.append('url', url)
		formData.append('product', product)
		formData.append('description', description)
		formData.append('image', image)

		// guardar producto
		createProduct(formData)

		// redirigir a la pagina de productos
		history.push('/products')
	}

	return (
		<section className='add-product wrapper flex-center-x'>
			<form
				className='form'
				encType='multipart/form-data'
				onSubmit={handleSubmit}
			>
				<h2 className='form-title'>Nuevo Producto</h2>

				<fieldset>
					<legend>Información General</legend>

					<div className='form-item'>
						<label htmlFor='business'>Empresa</label>
						<input
							type='text'
							name='business'
							value={business}
							onChange={handleInputChange}
						/>
					</div>

					<div className='form-item'>
						<label htmlFor='url'>URL</label>
						<input
							type='text'
							name='url'
							value={url}
							onChange={handleInputChange}
						/>
					</div>
				</fieldset>

				<fieldset>
					<legend>Acerca del Producto</legend>

					<div className='form-item'>
						<label htmlFor='product'>Producto</label>
						<input
							type='text'
							name='product'
							value={product}
							onChange={handleInputChange}
						/>
					</div>

					<div className='form-item'>
						<label htmlFor='name'>Imágen</label>
						<input
							type='file'
							name='image'
							ref={refInputFile}
							onChange={handleImage}
						/>
					</div>

					<div className='form-item'>
						<label htmlFor='description'>Descripción</label>
						<textarea
							name='description'
							value={description}
							onChange={handleInputChange}
						></textarea>
					</div>
				</fieldset>

				<button type='submit' className='button button-form'>
					Crear Producto
				</button>
			</form>
		</section>
	)
}

export default NewProduct
