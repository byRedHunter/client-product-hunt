import { ToastContainer } from 'react-toastify'
import { authToken } from './config/axios'
import AuthState from './context/auth/AuthState'
import AppRoute from './routes/AppRoute'
import 'react-toastify/dist/ReactToastify.css'
import ProductState from './context/product/ProductState'

// revisamos si existe el token para setear en la configuracion del header con axios
const token = sessionStorage.getItem('token')
if (token) authToken(token)

function App() {
	return (
		<AuthState>
			<ProductState>
				<AppRoute />

				<ToastContainer />
			</ProductState>
		</AuthState>
	)
}

export default App
