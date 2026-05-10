export function backToTop() {

    const botao = document.querySelector('.back-to-top')

    window.addEventListener('scroll', () => {

        if(window.scrollY > 400) {

            botao.classList.add('ativo')

        } else {

            botao.classList.remove('ativo')

        }

    })

    botao.addEventListener('click', () => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

    })

}