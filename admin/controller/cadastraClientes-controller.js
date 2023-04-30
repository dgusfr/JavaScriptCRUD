import { clienteService } from '../service/cliente-service.js'

//data-form é um atributo no 'cadastra-cliente.html' o DOM percorre esse formulário
//e retorna uma const formulario:
const formulario = document.querySelector('[data-form]')

//Quando a ação de criar um formulário for realizada o 'addEventListener' irá captar o evento de 'submit' e assim execurtando o arrowfunction
formulario.addEventListener('submit', (evento)=> { 
  //para antes de eviar as informações do furmulario o codigo buscar os nomes, prevenindo o envio do formulário usamos:
  evento.preventDefault()
  //no alvo do evento irá ser feito um queryselector com a busca do data-nome e data-email (data attribute)
  const nome = evento.target.querySelector('[data-nome]').value
  const email = evento.target.querySelector('[data-email]').value

  //Apos selecionado as informações o ClienteService irá receber os dados do cliente 
  clienteService.criaCliente(nome, email)
  //apos o cliente ser cadastrado ele será redirecionado para outra pagina:
  .then(()=> {
    window.location.href = '../telas/cadastro_concluido.html'
  })
})