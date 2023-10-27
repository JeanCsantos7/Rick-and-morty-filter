/* const nome = document.querySelector('.Name')
const statuss = document.querySelector('.Situacao')
const specie = document.querySelector('.specie')
const imagem = document.querySelector('.img-card')
const inputValue = document.querySelector('#inputValue')
const lastLocation = document.querySelector('.Local')
const form = document.querySelector('form')
const main = document.querySelector('main')
const circulo_status = document.querySelector('#circulo')
const Filtrovivos = document.querySelector('.VIVO')
 

const consumindoAPI = async (personagem) => {

const API = await fetch(`https://rickandmortyapi.com/api/character/${personagem}`)
const data = await API.json()

return data

}


let iterar= 1


const renderImage = async(personagem) => 
{
 try{

    const resultado = await consumindoAPI(personagem)
    nome.innerHTML = resultado.name
    statuss.innerHTML = resultado.status
    specie.innerHTML = resultado.species
    lastLocation.innerHTML = resultado.location.name
    imagem.src = resultado.image


    if(resultado.status === 'Dead')
    { circulo_status.src = "./Assets/circulo vermelho.png"}

    else if(resultado.status === 'Alive'){

      circulo_status.src = "./Assets/circulo.png"

    }

    else{

      circulo_status.src = "./Assets/circulo cinza.png"

    }

    return resultado
  
    

 }

 catch{
 nome.innerHTML = 'erro'
    statuss.innerHTML = 'erro'
    specie.innerHTML = 'erro'
    lastLocation.innerHTML = 'erro'
    imagem.src = 'erro'

 }
  

 

}


renderImage(iterar)


form.addEventListener('submit', (e) => {

 e.preventDefault()

 renderImage(inputValue.value)
 inputValue.value = ''


}) */






const nome = document.querySelector('.Name');
const statuss = document.querySelector('.Situacao');
const specie = document.querySelector('.specie');
const imagem = document.querySelector('.img-card');
const inputValue = document.querySelector('#inputValue');
const lastLocation = document.querySelector('.Local');
const form = document.querySelector('form');
const main = document.querySelector('main');
const circulo_status = document.querySelector('#circulo');
const Filtrovivos = document.querySelector('.VIVO');
const Filtromortos = document.querySelector('.MORTO');
const Filtrodesconhecido = document.querySelector('.DESCONHECIDO');
const divRes = document.querySelector("#resultado");
const logotipo = document.querySelector('.logo');
const container = document.querySelector('.container');
const carregar = document.querySelector('.carregar_mais')
const hamburguer_menu = document.querySelector('.nav_bar')


const consumindoAPI = async (personagem) => {
  const API = await fetch(`https://rickandmortyapi.com/api/character/${personagem}`);
  const data = await API.json();
  return data;
}

const filterCharacters = async (status) => {
  try {
    const url = `https://rickandmortyapi.com/api/character/?status=${status}`;
    const api = await fetch(url);
    const data = await api.json();
    divRes.innerHTML = "";

    if (data.error) {
      alert("Nenhum personagem encontrado");
      return;
    }

    data.results.forEach((item) => {
      const divItem = document.createElement("div");
      divItem.classList.add("container");
      divItem.classList.add("main");

      // AQUI INSERIMOS OS ELEMENTOS
      divItem.innerHTML = `
      <main>
      <div class="container">
      <img class="img-card" src="${item.image}" alt="">
        <h1 class="Name">${item.name}</h1>
        <span class="status">
          <p class="${item.status}"></p>
          <h2 class="specie">${item.species}</h2>
        </span>
        <div class="conteudo2">
          <span class="lastLocation">Last known location:</span>
          <span class="Local">${item.location.name}</span>
        </div>

        </div>
        </main>

        

      `;
      divRes.appendChild(divItem);
    });
  } catch (error) {
    console.error("Erro ao filtrar personagens: ", error);
  }
}

let iterar = 1;

const renderImage = async (personagem) => {
  try {
    const resultado = await consumindoAPI(personagem);

   
      nome.innerHTML = resultado.name;

      statuss.innerHTML = resultado.status;
      specie.innerHTML = resultado.species;
      lastLocation.innerHTML = resultado.location.name;
      imagem.src = resultado.image;
      circulo_status.src = "./Assets/circulo.png";


      if(resultado.status === 'Dead')
    { circulo_status.src = "./Assets/circulo vermelho.png"}

    else if(resultado.status === 'Alive'){

      circulo_status.src = "./Assets/circulo.png"

    }

    else{

      circulo_status.src = "./Assets/circulo cinza.png"

    }
    

    return resultado;


  } catch (error) {
    nome.innerHTML = 'Erro na API';
    statuss.innerHTML = '';
    specie.innerHTML = '';
    lastLocation.innerHTML = '';
    imagem.src = '';
    circulo_status.src = '';
  }




}

Filtrovivos.addEventListener('click', async (e) => {
  e.preventDefault();
  logotipo.remove()
  container.remove()
  inputValue.remove()
  main.remove()
  
  filterCharacters('Alive');
});

Filtromortos.addEventListener('click', async (e) => {
  e.preventDefault();
  logotipo.remove()
  container.remove()
  inputValue.remove()
  main.remove()
  filterCharacters('Dead');
});

Filtrodesconhecido.addEventListener('click', async (e) => {
  e.preventDefault();
  logotipo.remove()
  container.remove()
  inputValue.remove()
  main.remove()
  carregar.style.display = 'block'
  filterCharacters('unknown');
});

renderImage(iterar);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  renderImage(inputValue.value);
  inputValue.value = '';
});


function ativarBtn()
{


   hamburguer_menu.classList.toggle('open')



}










