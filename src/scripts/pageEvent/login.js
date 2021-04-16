const LoginForm = document.getElementById('loginForm')
LoginForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const { target } = e
  console.log(target)

  const email = target[0].value
  const password = target[1].value

  console.log(email, password)
})
