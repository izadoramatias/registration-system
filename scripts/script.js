// post request

function submitDataToAPI(event) {
  // event.preventDefault()

  let emailPessoal = document.getElementById('email-pessoal').value
  let email = document.getElementById('email').value
  let rua = document.getElementById('rua').value
  let complemento = document.getElementById('complemento').value
  let cep = document.getElementById('cep').value
  let uf = document.getElementById('uf').value
  let nomeCompleto = document.getElementById('name').value
  let telefone = document.getElementById('telefone').value
  let numero = document.getElementById('numero').value
  let bairro = document.getElementById('bairro').value
  let cidade = document.getElementById('cidade').value

  const dataBody = {
    seu_email: emailPessoal,
    nome: nomeCompleto,
    email: email,
    telefone: telefone,
    rua: rua,
    numero: numero,
    complemento: complemento,
    bairro: bairro,
    cidade: cidade,
    uf: uf,
    cep: cep
  }
  const url = "https://estagio.eficazmarketing.com/api/user"
  console.log(dataBody)

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataBody)
  })

  const takeModal = document.querySelector(".modal");
  takeModal.style.visibility = "visible";
}

const takeFormToSubmit = document.querySelector('#formulario');
takeFormToSubmit.addEventListener('submit', submitDataToAPI);

