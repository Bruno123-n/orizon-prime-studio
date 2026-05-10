export function lazyImages() {

    const imagens = document.querySelectorAll('.lazy-image')

    imagens.forEach((imagem) => {

        if(imagem.complete) {

            imagem.classList.add('loaded')

        } else {

            imagem.addEventListener('load', () => {

                imagem.classList.add('loaded')

            })

        }

    })

}