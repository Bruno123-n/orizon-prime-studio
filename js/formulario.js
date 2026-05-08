export function formulario() {

    const form = document.querySelector('.form-agendamento')

    form.addEventListener('submit', (event) => {

        event.preventDefault()

        const nome = document.querySelector('#nome').value

        const telefone = document.querySelector('#telefone').value

        const servico = document.querySelector('#servico').value



        if(nome === '' || telefone === '') {

            alert('Preencha todos os campos')

            return
        }

        if(servico === 'Escolha um serviço') {

            alert('Escolha um serviço')

            return
        }



        const mensagem = `
            Olá, meu nome é ${nome}.

            Gostaria de agendar o serviço:
            ${servico}

            Telefone: ${telefone}
        `

        const url = `https://wa.me/5547997688933?text=${encodeURIComponent(mensagem)}`

        window.open(url, '_blank')


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