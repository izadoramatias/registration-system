function getApiEficazInfos() {
  const url = `https://estagio.eficazmarketing.com/api/user`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      for (item in data) {
        console.log(data[item])

        const takeParent = document.querySelector('#parent')
        const tr = document.createElement('tr')
        tr.innerText = ''
        takeParent.append(tr);

        const tdNome = document.createElement('td')
        tdNome.innerText = data[item].nome
        tr.append(tdNome);

        const tdEmail = document.createElement('td')
        tdEmail.innerText = data[item].seu_email
        tr.append(tdEmail);

        const tdAddress = document.createElement('td')
        tdAddress.innerText = `${data[item].rua}, ${data[item].numero}
          ${data[item].complemento}, ${data[item].bairro} ${data[item].cep}
          ${data[item].cidade}-${data[item].uf}`
        tr.append(tdAddress);

        const tdTel = document.createElement('td')
        tdTel.innerText = data[item].telefone
        tr.append(tdTel);

        const tdAction = document.createElement('td')
        tdAction.innerText = 'Ação'
        tr.append(tdAction)
      }
    });
};

getApiEficazInfos();
