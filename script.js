const button = document.querySelector('.mode-changer')

const themes = {
    't-dark' : 't-light',
    't-light' : 't-dark'
}

if(button)
{
    button.addEventListener('click', event => {
        event.preventDefault()
        const currentTheme = document.body.dataset.theme
        document.body.setAttribute('data-theme', themes[currentTheme])
    })
}