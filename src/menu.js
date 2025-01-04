function renderMenu() {
    const headerText = document.createElement('h1')
    headerText.textContent = 'Menu'
    return [headerText]
}

export const menuContent = renderMenu()