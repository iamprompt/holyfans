import { baseUrl, baseApiUrl } from '../utilities'
import { ResultCard } from '../customElements/resultCard'

// Get search keyword from search parameters (?search_keyword=...)
const searchParams = new URLSearchParams(window.location.search)

const searchInput = document.getElementById('search_keyword') // Search Input
const searchKeyText = document.getElementById('search_key_text') // Display Search Keyword (Result of "...")

const advCatSelect = document.getElementById('categories')
const advAreaSelect = document.getElementById('area')
const advPriceSelect = document.getElementById('price_range')

searchInput.value = searchParams.get('search_keyword') // Set value of search input to be the searched word
advCatSelect.value = searchParams.get('categories')
advAreaSelect.value = searchParams.get('area')
advPriceSelect.value = searchParams.get('price_range')
searchKeyText.textContent = searchParams.get('search_keyword') // Display the search keyword
;(async () => {
  const resultFetch = await fetch(
    `${baseApiUrl}/tellers/search${window.location.search}`,
  )
  const resultJson = await resultFetch.json()

  const result = resultJson.payload

  result.forEach((d) => {
    const card = new ResultCard(
      d.nameEN,
      d.bio,
      d.img,
      `${baseUrl}/profile.html?tId=${d.id}`,
    )
    document.getElementById('result-container').appendChild(card)
  })
})()
