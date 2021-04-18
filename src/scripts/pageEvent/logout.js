import { baseApiUrl, baseUrl } from '../utilities'
;(async () => {
  if (!localStorage.getItem('token')) {
    window.location.href = `${baseUrl}/`
  }

  const resFetch = await fetch(`${baseApiUrl}/auth/logout`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })

  localStorage.removeItem('token')
  window.location.href = `${baseUrl}/`
})()
