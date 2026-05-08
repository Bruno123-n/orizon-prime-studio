const botaoMenu = document.querySelector('.menu-mobile')

const nav = document.querySelector('nav')

botaoMenu.addEventListener('click', () => {

    nav.classList.toggle('ativo')

})


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



const header = document.querySelector('header')

function ativarHeader() {

    if(window.scrollY > 50) {

        header.classList.add('ativo')

    } else {

        header.classList.remove('ativo')

    }

}

window.addEventListener('scroll', ativarHeader)

ativarHeader()