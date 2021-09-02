import React from 'react'
import Product from '../components/Product'

export const Products = () => {
	return (
		<section className='products'>
			<div className='wrapper'>
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
			</div>
		</section>
	)
}
