export function menuMobile() {

    const botaoMenu = document.querySelector('.menu-mobile')

    const nav = document.querySelector('nav')

    const linksMenu = document.querySelectorAll('nav a')
    

    if (!botaoMenu || !nav) return    

    botaoMenu.addEventListener('click', () => {

        nav.classList.toggle('ativo')

    })

    linksMenu.forEach((link) => {

        link.addEventListener('click', () => {

            nav.classList.remove('ativo')

        })

    })


}