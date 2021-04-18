import { baseApiUrl } from '../utilities'
import { LoadingOverlay } from '../customElements/loading'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

var script = document.createElement('script')
script.src = `https://maps.googleapis.com/maps/api/js?key=${
  import.meta.env.VITE_GAPI_KEY
}`
script.async = true

document.head.appendChild(script)

let map

dayjs.extend(relativeTime)
;(async () => {
  const Loading = new LoadingOverlay()
  document.body.append(Loading)

  const resFetch = await fetch(`${baseApiUrl}/tellers${window.location.search}`)
  const tellerJson = await resFetch.json()
  const teller = tellerJson.payload
  console.log(teller)

  const loc = { lat: teller.address._latitude, lng: teller.address._longitude }

  map = new google.maps.Map(document.getElementById('map'), {
    center: loc,
    zoom: 16,
    disableDefaultUI: true,
  })

  const marker = new google.maps.Marker({
    position: loc,
    map: map,
  })

  document.querySelector('#profile-img').src = teller.img
  document.querySelector(
    '#ht-name',
  ).textContent = `${teller.nameEN} (${teller.nameTH})`
  document.querySelector('#ht-fullBio').textContent = teller.bio
  document.querySelector(
    '#subscription-price',
  ).textContent = `Subscribe for ${teller.subPrice}฿ / month`

  document.querySelector(
    '#no-of-post',
  ).textContent = `${teller.posts.length} posts`

  teller.posts.forEach((p) => {
    document.querySelector('#post-container').innerHTML += `<div
  class="bg-white w-full shadow-lg flex flex-col items-start p-5 rounded-xl"
>
  <div class="flex items-center space-x-5 mb-5">
    <div class="h-12 w-12 rounded-full">
      <img
        src="${teller.img}"
        alt="${teller.nameEN}"
        class="h-12 w-12 rounded-full"
      />
    </div>
    <div>
      <div class="text-xl font-bold">${teller.nameEN}</div>
      <div class="text-sm font-light">${dayjs().to(
        dayjs.unix(p.dateCreated._seconds),
      )}</div>
    </div>
  </div>

  ${
    p.content
      ? `<div>
  ${p.content}
</div>`
      : ``
  }
  ${
    p.img
      ? `<div class="mt-5 w-full">
  <img
    src="${p.img}"
    class="h-80 w-full object-cover rounded-xl"
  />
</div>`
      : ``
  }
</div>`
  })

  Loading.classList.add('hidden')
})()
