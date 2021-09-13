import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { es } from 'date-fns/locale'
import Loader from '../components/Loader'
import { productContext } from '../context/product/productContext'
import { canDelete, isCreator } from '../utils/helpersProduct'
import { authContext } from '../context/auth/authContext'
import { showError, showWarning } from '../config/toasts'

const ProductDetail = () => {
	const { id } = useParams()
	const history = useHistory()

	const productState = useContext(productContext)
	const {
		productSelected,
		getProductById,
		registerVote,
		registerComment,
		deleteProduct,
	} = productState

	const authState = useContext(authContext)
	const { user } = authState

	const [message, setMessage] = useState('')

	useEffect(() => {
		getProductById(id)
		// eslint-disable-next-line
	}, [id])

	const voteProduct = () => {
		// verificar si existe un usuario logueado
		if (!user) return history.push('/login')

		// verificar si ya ha votado
		if (productSelected.hasVoted.includes(user.id))
			return showWarning('Ud ya registro su voto.')

		// actualizamos en el state y en la db
		registerVote(productSelected._id, user.id)
	}

	const handleDelete = () => {
		// verificar si existe un usuario logueado
		if (!user) return history.push('/login')

		deleteProduct(productSelected._id)
		history.push('/')
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		// validar que no este vacio
		if (message.trim() === '') return showError('Escriba un comentario.')

		// realizar los cambios
		registerComment(productSelected._id, {
			comment: message,
			id: user.id,
			user: user.name,
		})

		setMessage('')
	}

	return (
		<section className='detail'>
			<div className='wrapper'>
				{!productSelected ? (
					<Loader />
				) : (
					<>
						<h1> {productSelected.product} </h1>

						<div className='product'>
							<section className='detail-product'>
								<p className='product-small'>
									Publicado hace:{' '}
									{formatDistanceToNow(new Date(productSelected.created), {
										locale: es,
									})}
								</p>
								<p className='product-small'>
									Por: {productSelected.author.name} |{' '}
									{productSelected.business}
								</p>
								<figure>
									<img
										src={productSelected.image}
										alt={productSelected.product}
									/>
								</figure>

								<p>{productSelected.description}</p>

								<h2>Agrega tu comentario</h2>
								{user ? (
									<form autoComplete='off' onSubmit={handleSubmit}>
										<input
											type='text'
											name='mesage'
											placeholder='Escribir comentario'
											value={message}
											onChange={({ target }) => setMessage(target.value)}
										/>
										<button className='button button-yellow button-form'>
											Agregar Comentario
										</button>
									</form>
								) : (
									<p>Inicie sesión para poder comentar.</p>
								)}

								<h2>Comentarios</h2>
								{productSelected.comments.length === 0 ? (
									<p className='message'>Aún no hay comentarios</p>
								) : (
									<ul className='comments'>
										{productSelected.comments.map((comment, iter) => (
											<li key={iter}>
												<p>{comment.comment}</p>
												<p
													className={
														isCreator(productSelected.author, comment.id)
															? 'autor'
															: ''
													}
												>
													Escrito por: {comment.user}
												</p>
											</li>
										))}
									</ul>
								)}
							</section>

							<aside>
								<p>{productSelected.hasVoted.length} votos</p>
								{user ? (
									<button
										className='button button-yellow button-form'
										onClick={voteProduct}
									>
										Votar
									</button>
								) : (
									<p>Inicie sesión para poder votar.</p>
								)}
								<a
									href={productSelected.url}
									target='_blank'
									rel='noreferrer'
									className='button button-form button-web'
								>
									Visitar Web
								</a>
								{canDelete(user, productSelected.author) && (
									<button
										className='button button-form button-delete'
										onClick={handleDelete}
									>
										Eliminar Producto
									</button>
								)}
							</aside>
						</div>
					</>
				)}
			</div>
		</section>
	)
}

export default ProductDetail
