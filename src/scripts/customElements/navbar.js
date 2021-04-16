import { baseUrl } from '../utilities'

const NAV = [
  { title: 'Home', target: `${baseUrl}/` },
  { title: 'Explore', target: `${baseUrl}/explore.html` },
  { title: 'About Us', target: `${baseUrl}/aboutus.html` },
  { title: 'Login', target: `${baseUrl}/login.html`, icon: 'login' },
  { title: 'Logout', target: `${baseUrl}/logout.html`, icon: 'logout' },
]

class NavBar extends HTMLElement {
  constructor() {
    super()
    this.id = 'header'
    this.classList.add(
      'fixed',
      'w-full',
      'bg-white',
      'border-b',
      'border-gray-200',
      'z-20',
    )

    const InnerBarContainer = document.createElement('div')
    InnerBarContainer.classList.add(
      'max-w-screen-lg',
      'container',
      'mx-auto',
      'flex',
      'flex-wrap',
      'items-center',
      'mt-0',
      'p-5',
      'justify-between',
    )

    // Logo
    const LogoContainer = document.createElement('a')
    LogoContainer.href = './index.html'

    const LogoPictureContainer = document.createElement('picture')
    const LogoAVIF = document.createElement('source')
    LogoAVIF.srcset = `${baseUrl}/assets/logo/lockup_color_horizontal.avif`
    LogoAVIF.type = 'image/avif'

    const LogoWEBP = document.createElement('source')
    LogoWEBP.srcset = `${baseUrl}/assets/logo/lockup_color_horizontal.webp`
    LogoWEBP.type = 'image/webp'

    const LogoSVG = document.createElement('source')
    LogoSVG.srcset = `${baseUrl}/assets/logo/lockup_color_horizontal.svg`
    LogoSVG.type = 'image/svg+xml'

    const LogoPNG = document.createElement('source')
    LogoPNG.srcset = `${baseUrl}/assets/logo/lockup_color_horizontal.png`
    LogoPNG.type = 'image/png'

    const Logo = document.createElement('img')
    Logo.src = `${baseUrl}/assets/logo/lockup_color_horizontal.png`
    Logo.alt = 'HolyFans'
    Logo.classList.add('h-10')

    LogoPictureContainer.append(LogoAVIF, LogoWEBP, LogoSVG, LogoPNG, Logo)

    LogoContainer.appendChild(LogoPictureContainer)
    InnerBarContainer.appendChild(LogoContainer)

    // Hamburger Menu
    const HamburgerContainer = document.createElement('div')
    HamburgerContainer.classList.add('block', 'text-xl', 'md:hidden')

    const Hamburger = document.createElement('span')
    Hamburger.id = 'menu-btn'
    Hamburger.textContent = 'menu'
    Hamburger.classList.add(
      'material-icons-round',
      'cursor-pointer',
      'p-1',
      'border',
      'rounded-md',
    )

    HamburgerContainer.appendChild(Hamburger)
    InnerBarContainer.appendChild(HamburgerContainer)

    // Menu
    const NavContainer = document.createElement('nav')
    NavContainer.id = 'nav-content'
    NavContainer.classList.add(
      'hidden',
      'w-full',
      'px-2',
      'pt-5',
      'md:block',
      'md:w-auto',
      'md:p-0',
      'transform',
      'ease-in',
    )

    const NavListContainer = document.createElement('ul')
    NavListContainer.classList.add(
      'flex',
      'flex-col',
      'divide-y',
      'divide-gray-200',
      'md:divide-y-0',
      'md:flex-row',
      'md:space-y-0',
      'md:space-x-8',
      'text-gray-700',
    )

    const currentToken = localStorage.getItem('token')

    NAV.forEach((item) => {
      // console.log(item)
      const currentPath = window.location.pathname
      // console.log(currentPath)

      if (currentToken && item.title === 'Login') {
        return
      }
      if (!currentToken && item.title === 'Logout') {
        return
      }

      const NavList = document.createElement('li')
      NavList.classList.add('py-2')

      const NavItem = document.createElement('a')
      NavItem.href = item.target
      NavItem.classList.add('flex', 'items-center', 'hover:text-black')

      if (item.icon) {
        const NavIcon = document.createElement('span')
        NavIcon.textContent = item.icon
        NavIcon.classList.add('material-icons-round', 'inline-block', 'mr-2')
        NavItem.append(NavIcon)
      }

      NavItem.innerHTML += item.title

      if (
        item.target.replace('.html', '').replace('index', '') ===
        currentPath.replace('.html', '').replace('index', '')
      ) {
        NavItem.classList.add('font-bold', 'text-black')
      }

      NavList.appendChild(NavItem)
      NavListContainer.appendChild(NavList)
    })

    NavContainer.appendChild(NavListContainer)
    InnerBarContainer.appendChild(NavContainer)

    this.appendChild(InnerBarContainer)

    this.querySelector('#menu-btn')?.addEventListener(
      'click',
      ({ target: t }) => {
        const targetRef = t
        const navContentRef = document.getElementById('nav-content')
        // console.log(targetRef.innerHTML)

        if (navContentRef.classList.contains('hidden')) {
          targetRef.textContent = 'close'
          navContentRef.classList.remove('hidden')
          navContentRef.classList.add('block')
        } else {
          targetRef.textContent = 'menu'
          navContentRef.classList.add('hidden')
          navContentRef.classList.remove('block')
        }
      },
    )
  }
}

export { NavBar }
