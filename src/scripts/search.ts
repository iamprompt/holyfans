const searchParams = new URLSearchParams(window.location.search)
const searchKey = searchParams.get('search_keyword') as string

const searchInput = document.getElementById('search_keyword') as HTMLElement
const searchKeyText = document.getElementById('search_key_text') as HTMLElement
console.log(searchInput)

searchInput.setAttribute('value', searchKey)
searchKeyText.textContent = searchKey
