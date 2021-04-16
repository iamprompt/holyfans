import { baseUrl } from '../utilities'

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

    FormContainer.append(FormLabel, FormInput, FormSubmitButton)

    Container.appendChild(FormContainer)
    this.append(Container)
  }
}
