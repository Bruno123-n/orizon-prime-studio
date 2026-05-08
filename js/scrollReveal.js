export function scrollReveal() {

    const elementos = document.querySelectorAll('.aparecer')

    function mostrarElementos() {

        const alturaTela = window.innerHeight

        elementos.forEach((elemento) => {

            const distanciaTopo = elemento.getBoundingClientRect().top

            if(distanciaTopo < alturaTela - 100) {

                elemento.classList.add('ativo')

            }

        })

    }

    window.addEventListener('scroll', mostrarElementos)

    mostrarElementos()

}