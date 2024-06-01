/* Animação do nome */

function ativaLetra(elemento) {
    return new Promise(resolve => {
        const texto = elemento.textContent;
        elemento.textContent = '';
        [...texto].forEach((letra, i) => {
            setTimeout(() => {
                elemento.textContent += letra;
                if (i === texto.length - 1) resolve();
            }, 85 * i);
        });
    });
}

document.addEventListener("DOMContentLoaded", async function () {
    const nomeElement = document.querySelector(".nome");
    const sobrenomeElement = document.querySelector('.pereira');
    const complemento = document.querySelector('.animation_2');
    const button = document.querySelector('.btn-topo-do-site');

    await ativaLetra(nomeElement);
    sobrenomeElement.style.visibility = 'visible'; // Torna a palavra "Pereira" visível
    await ativaLetra(sobrenomeElement);
    complemento.style.visibility = 'visible';
    await ativaLetra(complemento);
    button.style.visibility = 'visible';


    console.log("Nome completo concluído.");
});

/* Menu mobile */

let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
