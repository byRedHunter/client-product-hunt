import React, { useContext, useEffect } from 'react'
import Loader from '../components/Loader'
import Product from '../components/Product'
import { productContext } from '../context/product/productContext'

export const Products = () => {
	const productState = useContext(productContext)
	const { listProducts, getProducts } = productState

	useEffect(() => {
		getProducts()
		// eslint-disable-next-line
	}, [])

	return (
		<section className='products'>
			<div className='wrapper'>
				{!listProducts ? (
					<Loader />
				) : (
					listProducts.map((product) => (
						<Product key={product._id} productInfo={product} />
					))
				)}
			</div>
		</section>
	)
}
