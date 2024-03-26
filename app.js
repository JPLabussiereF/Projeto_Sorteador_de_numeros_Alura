function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);
    let sorteados = [];
    let numero;

    if(de >= ate){
        alert('O número do campo "Do número" deve ser inferior ao número do campo "Até o número". Verifique novamente os números passados!');
        return;
    }
    if(quantidade > (ate - de + 1)){
        alert(`A quantidade solicitada no campo "Quantidade de números", deve ser inferior ou igual a diferença do número colocado no campo "Do número" e o número colocado no campo "Até o número". Verifique novamente os números passados!`);
        return;
    }


    for (let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate);
        while (sorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
        }
        sorteados.push(numero);
    }
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function alterarStatusBotao(){
    let botao = document.getElementById("btn-reiniciar");
    
    if(botao.classList.contains("container__botao-desabilitado")){
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    }else{
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }
}

function reiniciar(){
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    alterarStatusBotao();
}


// function limparCampo(){
//     campo = document.querySelector("input");
//     campo.value = "";

// }