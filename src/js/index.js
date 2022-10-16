/* 
    OBJETIVO: quando clicarmos na aba temos que mostrar
    o conteúdo de aba que foi clicada pelo usuario e
    esconder o conteúdo da aba anterior

*/

const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    aba.addEventListener("click", function() {
        const abaSelecionada = document.querySelector(".aba.selecionado");
        abaSelecionada.classList.remove("selecionado");

        aba.classList.add("selecionado");

        const informacaoSelecionada = document.querySelector(".informacao.selecionado");
        informacaoSelecionada.classList.remove("selecionado");

        const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

        const informacaoAserMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);
        informacaoAserMostrada.classList.add("selecionado");
    });
});


cor 
fruta 
Animation
horrio 
esação 
pedra ´recopm 
princesa 
idDoElementoDeInformacoesDaAba
lugar 
carro 
comida 
