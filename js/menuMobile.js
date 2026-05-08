export function menuMobile() {

    const botaoMenu = document.querySelector('.menu-mobile')

    const nav = document.querySelector('nav')

    botaoMenu.addEventListener('click', () => {

        nav.classList.toggle('ativo')

    })

}