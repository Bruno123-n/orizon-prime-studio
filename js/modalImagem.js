export function modalImagem() {

    
    const imagens = document.querySelectorAll('.galeria-imagem img, .sobre-imagem img')
    
    const modal = document.querySelector('.modal-imagem')
    
    const imagemModal = modal.querySelector('img')
    
    const fecharModal = document.querySelector('.fechar-modal')
    

    function fecharModalFunc() {
        modal.classList.remove('ativo')
        document.body.classList.remove('modal-aberto')
    }


    imagens.forEach((imagem) => {

        imagem.addEventListener('click', () => {

            modal.classList.add('ativo')

            document.body.classList.add('modal-aberto')

            imagemModal.src = imagem.src

        })

    })

    document.addEventListener('keydown', (event) => {

        if(event.key === 'Escape') {

            fecharModalFunc()

        }

    })

    modal.addEventListener('click', (event) => {

        if(event.target === modal) {

            fecharModalFunc()

        }

    })


        fecharModal.addEventListener('click', fecharModalFunc)
    

}