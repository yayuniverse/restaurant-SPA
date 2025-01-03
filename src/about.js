export function renderAbout() {
    const contentPage = document.querySelector('#content')
    const headerText = document.createElement('h1')
    headerText.textContent = 'ABOUT'
    return headerText
}