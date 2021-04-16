import { baseApiUrl, baseUrl } from '../utilities'

const tokenExist = localStorage.getItem('token')
if (tokenExist) {
  window.location.href = `${baseUrl}/explore.html` // Redirect to explore page
}

const RegisterForm = document.getElementById('registerForm')

RegisterForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  const { target } = e

  const firstName = target[0].value
  const lastName = target[1].value
  const email = target[2].value
  const password = target[3].value

  const postData = {
    firstName,
    lastName,
    email,
    password,
  }

  const registerStatus = await fetch(`${baseApiUrl}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  })

  const registerRes = await registerStatus.json()

  if (registerStatus.status !== 200) {
    alert(registerRes.payload)
    return
  }

  console.log(registerRes)

  const token = registerRes.payload.token

  localStorage.setItem('token', token) // Set token to local storage

  window.location.href = `${baseUrl}/explore.html` // Redirect to explore page
})
