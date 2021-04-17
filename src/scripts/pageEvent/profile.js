import { baseApiUrl } from '../utilities'

const searchParams = new URLSearchParams(window.location.search)

console.log('Hello')
;(async () => {
  const resFetch = await fetch(`${baseApiUrl}/tellers${window.location.search}`)
  const tellerJson = await resFetch.json()
  const teller = tellerJson.payload
  console.log(teller)

  document.querySelector('#profile-img').src = teller.img
  document.querySelector(
    '#ht-name',
  ).textContent = `${teller.nameEN} (${teller.nameTH})`
  document.querySelector('#ht-fullBio').textContent = teller.bio
  document.querySelector(
    '#subscription-price',
  ).textContent = `Subscribe for ${teller.subPrice}฿ / month`
})()
