const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {

aba.addEventListener("click", function(){

if(aba.classList.contains("selecionada")){
    return;
}

selecionarAba(aba)

mostrarInformacoesDaAba(aba)

function mostrarInformacoesDaAba(aba){

}

const informacaoSelecionada = document.querySelector(".informacao.selecionada");

informacaoSelecionada.classList.remove("selecionada")

const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`;

const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);

informacaoASerMostrada.classList.add("selecionada")

});

});

function selecionarAba(aba){

const abaSelecionada = document.querySelector(".aba.selecionada");

abaSelecionada.classList.remove("selecionada")

aba.classList.add("selecionada")

}