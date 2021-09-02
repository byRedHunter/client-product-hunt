import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
	const user = true

	return (
		<nav className='nav'>
			<ul className='nav-menu'>
				<li className='nav-menu-item'>
					<Link to='/products'>Productos</Link>
				</li>
				<li className='nav-menu-item'>
					<Link to='/populars'>Populares</Link>
				</li>
				{user && (
					<li className='nav-menu-item'>
						<Link to='/new-product'>Agregar</Link>
					</li>
				)}
			</ul>

			<div className='nav-actions'>
				{user ? (
					<>
						<p hidden={!user}>Hola byRedHunter</p>

						<button className='button'>Cerrar Sesión</button>
					</>
				) : (
					<>
						<Link to='/login' className='button button-yellow'>
							Login
						</Link>

						<Link to='/register' className='button'>
							Crear Cuenta
						</Link>
					</>
				)}
			</div>
		</nav>
	)
}

export default Nav
