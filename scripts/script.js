VanillaTilt.init(document.querySelector(".container .content"), {
  max: 6,
  speed: 250,
  glare: true,
  "max-glare": 0.5
});

function getApiEficazInfos(){
  const url = `https://estagio.eficazmarketing.com/api/user`;

  fetch(url)
  .then(response => response.json()).then(data => {
    console.log(data[0])
  });
  
  
}

getApiEficazInfos()
