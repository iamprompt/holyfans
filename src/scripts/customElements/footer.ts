export class Footer extends HTMLElement {
  constructor() {
    super()
    this.classList.add(
      'absolute',
      'bottom-0',
      'w-screen',
      'text-center',
      'p-2',
      'border-t',
      'border-gray-200',
    )
    this.textContent = '© 2021 NAKAMA'
  }
}
