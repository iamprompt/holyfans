import { baseUrl } from '../utilities'

localStorage.removeItem('token')
window.location.href = `${baseUrl}/`
