import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import Search from './Search'

const Header = () => {
	return (
		<header className='header'>
			<div className='wrapper'>
				<h1 className='logo'>
					<Link to='/'>ProductSearch</Link>
				</h1>

				<Search />

				<Nav />
			</div>
		</header>
	)
}

export default Header
