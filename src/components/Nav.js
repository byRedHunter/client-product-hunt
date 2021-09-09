import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { authContext } from '../context/auth/authContext'

const Nav = () => {
	const authState = useContext(authContext)
	const { user, closeSession } = authState

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
						<p>Hola {user.name}</p>

						<button className='button' onClick={closeSession}>
							Cerrar Sesión
						</button>
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
