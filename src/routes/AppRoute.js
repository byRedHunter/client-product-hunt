import { lazy, Suspense, useContext, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import Loader from '../components/Loader'
import { authContext } from '../context/auth/authContext'
import { PrivateRoute } from './PrivateRoute'

const Products = lazy(() => import('../pages/Products'))
const Register = lazy(() => import('../pages/Register'))
const Login = lazy(() => import('../pages/Login'))
const Populars = lazy(() => import('../pages/Populars'))
const ProductDetail = lazy(() => import('../pages/ProductDetail'))
const Search = lazy(() => import('../pages/Search'))
const NewProduct = lazy(() => import('../pages/NewProduct'))

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

			<Suspense fallback={<Loader />}>
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
			</Suspense>
		</Router>
	)
}

export default AppRoute
