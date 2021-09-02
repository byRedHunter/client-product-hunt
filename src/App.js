import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Login from './pages/Login'
import Populars from './pages/Populars'
import ProductDetail from './pages/ProductDetail'
import { Products } from './pages/Products'
import { Register } from './pages/Register'

function App() {
	return (
		<Router>
			<Header />

			<Switch>
				<Route exact path='/'>
					<Products />
				</Route>
				<Route path='/products'>
					<Products />
				</Route>
				<Route path='/login'>
					<Login />
				</Route>
				<Route path='/register'>
					<Register />
				</Route>
				<Route path='/populars'>
					<Populars />
				</Route>
				<Route path='/product/:id'>
					<ProductDetail />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
