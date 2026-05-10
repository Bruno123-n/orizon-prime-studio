export function modalImagem() {

    const imagens = document.querySelectorAll('.galeria-imagem img, .sobre-imagem img')

    const modal = document.querySelector('.modal-imagem')

    const imagemModal = modal.querySelector('img')

    imagens.forEach((imagem) => {

        imagem.addEventListener('click', () => {

            modal.classList.add('ativo')

            imagemModal.src = imagem.src

        })

    })

    modal.addEventListener('click', () => {

        modal.classList.remove('ativo')

    })

}