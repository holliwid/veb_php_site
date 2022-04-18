/*=============== LIGHT DARK THEME ===============*/
const themeButton = document.getElementById('theme-button')
const lightTheme = 'dark-mode'
const iconTheme = 'bx-sun'



if (localStorage.theme == null){
    localStorage.theme = "light"
}
else if (localStorage.theme == "dark"){
    document.body.classList.toggle(lightTheme)
}

console.log(localStorage.theme)






themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    if (localStorage.theme == "light")
        localStorage.theme = "dark"
    else localStorage.theme = "light"
    document.body.classList.toggle(lightTheme)
    // We save the theme and the current icon that the user chose
    // localStorage.setItem('selected-theme', getCurrentTheme())
    // localStorage.setItem('selected-icon', getCurrentIcon())
})