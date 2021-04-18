export class ResultCard extends HTMLElement {
  get name() {
    return this.getAttribute('name')
  }

  get desc() {
    return this.getAttribute('desc')
  }

  get img() {
    return this.getAttribute('img')
  }

  get href() {
    return this.getAttribute('href')
  }

  constructor(name, desc, img, href) {
    super()

    const ResultCardContainer = document.createElement('a')
    ResultCardContainer.href = href
    ResultCardContainer.classList.add(
      'bg-white',
      'shadow-lg',
      'flex',
      'flex-col',
      'sm:flex-row',
      'p-3',
      'rounded-3xl',
      'm-5',
      'sm:mx-0',
    )

    const TellerImageContainer = document.createElement('div')
    TellerImageContainer.classList.add('relative', 'flex-shrink-0')

    const TellerImage = document.createElement('img')
    TellerImage.src = img
    TellerImage.alt = name
    TellerImage.classList.add(
      'w-full',
      'sm:h-48',
      'sm:w-48',
      'rounded-2xl',
      'object-cover',
    )
    TellerImageContainer.append(TellerImage)

    const TellerTextContainer = document.createElement('div')
    TellerTextContainer.classList.add('mt-5', 'sm:mx-6', 'sm:mt-3', 'flex-grow')

    const TellerName = document.createElement('h2')
    TellerName.textContent = name
    TellerName.classList.add('font-bold', 'text-2xl', 'sm:text-3xl', 'mb-2')

    const TellerDescription = document.createElement('p')
    TellerDescription.textContent = desc
    TellerDescription.classList.add(
      'overflow-ellipsis',
      'overflow-hidden',
      'line-clamp-3',
    )

    TellerTextContainer.append(TellerName, TellerDescription)
    ResultCardContainer.append(TellerImageContainer, TellerTextContainer)
    this.append(ResultCardContainer)
  }
}
