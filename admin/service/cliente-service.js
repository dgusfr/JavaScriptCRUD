//Abre a comunicação com o servidor

const listaClientes = () => {
  return fetch(`http://localhost:3000/profile`).then((resposta) => {
    if (resposta.ok) {
      return resposta.json();
    }
    throw new Error("Não foi possivel listar os clientes");
  });
};

//metodo cria cliente:
const criaCliente = (nome, email) => {
  return (
    fetch(`http://localhost:3000/profile`, {
      method: "POST",
      //'cabeça' da requisição:
      headers: {
        "Content-Type": "application/json",
      },
      //corpo da formulario:
      body: JSON.stringify({
        nome: nome,
        email: email,
      }),
    })
      // então com a resposta retorna o corpo da resposta
      .then((resposta) => {
        if (resposta.ok) {
          return resposta.body;
        }
        throw new Error("Não foi possivel criar um clientes");
      })
  );
};

//metodo deleta cliente por 'id'
const removeCliente = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: "DELETE",
  }).then((resposta) => {
    if (!resposta.ok) {
      throw new Error("Não foi possivel remover um clientes");
    }
  });
};

//metodo pega dados do cliente por id
const detalhaCliente = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`).then((resposta) => {
    if (resposta.ok) {
      return resposta.json();
    }
    throw new Error("Não foi possivel detalhar um clientes");
  });
};

//metodo que atualiza o nome e email do cliente
const atualizaCliente = (id, nome, email) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: "PUT",
    headers: {
      "Content-typr": "application/json",
    },
    //dados que serão passados:
    body: JSON.stringify({
      nome: nome,
      email: email,
    }).then((resposta) => {
      if (resposta.ok) {
        return resposta.json();
      }
      throw new Error("Não foi possivel atualizar um clientes");
    }),
  });
};

//exportndo os dados a serem mostrados na pagina
export const clienteService = {
  listaClientes,
  criaCliente,
  removeCliente,
  detalhaCliente,
  atualizaCliente,
};
