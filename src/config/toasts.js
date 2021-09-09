import { toast } from 'react-toastify'

export const showError = (message) =>
	toast(message, { type: 'error', theme: 'colored' })
export const showSuccess = (message) =>
	toast(message, { type: 'success', theme: 'colored' })
