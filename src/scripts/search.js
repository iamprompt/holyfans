import { baseUrl } from './utilities'

// Get search keyword from search parameters (?search_keyword=...)
const searchParams = new URLSearchParams(window.location.search)
const searchKey = searchParams.get('search_keyword')

// If no search keyword, send back to search page
if (searchKey === '' || !searchKey)
  window.location.pathname = `${baseUrl}/explore.html`

const searchInput = document.getElementById('search_keyword') // Search Input
const searchKeyText = document.getElementById('search_key_text') // Display Search Keyword (Result of "...")

searchInput.setAttribute('value', searchKey) // Set value of search input to be the searched word
searchKeyText.textContent = searchKey // Display the search keyword
