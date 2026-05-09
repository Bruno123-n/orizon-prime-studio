export function formulario() {


    const form = document.querySelector('.form-agendamento')

    const inputNome = document.querySelector('#nome')

    const inputTelefone = document.querySelector('#telefone')

    const selectServico = document.querySelector('#servico')

    function mostrarErro(input) {

        input.classList.add('input-erro')

    }

        inputNome.addEventListener('input', () => {

            inputNome.classList.remove('input-erro')

        })

        inputTelefone.addEventListener('input', () => {

            inputTelefone.classList.remove('input-erro')

        })

        selectServico.addEventListener('change', () => {

            selectServico.classList.remove('input-erro')

        })

    form.addEventListener('submit', (event) => {

        event.preventDefault()

        const botao = form.querySelector('button')

        const nome = document.querySelector('#nome').value

        const telefone = document.querySelector('#telefone').value

        const servico = document.querySelector('#servico').value



        if(nome === '') {

            mostrarErro(inputNome)
        }

        if(telefone === '') {

            mostrarErro(inputTelefone)

        }

        if(servico === 'Escolha um serviço') {

            mostrarErro(selectServico)

        }

        if(
            nome === '' ||
            telefone === '' ||
            servico === 'Escolha um serviço'
        ) {

            return
        }


        const mensagem = `
            Olá, meu nome é ${nome}.

            Gostaria de agendar o serviço:
            ${servico}

            Telefone: ${telefone}
        `

        const url = `https://wa.me/5547997688933?text=${encodeURIComponent(mensagem)}`

        botao.textContent = 'Enviando...'

        botao.disabled = true

        window.open(url, '_blank')

        botao.textContent = 'Agendar Agora'
        
        botao.disabled = false


        console.log(nome)

        console.log(telefone)

        console.log(servico)

    })

}

export function mascaraTelefone() {

    const inputTelefone = document.querySelector('#telefone')

    inputTelefone.addEventListener('input', () => {

        let numeros = inputTelefone.value.replace(/\D/g, '')

        numeros = numeros.replace(/^(\d{2})(\d)/g, '($1) $2')

        numeros = numeros.replace(/(\d{5})(\d)/, '$1-$2')

        inputTelefone.value = numeros

    })

}