import { clienteService } from '../service/cliente-service.js'

const criaNovaLinha = (nome, email, id) =>  { 
  const linhaNovoCliente = document.createElement('tr')
  const conteudo = `
      <td class="td" data-td>${nome}</td>
                  <td>${email}</td>
                  <td>
                      <ul class="tabela__botoes-controle">
                          <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                          <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                      </ul>
                  </td> 
                   `
  //data atributes: com conteudo e id do cliente respectivamente                
  linhaNovoCliente.innerHTML = conteudo
  linhaNovoCliente.dataset.id = id
  return linhaNovoCliente
}


const tabela = document.querySelector('[data-tabela]')

//evento de escuta na tabela para saber se o botão de "remove cliente" foi clicado 
//A função assincrona 'async' tem a expressão await que pausa a wxecução da função assincrona e espera pela resolução da promise e retorna a função assincrona e retorna o valor resolvido 
tabela.addEventListener('click', async (evento)=> {
    //se o alvo do vento tiver o nome de classe: 'botao-simples botao-simples--excluir'
    let ehBotaoDeDeleta = evento.target.className === 'botao-simples botao-simples--excluir'
    //Caso seja para deletar 
    if(ehBotaoDeDeleta){
        //para deletar a linha e o cliente é necessário achar o elemento pai mais proximo da <td/>. 'closest' = mais proximo da calse pai 
        try{
            const linhaCliente = evento.target.closest('[data-id]')
            let id = linhaCliente.dataset.id
            await clienteService.removeCliente(id)
            linhaCliente.remove()
        }
        catch(erro){
            console.log(erro)
            window.location.href = '../telas/erro.html'
        }
    }
        
})

const render = async () => {
    try{
        const listaClientes = await clienteService.listaClientes()

        listaClientes.forEach(elemento => {
            tabela.appendChild(criaNovaLinha(elemento.nome,elemento.email, elemento.id))
        })
    }
    catch(erro){
        console.log(erro)
        window.location.href = '../telas/erro.html'
    }
    
}

render()

