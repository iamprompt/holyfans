import { baseUrl } from '../utilities'

const advancedSearchModule = {
  categories: {
    name: 'Categories',
    option: [
      { name: 'Tarot', value: 'Tarot' },
      { name: 'Thai Horo', value: 'Thai Horo' },
      { name: 'Chinese Horo', value: 'Chinese Horo' },
      { name: 'Zodiac Sign', value: 'Zodiac Sign' },
      { name: 'Candle prediction', value: 'Candle prediction' },
      { name: 'Feng Shui', value: 'Feng Shui' },
    ],
  },
  area: {
    name: 'Area',
    option: [
      { name: 'Bangkok', value: 'Bangkok' },
      { name: 'Central', value: 'Central' },
    ],
  },
  price_range: {
    name: 'Price Range',
    option: [
      { name: '0฿ - 100฿', value: '1' },
      { name: '101฿ - 300฿', value: '2' },
      { name: '300฿ - 500฿', value: '3' },
      { name: '500฿ - 1,000฿', value: '4' },
    ],
  },
}

export class SearchBar extends HTMLElement {
  constructor() {
    super()

    const Container = document.createElement('div')
    Container.classList.add('relative', 'mx-auto', 'w-4/5')

    const FormContainer = document.createElement('form')
    FormContainer.action = `${baseUrl}/result.html`

    const FormLabel = document.createElement('label')
    FormLabel.classList.add(
      'absolute',
      'top-3.5',
      'left-3',
      'font-bold',
      'z-10',
    )
    FormLabel.setAttribute('for', 'search_keyword')
    FormLabel.textContent = 'Find'

    const FormInput = document.createElement('input')
    FormInput.classList.add(
      'w-full',
      'bg-gray-100',
      'focus:bg-gray-50',
      'text-black',
      'transition',
      'border-0',
      'focus:ring',
      'focus:ring-pink-400',
      'rounded-xl',
      'py-3',
      'pr-10',
      'pl-14',
      'appearance-none',
      'leading-normal',
    )
    FormInput.type = 'text'
    FormInput.id = 'search_keyword'
    FormInput.name = 'search_keyword'
    FormInput.placeholder = 'Your best fortune teller...'
    FormInput.autocomplete = 'off'

    const FormSubmitButton = document.createElement('button')
    FormSubmitButton.type = 'submit'
    FormSubmitButton.classList.add('absolute', 'top-3', 'right-3')

    const SearchIcon = document.createElement('span')
    SearchIcon.classList.add('material-icons-round')
    SearchIcon.textContent = 'search'

    FormSubmitButton.append(SearchIcon)

    const AllAdvancedSearchContainer = document.createElement('div')
    AllAdvancedSearchContainer.classList.add(
      'flex',
      'flex-col',
      'mx-auto',
      'mt-3',
      'items-end',
      'space-y-3',
    )

    const AdvancedSearchText = document.createElement('div')
    AdvancedSearchText.classList.add('flex', 'items-center', 'cursor-pointer')
    AdvancedSearchText.id = 'advanced-search-btn'
    AdvancedSearchText.textContent = 'Advanced Search'

    const EMoreIcon = document.createElement('span')
    EMoreIcon.classList.add('material-icons-round')
    EMoreIcon.textContent = 'expand_more'
    AdvancedSearchText.append(EMoreIcon)

    AllAdvancedSearchContainer.append(AdvancedSearchText)

    const AdvancedSelectContainer = document.createElement('div')
    AdvancedSelectContainer.classList.add('w-full', 'hidden', 'space-y-3')

    Object.keys(advancedSearchModule).forEach((k) => {
      const ASearchContainer = document.createElement('div')
      ASearchContainer.classList.add('w-full')

      const SelectSearch = document.createElement('select')
      SelectSearch.name = k.toLowerCase()
      SelectSearch.id = k.toLowerCase()
      SelectSearch.classList.add(
        'block',
        'w-full',
        'appearance-none',
        'rounded-xl',
        'bg-gray-100',
        'focus:bg-gray-50',
        'border-0',
        'focus:ring',
        'focus:ring-pink-400',
      )

      const NullOption = document.createElement('option')
      NullOption.value = ''
      NullOption.textContent = `-- ${advancedSearchModule[k].name} --`
      SelectSearch.append(NullOption)

      advancedSearchModule[k].option.forEach((o) => {
        const VOption = document.createElement('option')
        VOption.value = o.value
        VOption.textContent = `${o.name}`
        SelectSearch.append(VOption)
      })

      ASearchContainer.append(SelectSearch)
      AdvancedSelectContainer.append(ASearchContainer)
    })

    AllAdvancedSearchContainer.append(AdvancedSelectContainer)

    FormContainer.append(
      FormLabel,
      FormInput,
      FormSubmitButton,
      AllAdvancedSearchContainer,
    )

    Container.appendChild(FormContainer)
    this.append(Container)

    this.querySelector('#advanced-search-btn').addEventListener('click', () => {
      if (AdvancedSelectContainer.classList.contains('hidden')) {
        EMoreIcon.textContent = 'expand_less'
        AdvancedSelectContainer.classList.remove('hidden')
      } else {
        EMoreIcon.textContent = 'expand_more'
        AdvancedSelectContainer.classList.add('hidden')
      }
    })
  }
}
