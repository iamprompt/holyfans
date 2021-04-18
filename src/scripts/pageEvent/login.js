import { baseApiUrl, baseUrl } from '../utilities'

const tokenExist = localStorage.getItem('token')
if (tokenExist) {
  window.location.href = `${baseUrl}/explore.html` // Redirect to explore page
}

const LoginForm = document.getElementById('loginForm')

LoginForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  const { target } = e

  const email = target[0].value
  const password = target[1].value

  console.log(email, password)

  const postData = {
    email,
    password,
  }

  const loginStatus = await fetch(`${baseApiUrl}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  })

  const loginRes = await loginStatus.json()
  const {
    payload: { token, user },
  } = loginRes

  if (!token) {
    alert(loginRes.payload)
    return
  }

  alert(`Hello ${user.firstName} (${user.role})`)

  localStorage.setItem('token', token) // Set token to local storage

  window.location.href = `${baseUrl}/explore.html` // Redirect to explore page
})
