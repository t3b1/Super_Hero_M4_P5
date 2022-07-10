import { clave } from './clave.js';
import { buscarDatos } from './datos.js';
import { verGrafico } from './grafico.js';


//variables html
const formHero = document.querySelector('#form-hero'),
      inputHero = document.querySelector('#input-hero');

formHero.addEventListener('submit', async (e) => {
    e.preventDefault()
    const idHero = inputHero.value;

    let hero = await fetch(`https://www.superheroapi.com/api.php/${clave}/${idHero}/`)
    hero = await hero.json()
    buscarDatos(hero);
    verGrafico(hero);
    console.log(hero);
    inputHero.value = "";

})

