export function menuMobile() {

    const botaoMenu = document.querySelector('.menu-mobile')

    const nav = document.querySelector('nav')

    const linksMenu = document.querySelectorAll('nav a')

    const overlay = document.querySelector('.overlay')
    

    if (!botaoMenu || !nav) return 
    
    function fecharMenu() {

        nav.classList.remove('ativo')

        overlay.classList.remove('ativo')

        document.body.classList.remove('menu-aberto')

        botaoMenu.classList.remove('ativo')

    }

    botaoMenu.addEventListener('click', () => {

        nav.classList.toggle('ativo')

        overlay.classList.toggle('ativo')

        document.body.classList.toggle('menu-aberto')

        botaoMenu.classList.toggle('ativo')

        const menuAberto = nav.classList.contains('ativo')

        botaoMenu.setAttribute('aria-expanded', menuAberto)

    })

    linksMenu.forEach((link) => {

        link.addEventListener('click', fecharMenu)

    })

    overlay.addEventListener('click', fecharMenu)


}

