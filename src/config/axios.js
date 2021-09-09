import axios from 'axios'

export const clientAxios = axios.create({
	baseURL: process.env.REACT_APP_BACKEND_URL,
})

export const authToken = (token) => {
	if (token) {
		clientAxios.defaults.headers.common['auth-token'] = token
	} else {
		delete clientAxios.defaults.headers.common['auth-token']
	}
}
