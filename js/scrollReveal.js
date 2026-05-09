export function scrollReveal() {

    const elementos = document.querySelectorAll('.aparecer')

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if(entry.isIntersecting) {

                entry.target.classList.add('ativo')

            }

        })

    }, {
        threshold: 0.2
    })

    elementos.forEach((elemento) => {

        observer.observe(elemento)

    })

}