import React from 'react'

const ProductDetail = () => {
	return (
		<section className='detail'>
			<div className='wrapper'>
				<h1>Titulo del producto</h1>

				<div className='product'>
					<section className='detail-product'>
						<p className='product-small'>Publicado hace: 1 semana</p>
						<p className='product-small'>Por: nombre de la empresa</p>
						<figure>
							<img
								src='https://cdn.pixabay.com/photo/2021/01/05/05/30/grapes-5889697__340.jpg'
								alt='nombre del producto'
							/>
						</figure>
						<p>
							Aqui va toda la descripcion del producto necesaria para mostrar al
							usuario y otro texto que desee poner.
						</p>
						<h2>Agrega tu comentario</h2>
						<form>
							<input
								type='text'
								name='mesage'
								placeholder='Escribir comentario'
							/>
							<button className='button button-yellow button-form'>
								Agregar Comentario
							</button>
						</form>
						<h2>Comentarios</h2>
						<p className='message'>Aún no hay comentarios</p>
						<ul className='comments'>
							<li>
								<p>Aqui va el comentario</p>
								<p className='autor'>Escrito por: nombre</p>
							</li>
							<li>
								<p>Aqui va el comentario</p>
								<p>Escrito por: nombre</p>
							</li>
						</ul>
					</section>

					<aside>
						<p>3 votos</p>
						<button className='button button-yellow button-form'>Votar</button>
						<button className='button button-form button-web'>
							Visitar Web
						</button>
						<button className='button button-form button-delete'>
							Eliminar Producto
						</button>
					</aside>
				</div>
			</div>
		</section>
	)
}

export default ProductDetail
