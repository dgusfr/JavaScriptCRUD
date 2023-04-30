import { clienteService } from "../service/cliente-service"

(async () => {

    //Geração da instancia do objeto URL. 'window.location' = local onde está na pagina
    const pegaURL = new URL(window.location)

    //pega os ids da url que consta no listaCliente-Controllers
    const id = pegaURL.searchParams.get('id')

    //percorre o DOM a procura dos dados 
    const inputNome = document.querySelector('[data-nome]')
    const inputEmail = document.querySelector('[data-email]')

    try{
        //com a resposta o valor (value) no campo nome será igual aos dados no campos nome  email respectivamente
        const dados = await clienteService.detalhaCliente(id)
        inputNome.value = dados.nome
        inputEmail.value = dados.email
    }
    catch(erro){
        console.log(erro)
        window.location.href = '../telas/erro.html'
    }
    

    //pesquisa de formulario na pagina:  
    const formulario = document.querySelector('[data-form]')

    //ao clicar em submit o cliente vai ser atualizado e apos editado e redirecionado para pagina de edição concluida 
    formulario.addEventListener('submit', async (evento) => {
        evento.preventDefault()
        try{
            await clienteService.atualizaCliente(id, inputNome.value, inputEmail.value)
            window.location.href = "../telas/edicao_concluida.html" 
        }
        catch(erro){
            console.log(erro)
            window.location.href = '../telas/erro.html'
        }        
    })
})()

