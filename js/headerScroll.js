export function headerScroll() {

    const header = document.querySelector('header')

    function ativarHeader() {

        if(window.scrollY > 50) {

            header.classList.add('ativo')

        } else {

            header.classList.remove('ativo')

        }

    }

    window.addEventListener('scroll', ativarHeader)

}