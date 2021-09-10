import React, { useContext, useEffect } from 'react'
import Loader from '../components/Loader'
import Product from '../components/Product'
import { productContext } from '../context/product/productContext'
import { orderByPopular } from '../utils/helpersProduct'

const Populars = () => {
	const productState = useContext(productContext)
	const { listProducts, getProducts } = productState

	useEffect(() => {
		if (listProducts.lenght === 0) return

		getProducts()
		// eslint-disable-next-line
	}, [])

	return (
		<section className='products'>
			<div className='wrapper'>
				{!listProducts ? (
					<Loader />
				) : (
					orderByPopular(listProducts).map((product) => (
						<Product key={product._id} productInfo={product} />
					))
				)}
			</div>
		</section>
	)
}

export default Populars
