
function ativaLetra(elemento) {
    return new Promise(resolve => {
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((letra, i) => {
            setTimeout(() => {
                elemento.innerHTML += letra;
                if (i === arrTexto.length - 1) resolve();
            }, 75 * i);
        });
    });
}

async function segundaFuncao() {
    const titulo = document.querySelector('.digitando2');
    await ativaLetra(titulo);
    console.log("Segunda função concluída. Iniciando terceira função...");
    terceiraFuncao();
}

async function terceiraFuncao() {
    const titulo = document.querySelector('.digitando3');
    await ativaLetra(titulo);
    console.log("Terceira função concluída.");
    // Aqui você pode realizar as operações da terceira função após a conclusão da segunda
}


document.addEventListener("DOMContentLoaded", function() {
    var nomeElement = document.querySelector(".meu-nome .digitando1");
    var texto = nomeElement.textContent;
    var novoTexto = texto.replace(/(Pereira)/, '<span class="pereira">$1</span>');
    nomeElement.insertAdjacentHTML = novoTexto;

    const titulo = document.querySelector('.digitando1');
    ativaLetra(titulo).then(() => {
        console.log("Primeira função concluída. Iniciando segunda função...");
        segundaFuncao();
    });  
});




