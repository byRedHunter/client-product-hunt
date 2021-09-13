import { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import { authContext } from '../context/auth/authContext'
import Login from '../pages/Login'
import NewProduct from '../pages/NewProduct'
import Populars from '../pages/Populars'
import ProductDetail from '../pages/ProductDetail'
import { Products } from '../pages/Products'
import { Register } from '../pages/Register'
import Search from '../pages/Search'
import { PrivateRoute } from './PrivateRoute'

const AppRoute = () => {
	const authState = useContext(authContext)
	const { userAuthenticated } = authState

	useEffect(() => {
		userAuthenticated()
		// eslint-disable-next-line
	}, [])

	return (
		<Router>
			<Header />

			<Switch>
				<Route exact path='/' component={Products} />
				<Route exact path='/products' component={Products} />
				<Route exact path='/register' component={Register} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/populars' component={Populars} />
				<Route exact path='/product/:id' component={ProductDetail} />
				<Route exact path='/search-product/:word' component={Search} />

				<PrivateRoute exact path='/new-product' component={NewProduct} />
			</Switch>
		</Router>
	)
}

export default AppRoute
