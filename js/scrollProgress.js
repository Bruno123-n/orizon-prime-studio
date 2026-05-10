export function scrollProgress() {

    const barra = document.querySelector('.scroll-progress')

    window.addEventListener('scroll', () => {

        const alturaTotal =
            document.documentElement.scrollHeight -
            window.innerHeight

        const progresso =
            (window.scrollY / alturaTotal) * 100

        barra.style.width = `${progresso}%`

    })

}