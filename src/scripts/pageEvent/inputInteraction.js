const togglePasswordVis = () => {
  const passwordBoxRef = document.getElementById('password')
  const passwordVisTextRef = document.getElementById('passwordVisText')

  if (passwordBoxRef.type === 'password') {
    passwordBoxRef.type = 'text'
    passwordVisTextRef.textContent = 'HIDE'
  } else {
    passwordBoxRef.type = 'password'
    passwordVisTextRef.textContent = 'SHOW'
  }
}
