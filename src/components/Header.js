import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
	const user = true

	return (
		<header className='header'>
			<div className='wrapper'>
				<h1 className='logo'>
					<Link to='/'>ProductSearch</Link>
				</h1>

				<form className='header-form'>
					<input type='text' placeholder='Buscar...' name='search' />
				</form>

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
								<button className='button button-yellow'>Login</button>
								<button className='button'>Crear Cuenta</button>
							</>
						)}
					</div>
				</nav>
			</div>
		</header>
	)
}

export default Header
