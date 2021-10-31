VanillaTilt.init(document.querySelector(".container .content"), {
  max: 6,
  speed: 250,
  glare: true,
  "max-glare": 0.5
});


// post request

// function doPost(url, body){
//   console.log(body)

//   let request = new XMLHttpRequest();
//   request.open('POST', url, true);
//   request.setRequestHeader("Content-type", "application/json");
//   request.send(JSON.stringify(body));

//   request.onload = () => {
//     console.log(this.responseText);
//   }
  
//   return request.responseText

// }

async function doPost(url, body) {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(body)
  })

  return response;
  console.log(response)
}



function registerUser(){
  preventDefault();
  url = "http://127.0.0.1:5500/cadastro.html"

  let emailPessoal = document.getElementById('email-pessoal').value;
  let email = document.getElementById('email').value;
  let rua = document.getElementById('rua').value;
  let complemento = document.getElementById('complemento').value;
  let cep = document.getElementById('cep').value;
  let uf = document.getElementById('uf').value;
  let nomeCompleto = document.getElementById('name').value;
  let telefone = document.getElementById('telefone').value;
  let numero = document.getElementById('numero').value;
  let bairro = document.getElementById('bairro').value;
  let cidade = document.getElementById('cidade').value;

  body = {
    "seu_email": emailPessoal,
    "nome": nomeCompleto,
    "email": email,
    "telefone": telefone,
    "rua": rua,
    "número": numero,
    "complemento": complemento,
    "bairro": bairro,
    "cidade": cidade,
    "uf": uf, 
    "cep": cep
  }

  console.log(email)
  doPost(url, body);

};
