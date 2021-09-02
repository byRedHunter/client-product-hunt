import React from 'react'

const Product = () => {
	return (
		<article className='product-item'>
			<figure>
				<img
					src='https://cdn.pixabay.com/photo/2021/01/05/05/30/grapes-5889697__340.jpg'
					alt='product name'
				/>
			</figure>

			<div>
				<h3>Nombre del producto</h3>
				<p>
					Aqui va toda la descripcion necesaria para el producto y algo mas que
					quieras poner.
				</p>
				<div className='info'>
					<p>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							viewBox='0 0 20 20'
							fill='#f4eddd'
						>
							<path
								fillRule='evenodd'
								d='M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z'
								clipRule='evenodd'
							/>
						</svg>{' '}
						5
					</p>
					<p>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							viewBox='0 0 20 20'
							fill='#F01010'
						>
							<path
								fillRule='evenodd'
								d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
								clipRule='evenodd'
							/>
						</svg>{' '}
						10
					</p>
				</div>
				<p>Publicado hace: 1 semana</p>
			</div>
		</article>
	)
}

export default Product
