import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import Product from '../components/Product'
import { productContext } from '../context/product/productContext'

const Search = () => {
	const { word } = useParams()

	const productState = useContext(productContext)
	const { listSearch, searchProduct } = productState

	useEffect(() => {
		searchProduct(word)
		// eslint-disable-next-line
	}, [word])

	return (
		<section className='products'>
			<div className='wrapper'>
				{listSearch.length === 0 ? (
					<p>
						No hay productos que coincidan con su busqueda{' '}
						<strong>"{word}"</strong>.
					</p>
				) : (
					listSearch.map((product) => (
						<Product key={product._id} productInfo={product} />
					))
				)}
			</div>
		</section>
	)
}

export default Search
