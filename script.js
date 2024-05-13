
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

document.addEventListener("DOMContentLoaded", async function() {
    const nomeElement = document.getElementById("nome");
    const sobrenomeElement = document.querySelector('.pereira');
    const complemento = document.querySelector('.digitando2'); 

    await ativaLetra(nomeElement);
    sobrenomeElement.style.visibility = 'visible'; // Torna a palavra "Pereira" visível
    await ativaLetra(sobrenomeElement);
    complemento.style.visibility = 'visible';
    await ativaLetra(complemento); 


    console.log("Nome completo concluído.");
});



