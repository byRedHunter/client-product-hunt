import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import Login from '../pages/Login'
import NewProduct from '../pages/NewProduct'
import Populars from '../pages/Populars'
import ProductDetail from '../pages/ProductDetail'
import { Products } from '../pages/Products'
import { Register } from '../pages/Register'
import { PrivateRoute } from './PrivateRoute'

const AppRoute = () => {
	return (
		<Router>
			<Header />

			<Switch>
				<Route exact path='/' component={Products} />
				<Route path='/products' component={Products} />
				<Route path='/register' component={Register} />
				<Route path='/login' component={Login} />
				<Route path='/populars' component={Populars} />
				<Route path='/product/:id' component={ProductDetail} />

				<PrivateRoute path='/new-product' component={NewProduct} />
			</Switch>
		</Router>
	)
}

export default AppRoute
