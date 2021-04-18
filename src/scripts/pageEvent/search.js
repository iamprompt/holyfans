import { baseUrl, baseApiUrl } from '../utilities'
import { ResultCard } from '../customElements/resultCard'
import { LoadingOverlay } from '../customElements/loading'

const price_range_txt = {
  1: '0฿ - 100฿',
  2: '101฿ - 300฿',
  3: '300฿ - 500฿',
  4: '500฿ - 1,000฿',
}

// Get search keyword from search parameters (?search_keyword=...)
const searchParams = new URLSearchParams(window.location.search)

const searchKw = searchParams.get('search_keyword')
const catKw = searchParams.get('categories')
const areaKw = searchParams.get('area')
const priceKw = searchParams.get('price_range')

const searchInput = document.getElementById('search_keyword') // Search Input
const searchKeyText = document.getElementById('search_key_text') // Display Search Keyword (Result of "...")

const advCatSelect = document.getElementById('categories')
const advAreaSelect = document.getElementById('area')
const advPriceSelect = document.getElementById('price_range')

searchInput.value = searchKw // Set value of search input to be the searched word
advCatSelect.value = catKw
advAreaSelect.value = areaKw
advPriceSelect.value = priceKw
searchKeyText.textContent = `${
  searchKw ? `Result for "${searchKw}"` : `All Results`
}${catKw ? ` in ${catKw} category` : ``}${areaKw ? ` in ${areaKw} area` : ``}${
  priceKw ? ` with price ${price_range_txt[priceKw]}` : ``
}` // Display the search keyword
;(async () => {
  const Loading = new LoadingOverlay()
  document.body.append(Loading)

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
  Loading.classList.add('hidden')
})()
