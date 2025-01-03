import './css/menu.css'

export function menuRenderer() {
    const contentPage = document.querySelector('#content')
    const headerText = document.createElement('h1')
    headerText.textContent = 'MENU'
    contentPage.append(headerText)
}