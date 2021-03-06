import { baseUrl } from './utilities'
import '../styles/tailwind.css'

// Show Welcome console only on the first page
if (
  window.location.pathname.replace('.html', '').replace('index', '') ===
  `${baseUrl}/`
) {
  console.log('Hello World!!')
  console.log('Welcome to the world of holyness | HolyFans')
  console.group('Members (Group 1 Section 3)')
  console.log('Thanapat Jumnongrat    (Palm)   6288018')
  console.log('Veerakit Prasertpol    (Pete)   6288035')
  console.log('Supakarn Laorattanakul (Prompt) 6288087')
  console.log('Thanaboon Sapmontree   (Time)   6288123')
  console.groupEnd()
}
